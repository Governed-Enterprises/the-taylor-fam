import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ── Single text link (used on inner pages) ──
export function CrossPageLink({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 font-serif-display text-base text-tf-gold hover:text-tf-goldDark transition-colors duration-200"
    >
      {text}
      <ArrowRight size={16} />
    </Link>
  );
}

// ── Row of links (used at bottom of inner pages) ──
export function CrossPageLinks({
  links,
}: {
  links: { text: string; href: string }[];
}) {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-16 px-6">
      {links.map((link) => (
        <CrossPageLink key={link.href} text={link.text} href={link.href} />
      ))}
    </div>
  );
}

// ── Explore card (used on home page) ──
export function ExploreCard({
  href,
  icon: Icon,
  title,
  description,
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="block border border-tf-borderLight rounded-xl p-5 hover:border-tf-gold transition-colors duration-200 text-center"
    >
      <Icon size={24} className="text-tf-gold mx-auto" />
      <h3 className="font-serif-display text-sm font-semibold text-tf-textPrimary mt-3">
        {title}
      </h3>
      <p className="text-xs text-tf-textMuted mt-1">{description}</p>
    </Link>
  );
}
