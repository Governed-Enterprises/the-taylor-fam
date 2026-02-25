import Link from "next/link";
import { Heart } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warmGray-900 text-warmGray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif-display text-xl font-bold text-cream-100 mb-2">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm text-warmGray-400 italic">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-cream-200 uppercase tracking-wider mb-3">
              Navigate
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warmGray-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-cream-200 uppercase tracking-wider mb-3">
              Stay Connected
            </h4>
            <p className="text-sm text-warmGray-400">
              Visit{" "}
              <Link
                href="/qr"
                className="text-gold-400 hover:text-gold-300 underline transition-colors"
              >
                our QR page
              </Link>{" "}
              to share this site with family.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-warmGray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warmGray-500">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-warmGray-500">
            Built with <Heart size={12} className="text-burgundy-400" /> for
            our family
          </p>
        </div>
      </div>
    </footer>
  );
}
