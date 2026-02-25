import type { Metadata } from "next";
import QRGenerator from "@/components/QRGenerator";

export const metadata: Metadata = {
  title: "QR Code",
  description:
    "Scan or download a QR code to share The Taylor Family website with family members.",
};

export default function QRPage() {
  return (
    <div className="page-container pb-24">
      {/* Page Header */}
      <section className="pt-20 px-6 text-center">
        <h1 className="font-serif-display text-3xl font-bold text-tf-textPrimary">
          Your Family Link
        </h1>
        <p className="text-base text-tf-textSecondary mt-3">
          Scan or share this code to visit thetaylorfam.net
        </p>
      </section>

      {/* QR Generator */}
      <section className="mt-16 px-6">
        <QRGenerator />
      </section>
    </div>
  );
}
