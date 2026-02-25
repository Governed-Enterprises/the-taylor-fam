"use client";

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, Maximize2, User, ChevronDown, Heart } from "lucide-react";
import {
  FAMILY_MEMBERS,
  GENERATION_LABELS,
  getGeneration,
  getChildren,
} from "@/lib/familyData";
import type { FamilyMember } from "@/lib/familyData";

interface FamilyTreeProps {
  viewMode: "tree" | "list";
}

// ============================================
// PART 2 — Person Node (collapsed)
// ============================================

function PersonNode({
  member,
  isSelected,
  onSelect,
  nodeRef,
}: {
  member: FamilyMember;
  isSelected: boolean;
  onSelect: (id: string | null) => void;
  nodeRef: (el: HTMLDivElement | null) => void;
}) {
  const isDeceased = !!member.deathYear;
  const yearDisplay = member.deathYear
    ? `${member.birthYear}–${member.deathYear}`
    : `b. ${member.birthYear}`;

  return (
    <div
      ref={nodeRef}
      data-member-id={member.id}
      onClick={() => onSelect(isSelected ? null : member.id)}
      className={`relative w-[160px] bg-white rounded-xl p-3 border cursor-pointer transition-all duration-200 z-[1] ${
        isSelected
          ? "border-tf-gold card-shadow-hover -translate-y-0.5"
          : "border-tf-borderLight card-shadow hover:border-tf-gold hover:-translate-y-0.5 hover:card-shadow-hover"
      } ${isDeceased ? "opacity-75" : ""}`}
    >
      {/* Photo / Avatar */}
      <div
        className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${
          member.gender === "male"
            ? "bg-tf-sageMuted/30"
            : "bg-tf-gold/15"
        }`}
      >
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`${member.firstName} ${member.lastName}`}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <User
            size={24}
            className={
              member.gender === "male" ? "text-tf-sage" : "text-tf-goldDark"
            }
          />
        )}
      </div>

      {/* Name */}
      <p className="text-sm font-medium text-tf-textPrimary text-center mt-2 leading-tight">
        {member.firstName} {member.lastName}
      </p>

      {/* Years */}
      <p className="text-xs text-tf-textMuted text-center mt-1">
        {yearDisplay}
      </p>

      {/* Relationship */}
      <p className="text-xs text-tf-gold text-center mt-1">
        {member.relationship}
      </p>
    </div>
  );
}

// ============================================
// PART 4 — Detail Card (expanded on click)
// ============================================

function DetailCard({
  member,
  onClose,
}: {
  member: FamilyMember;
  onClose: () => void;
}) {
  const isDeceased = !!member.deathYear;
  const yearDisplay = member.deathYear
    ? `${member.birthYear} – ${member.deathYear}`
    : `Born ${member.birthYear}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-30 w-[300px]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-white rounded-xl p-6 border border-tf-borderLight" style={{ boxShadow: "0 12px 40px rgba(61,43,31,0.15)" }}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 text-tf-textMuted hover:text-tf-textPrimary transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Large avatar */}
        <div
          className={`w-[120px] h-[120px] rounded-full mx-auto flex items-center justify-center ${
            member.gender === "male"
              ? "bg-tf-sageMuted/30"
              : "bg-tf-gold/15"
          } ${isDeceased ? "opacity-70" : ""}`}
        >
          {member.photo ? (
            <Image
              src={member.photo}
              alt={`${member.firstName} ${member.lastName}`}
              width={120}
              height={120}
              className="w-[120px] h-[120px] rounded-full object-cover"
            />
          ) : (
            <User
              size={48}
              className={
                member.gender === "male" ? "text-tf-sage" : "text-tf-goldDark"
              }
            />
          )}
        </div>

        {/* Full name */}
        <h3 className="font-serif-display text-xl font-semibold text-tf-textPrimary text-center mt-4">
          {member.firstName} {member.lastName}
        </h3>

        {/* Years */}
        <p className="text-sm text-tf-textMuted text-center mt-1">
          {yearDisplay}
        </p>

        {/* Relationship */}
        <p className="text-sm text-tf-gold text-center mt-1 font-medium">
          {member.relationship}
        </p>

        {/* Role */}
        {member.role && (
          <p className="text-xs text-tf-textMuted text-center mt-1 italic">
            {member.role}
          </p>
        )}

        {/* Bio */}
        <p className="text-sm text-tf-textSecondary text-center mt-3 leading-relaxed">
          {member.bio}
        </p>

        {/* Email */}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="block text-sm text-tf-gold hover:text-tf-goldDark hover:underline text-center mt-3 transition-colors"
          >
            {member.email}
          </a>
        )}
      </div>
    </motion.div>
  );
}

