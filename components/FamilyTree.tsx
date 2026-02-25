"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FAMILY_MEMBERS,
  GENERATION_LABELS,
  getGeneration,
  getSpouse,
} from "@/lib/familyData";
import type { FamilyMember } from "@/lib/familyData";

interface FamilyTreeProps {
  viewMode: "tree" | "list";
}

// ── Member Card (shared between views) ──

function MemberCard({
  member,
  compact,
}: {
  member: FamilyMember;
  compact?: boolean;
}) {
  const isDeceased = !!member.deathYear;
  const yearDisplay = member.deathYear
    ? `${member.birthYear}–${member.deathYear}`
    : `b. ${member.birthYear}`;

  if (compact) {
    return (
      <div className="flex items-center gap-3 py-3">
        {/* Avatar circle */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-serif-display font-semibold ${
            member.gender === "male"
              ? "bg-tf-textPrimary/10 text-tf-textPrimary"
              : "bg-tf-gold/15 text-tf-goldDark"
          } ${isDeceased ? "opacity-60" : ""}`}
        >
          {member.firstName[0]}
        </div>
        <div className="min-w-0">
          <p className="font-serif-display text-sm font-medium text-tf-textPrimary truncate">
            {member.firstName} {member.lastName}
          </p>
          <p className="text-xs text-tf-textMuted">
            {member.relationship} &middot; {yearDisplay}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-xl p-5 card-shadow border border-tf-borderLight w-full max-w-[240px] ${
        isDeceased ? "opacity-75" : ""
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center text-lg font-serif-display font-bold ${
          member.gender === "male"
            ? "bg-tf-textPrimary/10 text-tf-textPrimary"
            : "bg-tf-gold/15 text-tf-goldDark"
        }`}
      >
        {member.firstName[0]}
      </div>

      {/* Name */}
      <h3 className="font-serif-display text-base font-semibold text-tf-textPrimary text-center mt-3">
        {member.firstName} {member.lastName}
      </h3>

      {/* Relationship */}
      <p className="text-xs text-tf-textMuted text-center mt-0.5">
        {member.relationship}
      </p>

      {/* Years */}
      <p className="text-xs text-tf-textMuted text-center mt-1">{yearDisplay}</p>

      {/* Role badge */}
      {member.role && (
        <p className="text-xs text-tf-gold text-center mt-2 font-medium">
          {member.role}
        </p>
      )}

      {/* Bio */}
      <p className="text-xs text-tf-textSecondary text-center mt-2 leading-relaxed line-clamp-3">
        {member.bio}
      </p>
    </div>
  );
}

// ── Couple pair (tree view) ──

function CoupleNode({ member }: { member: FamilyMember }) {
  const spouse = member.spouseId ? getSpouse(member.id) : undefined;

  if (!spouse) {
    return (
      <div className="flex justify-center">
        <MemberCard member={member} />
      </div>
    );
  }

  return (
    <div className="flex items-start justify-center gap-3">
      <MemberCard member={member} />
      {/* Marriage connector */}
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="w-6 h-px bg-tf-gold" />
      </div>
      <MemberCard member={spouse} />
    </div>
  );
}

// ── Generation Row (tree view) ──

function GenerationRow({ generation }: { generation: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const genInfo = GENERATION_LABELS[generation];
  const members = getGeneration(generation);

  // Group couples: find members who have a spouse and haven't been rendered yet
  const rendered = new Set<string>();
  const groups: FamilyMember[][] = [];

  members.forEach((member) => {
    if (rendered.has(member.id)) return;
    rendered.add(member.id);

    if (member.spouseId && members.find((m) => m.id === member.spouseId)) {
      rendered.add(member.spouseId);
      groups.push([member]);
    } else if (!member.spouseId || !members.find((m) => m.id === member.spouseId)) {
      groups.push([member]);
    }
  });

  return (
    <motion.div
      ref={ref}
      id={`generation-${generation}`}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5 }}
      className="mb-16 scroll-mt-24"
    >
      {/* Generation label */}
      <div className="text-center mb-8">
        <p className="text-xs text-tf-gold uppercase tracking-widest mb-1">
          Generation {genInfo.number}
        </p>
        <h2 className="font-serif-display text-2xl font-bold text-tf-textPrimary">
          {genInfo.label}
        </h2>
        <p className="text-sm text-tf-textMuted mt-1">{genInfo.subtitle}</p>
      </div>

      {/* Vertical connector from previous generation */}
      {generation > 1 && (
        <div className="flex justify-center mb-6">
          <div className="w-px h-8 bg-tf-gold/30" />
        </div>
      )}

      {/* Member cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {groups.map((group) => (
          <CoupleNode key={group[0].id} member={group[0]} />
        ))}
      </div>

      {/* Vertical connector to next generation */}
      {generation < 4 && (
        <div className="flex justify-center mt-6">
          <div className="w-px h-8 bg-tf-gold/30" />
        </div>
      )}
    </motion.div>
  );
}

// ── List View ──

function GenerationList({ generation }: { generation: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const genInfo = GENERATION_LABELS[generation];
  const members = getGeneration(generation);

  return (
    <motion.div
      ref={ref}
      id={`generation-${generation}`}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5 }}
      className="mb-12 scroll-mt-24"
    >
      {/* Generation header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-tf-gold/15 flex items-center justify-center">
          <span className="text-xs font-semibold text-tf-gold">
            {genInfo.number}
          </span>
        </div>
        <div>
          <h2 className="font-serif-display text-lg font-semibold text-tf-textPrimary">
            {genInfo.label}
          </h2>
          <p className="text-xs text-tf-textMuted">{genInfo.subtitle}</p>
        </div>
      </div>

      {/* Members list */}
      <div className="ml-4 border-l-2 border-tf-borderLight pl-6">
        {members.map((member, index) => (
          <div
            key={member.id}
            className={
              index < members.length - 1
                ? "border-b border-tf-borderLight"
                : ""
            }
          >
            <MemberCard member={member} compact />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Main Component ──

export default function FamilyTree({ viewMode }: FamilyTreeProps) {
  const uniqueGenerations = Array.from(
    new Set(FAMILY_MEMBERS.map((m) => m.generation))
  ).sort();

  return (
    <div className="max-w-5xl mx-auto">
      {/* Desktop: always tree view */}
      <div className="hidden lg:block">
        {uniqueGenerations.map((gen) => (
          <GenerationRow key={gen} generation={gen} />
        ))}
      </div>

      {/* Mobile/tablet: respect viewMode */}
      <div className="lg:hidden">
        {viewMode === "tree"
          ? uniqueGenerations.map((gen) => (
              <GenerationRow key={gen} generation={gen} />
            ))
          : uniqueGenerations.map((gen) => (
              <GenerationList key={gen} generation={gen} />
            ))}
      </div>
    </div>
  );
}
