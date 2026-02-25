import type { Metadata } from "next";
import dynamic from "next/dynamic";

const QRGenerator = dynamic(() => import("@/components/QRGenerator"), {
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-tf-gold border-t-transparent rounded-full animate-spin" />
    </div>
  ),
  ssr: false,
});

export const metadata: Metadata = {
  title: "Family QR Code — The Taylor Family",
  description:
    "Scan or download a QR code to share The Taylor Family website with family members.",
  openGraph: {
    title: "Family QR Code — The Taylor Family",
    description:
      "Scan or download a QR code to share The Taylor Family website.",
  },
  twitter: {
    card: "summary",
    title: "Family QR Code — The Taylor Family",
  },
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