// ============================================
// PART 3 — SVG Connecting Lines
// ============================================

interface LineSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  isMarriage?: boolean;
}

function ConnectorLines({
  lines,
  marriageDots,
}: {
  lines: LineSegment[];
  marriageDots: { x: number; y: number }[];
}) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ overflow: "visible" }}
    >
      {lines.map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="#e5ddd3"
          strokeWidth="2"
        />
      ))}
      {marriageDots.map((dot, i) => (
        <circle key={i} cx={dot.x} cy={dot.y} r="4" fill="#c9a84c" />
      ))}
    </svg>
  );
}

// ============================================
// PART 1 — Generation Rows (Tree View)
// ============================================

function TreeView({
  selectedId,
  onSelect,
  nodeRefs,
}: {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  nodeRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
}) {
  const treeRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<LineSegment[]>([]);
  const [dots, setDots] = useState<{ x: number; y: number }[]>([]);

  const calculateLines = useCallback(() => {
    const container = treeRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const newLines: LineSegment[] = [];
    const newDots: { x: number; y: number }[] = [];

    const getNodeCenter = (id: string) => {
      const el = nodeRefs.current[id];
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top,
        top: rect.top - containerRect.top,
        bottom: rect.bottom - containerRect.top,
        left: rect.left - containerRect.left,
        right: rect.right - containerRect.left,
      };
    };

    // Marriage lines
    const processedSpouses = new Set<string>();
    FAMILY_MEMBERS.forEach((member) => {
      if (!member.spouseId || processedSpouses.has(member.id)) return;
      processedSpouses.add(member.id);
      processedSpouses.add(member.spouseId);

      const a = getNodeCenter(member.id);
      const b = getNodeCenter(member.spouseId);
      if (!a || !b) return;

      const midX = (a.x + b.x) / 2;
      const midY = (a.y + b.y) / 2;

      // Horizontal line between spouses
      newLines.push({ x1: a.right, y1: midY, x2: b.left, y2: midY, isMarriage: true });
      newDots.push({ x: midX, y: midY });

      // Parent-child connections from the marriage dot
      const childIds = [
        ...member.childIds.filter((cid) =>
          member.spouseId && FAMILY_MEMBERS.find((m) => m.id === cid)?.parentIds.includes(member.spouseId)
        ),
      ];

      // Also include children only belonging to this member (not shared with spouse)
      const soloChildren = member.childIds.filter(
        (cid) => !childIds.includes(cid)
      );

      const allChildren = [...childIds, ...soloChildren];
      if (allChildren.length === 0) return;

      const childPositions = allChildren
        .map((cid) => ({ id: cid, pos: getNodeCenter(cid) }))
        .filter((c) => c.pos !== null) as { id: string; pos: NonNullable<ReturnType<typeof getNodeCenter>> }[];

      if (childPositions.length === 0) return;

      // Vertical line down from marriage dot
      const dropY = midY + 30;
      newLines.push({ x1: midX, y1: midY, x2: midX, y2: dropY });

      // Horizontal bar spanning all children
      const leftChild = Math.min(...childPositions.map((c) => c.pos.x));
      const rightChild = Math.max(...childPositions.map((c) => c.pos.x));
      newLines.push({ x1: leftChild, y1: dropY, x2: rightChild, y2: dropY });

      // Vertical drops to each child
      childPositions.forEach((child) => {
        newLines.push({
          x1: child.pos.x,
          y1: dropY,
          x2: child.pos.x,
          y2: child.pos.top,
        });
      });
    });

    // Single parents (no spouse in tree)
    FAMILY_MEMBERS.forEach((member) => {
      if (member.spouseId && FAMILY_MEMBERS.find((m) => m.id === member.spouseId)) return;
      if (member.childIds.length === 0) return;
      if (processedSpouses.has(member.id)) return;

      const parentPos = getNodeCenter(member.id);
      if (!parentPos) return;

      const childPositions = member.childIds
        .map((cid) => ({ id: cid, pos: getNodeCenter(cid) }))
        .filter((c) => c.pos !== null) as { id: string; pos: NonNullable<ReturnType<typeof getNodeCenter>> }[];

      if (childPositions.length === 0) return;

      const dropY = parentPos.bottom + 20;
      newLines.push({ x1: parentPos.x, y1: parentPos.bottom, x2: parentPos.x, y2: dropY });

      const leftChild = Math.min(...childPositions.map((c) => c.pos.x));
      const rightChild = Math.max(...childPositions.map((c) => c.pos.x));
      if (childPositions.length > 1) {
        newLines.push({ x1: leftChild, y1: dropY, x2: rightChild, y2: dropY });
      }

      childPositions.forEach((child) => {
        newLines.push({
          x1: child.pos.x,
          y1: dropY,
          x2: child.pos.x,
          y2: child.pos.top,
        });
      });
    });

    setLines(newLines);
    setDots(newDots);
  }, [nodeRefs]);

  useLayoutEffect(() => {
    // Small delay to ensure DOM is painted
    const timer = setTimeout(calculateLines, 100);
    return () => clearTimeout(timer);
  }, [calculateLines]);

  useEffect(() => {
    window.addEventListener("resize", calculateLines);
    return () => window.removeEventListener("resize", calculateLines);
  }, [calculateLines]);

  const uniqueGenerations = Array.from(
    new Set(FAMILY_MEMBERS.map((m) => m.generation))
  ).sort();

  return (
    <div ref={treeRef} className="relative">
      <ConnectorLines lines={lines} marriageDots={dots} />

      {uniqueGenerations.map((gen, genIndex) => {
        const genInfo = GENERATION_LABELS[gen];
        const members = getGeneration(gen);

        // Group into couples and singles
        const rendered = new Set<string>();
        const groups: FamilyMember[][] = [];

        members.forEach((member) => {
          if (rendered.has(member.id)) return;
          rendered.add(member.id);

          if (
            member.spouseId &&
            members.find((m) => m.id === member.spouseId)
          ) {
            rendered.add(member.spouseId);
            const spouse = members.find((m) => m.id === member.spouseId)!;
            groups.push([member, spouse]);
          } else {
            groups.push([member]);
          }
        });

        return (
          <div
            key={gen}
            id={`generation-${gen}`}
            className={`py-12 scroll-mt-24 ${
              genIndex % 2 === 1 ? "bg-tf-backgroundAlt/50" : ""
            }`}
          >
            {/* Generation label */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-tf-gold/30" />
              <p className="text-xs text-tf-gold uppercase tracking-widest font-medium">
                Generation {genInfo.number} — {genInfo.label}
              </p>
              <div className="h-px w-12 bg-tf-gold/30" />
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-6 relative">
              {groups.map((group) => (
                <div key={group[0].id} className="flex items-start gap-3">
                  {group.map((member, i) => (
                    <div key={member.id} className="relative flex items-start gap-3">
                      {i === 1 && (
                        <div className="flex items-center h-[80px]">
                          <div className="w-4 h-px bg-tf-gold" />
                        </div>
                      )}
                      <div className="relative">
                        <PersonNode
                          member={member}
                          isSelected={selectedId === member.id}
                          onSelect={onSelect}
                          nodeRef={(el) => {
                            nodeRefs.current[member.id] = el;
                          }}
                        />
                        <AnimatePresence>
                          {selectedId === member.id && (
                            <DetailCard
                              member={member}
                              onClose={() => onSelect(null)}
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ============================================
// List View (for mobile) — Accordion style
// ============================================

function MemberListItem({
  member,
  selectedId,
  onSelect,
}: {
  member: FamilyMember;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  const isDeceased = !!member.deathYear;
  const yearDisplay = member.deathYear
    ? `${member.birthYear}–${member.deathYear}`
    : `b. ${member.birthYear}`;
  const isExpanded = selectedId === member.id;

  return (
    <div>
      <button
        onClick={() => onSelect(isExpanded ? null : member.id)}
        className="w-full text-left flex items-center gap-3 py-3 hover:bg-tf-backgroundAlt/50 -mx-2 px-2 rounded-lg transition-colors"
      >
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-serif-display font-semibold ${
            member.gender === "male"
              ? "bg-tf-textPrimary/10 text-tf-textPrimary"
              : "bg-tf-gold/15 text-tf-goldDark"
          } ${isDeceased ? "opacity-60" : ""}`}
        >
          {member.firstName[0]}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-serif-display text-sm font-medium text-tf-textPrimary truncate">
            {member.firstName} {member.lastName}
          </p>
          <p className="text-xs text-tf-textMuted">
            {member.relationship} &middot; {yearDisplay}
          </p>
        </div>
        <ChevronDown
          size={14}
          className={`flex-shrink-0 text-tf-textMuted transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-[52px] pr-2">
              {member.role && (
                <p className="text-xs text-tf-gold font-medium mb-1">
                  {member.role}
                </p>
              )}
              <p className="text-sm text-tf-textSecondary leading-relaxed">
                {member.bio}
              </p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-tf-gold hover:text-tf-goldDark hover:underline mt-2 inline-block transition-colors"
                >
                  {member.email}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CoupleListCard({
  primary,
  spouse,
  selectedId,
  onSelect,
}: {
  primary: FamilyMember;
  spouse?: FamilyMember;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  // Get shared children
  const children = getChildren(primary.id);

  return (
    <div className="mb-2">
      {/* Couple pair */}
      {spouse ? (
        <div className="bg-tf-backgroundAlt/50 rounded-lg p-2">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-xs text-tf-textMuted font-serif-display">
              {primary.firstName}
            </span>
            <Heart size={10} className="text-tf-gold" />
            <span className="text-xs text-tf-textMuted font-serif-display">
              {spouse.firstName}
            </span>
          </div>
          <MemberListItem
            member={primary}
            selectedId={selectedId}
            onSelect={onSelect}
          />
          <div className="border-t border-tf-borderLight" />
          <MemberListItem
            member={spouse}
            selectedId={selectedId}
            onSelect={onSelect}
          />
        </div>
      ) : (
        <MemberListItem
          member={primary}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      )}

      {/* Children */}
      {children.length > 0 && (
        <div className="ml-4 mt-2 border-l-2 border-tf-gold/30 pl-4">
          <p className="text-xs text-tf-textMuted mb-1">Children:</p>
          {children.map((child, i) => (
            <div
              key={child.id}
              className={
                i < children.length - 1
                  ? "border-b border-tf-borderLight"
                  : ""
              }
            >
              <MemberListItem
                member={child}
                selectedId={selectedId}
                onSelect={onSelect}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function GenerationList({
  generation,
  selectedId,
  onSelect,
  defaultOpen,
}: {
  generation: number;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  defaultOpen: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const genInfo = GENERATION_LABELS[generation];
  const members = getGeneration(generation);

  // Group into couples and singles (skip members already shown as spouse)
  const rendered = new Set<string>();
  const groups: { primary: FamilyMember; spouse?: FamilyMember }[] = [];

  members.forEach((member) => {
    if (rendered.has(member.id)) return;
    rendered.add(member.id);

    if (member.spouseId && members.find((m) => m.id === member.spouseId)) {
      const spouse = members.find((m) => m.id === member.spouseId)!;
      rendered.add(spouse.id);
      groups.push({ primary: member, spouse });
    } else {
      groups.push({ primary: member });
    }
  });

  return (
    <motion.div
      ref={ref}
      id={`generation-${generation}`}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-24 border-b border-tf-borderLight"
    >
      {/* Accordion header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 py-4 text-left"
      >
        <div className="w-8 h-8 rounded-full bg-tf-gold/15 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-semibold text-tf-gold">
            {genInfo.number}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="font-serif-display text-lg font-semibold text-tf-textPrimary">
            Generation {genInfo.number} — {genInfo.label}
          </h2>
          <p className="text-xs text-tf-textMuted">{genInfo.subtitle}</p>
        </div>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-tf-textMuted transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Accordion body */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-2">
              {groups.map((group) => (
                <CoupleListCard
                  key={group.primary.id}
                  primary={group.primary}
                  spouse={group.spouse}
                  selectedId={selectedId}
                  onSelect={onSelect}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================
// PART 5 — Zoom Controls
// ============================================

function ZoomControls({
  zoom,
  onZoomIn,
  onZoomOut,
  onReset,
}: {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}) {
  return (
    <div className="fixed bottom-6 right-6 z-20 hidden lg:flex flex-col items-center gap-1 bg-white rounded-xl card-shadow border border-tf-borderLight p-1.5">
      <button
        onClick={onZoomIn}
        className="w-9 h-9 flex items-center justify-center rounded-lg text-tf-textSecondary hover:bg-tf-backgroundAlt hover:text-tf-textPrimary transition-colors"
        aria-label="Zoom in"
      >
        <ZoomIn size={16} />
      </button>
      <span className="text-xs text-tf-textMuted font-mono w-9 text-center">
        {Math.round(zoom * 100)}%
      </span>
      <button
        onClick={onZoomOut}
        className="w-9 h-9 flex items-center justify-center rounded-lg text-tf-textSecondary hover:bg-tf-backgroundAlt hover:text-tf-textPrimary transition-colors"
        aria-label="Zoom out"
      >
        <ZoomOut size={16} />
      </button>
      <div className="w-6 h-px bg-tf-borderLight my-0.5" />
      <button
        onClick={onReset}
        className="w-9 h-9 flex items-center justify-center rounded-lg text-tf-textSecondary hover:bg-tf-backgroundAlt hover:text-tf-textPrimary transition-colors"
        aria-label="Reset zoom"
      >
        <Maximize2 size={14} />
      </button>
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export default function FamilyTree({ viewMode }: FamilyTreeProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0, offsetX: 0, offsetY: 0 });
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const treeContainerRef = useRef<HTMLDivElement>(null);

  const uniqueGenerations = Array.from(
    new Set(FAMILY_MEMBERS.map((m) => m.generation))
  ).sort();

  const handleZoomIn = useCallback(() => {
    setZoom((z) => Math.min(z + 0.1, 1.5));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((z) => Math.max(z - 0.1, 0.5));
  }, []);

  const handleReset = useCallback(() => {
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  // Ctrl + scroll wheel zoom
  useEffect(() => {
    const container = treeContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.05 : 0.05;
      setZoom((z) => Math.min(Math.max(z + delta, 0.5), 1.5));
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  // Pan handlers
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (zoom <= 1) return;
      // Don't pan if clicking on a node or detail card
      const target = e.target as HTMLElement;
      if (target.closest("[data-member-id]") || target.closest("button") || target.closest("a")) return;

      setIsPanning(true);
      panStart.current = {
        x: e.clientX,
        y: e.clientY,
        offsetX: panOffset.x,
        offsetY: panOffset.y,
      };
    },
    [zoom, panOffset]
  );

  useEffect(() => {
    if (!isPanning) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPanOffset({
        x: panStart.current.offsetX + (e.clientX - panStart.current.x),
        y: panStart.current.offsetY + (e.clientY - panStart.current.y),
      });
    };

    const handleMouseUp = () => setIsPanning(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isPanning]);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Desktop: tree view with zoom/pan */}
      <div
        ref={treeContainerRef}
        className="hidden lg:block overflow-hidden"
        style={{ cursor: zoom > 1 ? (isPanning ? "grabbing" : "grab") : "default" }}
        onMouseDown={handleMouseDown}
      >
        <div
          style={{
            transform: `scale(${zoom}) translate(${panOffset.x / zoom}px, ${panOffset.y / zoom}px)`,
            transformOrigin: "top center",
            transition: isPanning ? "none" : "transform 0.2s ease-out",
          }}
        >
          <TreeView
            selectedId={selectedId}
            onSelect={setSelectedId}
            nodeRefs={nodeRefs}
          />
        </div>
      </div>

      {/* Mobile/tablet: respect viewMode */}
      <div className="lg:hidden">
        {viewMode === "tree" ? (
          <TreeView
            selectedId={selectedId}
            onSelect={setSelectedId}
            nodeRefs={nodeRefs}
          />
        ) : (
          uniqueGenerations.map((gen) => (
            <GenerationList
              key={gen}
              generation={gen}
              selectedId={selectedId}
              onSelect={setSelectedId}
              defaultOpen={gen === Math.max(...uniqueGenerations)}
            />
          ))
        )}
      </div>

      {/* Zoom controls — desktop only */}
      <ZoomControls
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
    </div>
  );
}
