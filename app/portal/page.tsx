import type { Metadata } from "next";
import PortalLogin from "@/components/PortalLogin";
import FamilyCrest from "@/components/FamilyCrest";

export const metadata: Metadata = {
  title: "Family Portal",
  description:
    "Sign in to the Taylor family portal for private family content.",
};

export default function PortalPage() {
  return (
    <div className="page-container flex flex-col items-center justify-center px-6" style={{ minHeight: "calc(100vh - 64px)" }}>
      <FamilyCrest size={80} animated={false} />
      <h1 className="font-serif-display text-3xl font-bold text-tf-textPrimary mt-6">
        Family Portal
      </h1>
      <p className="text-base text-tf-textSecondary mt-2">
        A private space for Taylor family members.
      </p>
      <PortalLogin />
    </div>
  );
}
