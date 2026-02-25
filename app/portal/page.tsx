import type { Metadata } from "next";
import PortalLogin from "@/components/PortalLogin";

export const metadata: Metadata = {
  title: "Family Portal",
  description:
    "Sign in to the Taylor family portal for private family content.",
};

export default function PortalPage() {
  return (
    <div className="page-container">
      <section className="bg-warm-gradient py-16 sm:py-20">
        <div className="section-container text-center">
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-tf-textPrimary mb-4">
            Family Portal
          </h1>
          <p className="text-tf-textMuted text-lg max-w-2xl mx-auto">
            Access private family content, photos, and documents.
          </p>
          <div className="w-24 h-0.5 bg-tf-gold mx-auto mt-6" />
        </div>
      </section>

      <section className="section-container py-16">
        <PortalLogin />
      </section>
    </div>
  );
}
