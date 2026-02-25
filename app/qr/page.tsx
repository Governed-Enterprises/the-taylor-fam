import type { Metadata } from "next";
import QRGenerator from "@/components/QRGenerator";

export const metadata: Metadata = {
  title: "QR Code",
  description:
    "Scan or download a QR code to share The Taylor Family website with family members.",
};

export default function QRPage() {
  return (
    <div className="page-container">
      {/* Page Header */}
      <section className="bg-warm-gradient py-16 sm:py-20">
        <div className="section-container text-center">
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-700 mb-4">
            Share Our Site
          </h1>
          <p className="text-warmGray-500 text-lg max-w-2xl mx-auto">
            Scan the QR code or download it to share with family members. Keep
            everyone connected.
          </p>
          <div className="w-24 h-0.5 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      {/* QR Code */}
      <section className="section-container py-16">
        <QRGenerator />
      </section>
    </div>
  );
}
