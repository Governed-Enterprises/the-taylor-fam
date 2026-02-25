import Link from "next/link";
import { SITE_CONFIG, SITE_CONTENT, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tf-textPrimary text-tf-borderLight">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif-display text-xl font-bold text-tf-background mb-2">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm font-script text-tf-goldLight">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-tf-backgroundAlt uppercase tracking-wider mb-3">
              Navigate
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-tf-border hover:text-tf-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-tf-backgroundAlt uppercase tracking-wider mb-3">
              Stay Connected
            </h4>
            <p className="text-sm text-tf-border">
              Visit{" "}
              <Link
                href="/qr"
                className="text-tf-gold hover:text-tf-goldLight underline transition-colors"
              >
                our QR page
              </Link>{" "}
              to share this site with family.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-tf-textSecondary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-tf-textMuted">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-tf-textMuted">
            {SITE_CONTENT.footerPoweredBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
