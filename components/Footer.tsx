import FamilyCrest from "@/components/FamilyCrest";
import { SITE_CONTENT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-tf-borderLight py-16">
      <div className="flex flex-col items-center text-center px-6">
        <FamilyCrest size={48} animated={false} />
        <p className="font-serif-display text-base text-tf-textPrimary mt-4">
          {SITE_CONTENT.familyName}
        </p>
        <p className="text-sm text-tf-textMuted mt-1">
          {SITE_CONTENT.established}
        </p>
        <p className="font-script text-sm text-tf-gold mt-2">
          {SITE_CONTENT.motto}
        </p>
        <p className="text-xs text-tf-textMuted mt-6">
          Powered by{" "}
          <a
            href="https://governedenterprises.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tf-gold transition-colors duration-200"
          >
            Governed Enterprises
          </a>
        </p>
        <p className="text-xs text-tf-textMuted mt-4">
          &copy; 2026 {SITE_CONTENT.familyName}
        </p>
      </div>
    </footer>
  );
}
