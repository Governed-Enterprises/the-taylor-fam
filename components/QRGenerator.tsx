"use client";

import { useRef, useCallback } from "react";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";
import { Download, Share2 } from "lucide-react";
import { SITE_CONFIG, COLOR_PALETTE } from "@/lib/constants";

export default function QRGenerator() {
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQR = useCallback(() => {
    if (!qrRef.current) return;

    const svg = qrRef.current.querySelector("svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    canvas.width = 1024;
    canvas.height = 1024;

    img.onload = () => {
      if (!ctx) return;
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const padding = 64;
      ctx.drawImage(
        img,
        padding,
        padding,
        canvas.width - padding * 2,
        canvas.height - padding * 2
      );

      const link = document.createElement("a");
      link.download = "taylor-family-qr.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  }, []);

  const shareLink = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: SITE_CONFIG.name,
          text: SITE_CONFIG.description,
          url: SITE_CONFIG.url,
        });
      } catch {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(SITE_CONFIG.url);
      alert("Link copied to clipboard!");
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      {/* QR Code Display */}
      <div
        ref={qrRef}
        className="p-8 bg-tf-card rounded-2xl card-shadow border border-tf-borderLight"
      >
        <QRCodeSVG
          value={SITE_CONFIG.url}
          size={256}
          bgColor="#FFFFFF"
          fgColor={COLOR_PALETTE.textPrimary}
          level="H"
          includeMargin={false}
        />
      </div>

      {/* URL display */}
      <p className="mt-4 text-tf-textMuted text-sm font-mono">
        {SITE_CONFIG.url}
      </p>

      {/* Action buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={downloadQR}
          className="flex items-center gap-2 px-6 py-3 bg-tf-textPrimary hover:bg-tf-textSecondary text-white rounded-lg transition-colors font-medium"
        >
          <Download size={18} />
          Download QR
        </button>
        <button
          onClick={shareLink}
          className="flex items-center gap-2 px-6 py-3 bg-tf-gold hover:bg-tf-goldDark text-white rounded-lg transition-colors font-medium"
        >
          <Share2 size={18} />
          Share Link
        </button>
      </div>
    </motion.div>
  );
}
