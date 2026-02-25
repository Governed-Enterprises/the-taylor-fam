"use client";

import { useRef, useCallback } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Download } from "lucide-react";
import { SITE_CONFIG, SITE_CONTENT, COLOR_PALETTE } from "@/lib/constants";

const SITE_URL = SITE_CONFIG.url;

export default function QRGenerator() {
  const qrRef = useRef<HTMLDivElement>(null);
  const printCanvasRef = useRef<HTMLCanvasElement>(null);

  const downloadQR = useCallback(() => {
    const container = qrRef.current;
    if (!container) return;
    const sourceCanvas = container.querySelector("canvas");
    if (!sourceCanvas) return;

    const size = 1024;
    const padding = 80;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = COLOR_PALETTE.background;
    ctx.fillRect(0, 0, size, size);
    ctx.drawImage(
      sourceCanvas,
      padding,
      padding,
      size - padding * 2,
      size - padding * 2
    );

    const link = document.createElement("a");
    link.download = "taylor-family-qr.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, []);

  const downloadPrint = useCallback(() => {
    const container = qrRef.current;
    if (!container) return;
    const sourceCanvas = container.querySelector("canvas");
    if (!sourceCanvas) return;

    // 8.5 x 11 at 150 DPI
    const w = 1275;
    const h = 1650;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background
    ctx.fillStyle = COLOR_PALETTE.background;
    ctx.fillRect(0, 0, w, h);

    const centerX = w / 2;

    // Draw family crest placeholder — a gold shield outline
    const shieldY = 280;
    ctx.save();
    ctx.translate(centerX, shieldY);
    ctx.beginPath();
    ctx.moveTo(0, -60);
    ctx.lineTo(50, -40);
    ctx.lineTo(50, 10);
    ctx.quadraticCurveTo(50, 50, 0, 65);
    ctx.quadraticCurveTo(-50, 50, -50, 10);
    ctx.lineTo(-50, -40);
    ctx.closePath();
    ctx.strokeStyle = COLOR_PALETTE.gold;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = COLOR_PALETTE.textPrimary;
    ctx.fill();
    // T letter inside
    ctx.font = "bold 40px Georgia, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = COLOR_PALETTE.background;
    ctx.fillText("T", 0, 5);
    ctx.restore();

    // Family name
    ctx.font = "bold 48px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillStyle = COLOR_PALETTE.textPrimary;
    ctx.fillText("The Taylor Family", centerX, shieldY + 120);

    // QR code centered
    const qrSize = 500;
    const qrY = shieldY + 180;
    ctx.drawImage(
      sourceCanvas,
      centerX - qrSize / 2,
      qrY,
      qrSize,
      qrSize
    );

    // URL below QR
    ctx.font = "24px monospace";
    ctx.fillStyle = COLOR_PALETTE.textSecondary;
    ctx.fillText("thetaylorfam.net", centerX, qrY + qrSize + 60);

    // Motto at bottom
    ctx.font = "italic 22px Georgia, serif";
    ctx.fillStyle = COLOR_PALETTE.textMuted;
    ctx.fillText(SITE_CONTENT.motto, centerX, qrY + qrSize + 120);

    const link = document.createElement("a");
    link.download = "taylor-family-qr-print.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* QR Code Card */}
      <div
        ref={qrRef}
        className="bg-white rounded-xl p-8 card-shadow"
      >
        <QRCodeCanvas
          value={SITE_URL}
          size={280}
          bgColor={COLOR_PALETTE.background}
          fgColor={COLOR_PALETTE.textPrimary}
          level="H"
          includeMargin={false}
          imageSettings={{
            src: "/images/crest-logo.png",
            x: undefined,
            y: undefined,
            height: 60,
            width: 60,
            excavate: true,
          }}
          className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px]"
        />
      </div>

      {/* Download buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={downloadQR}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-tf-gold hover:bg-tf-goldDark text-tf-textPrimary rounded-lg font-medium transition-colors duration-200"
        >
          <Download size={18} />
          Download QR Code
        </button>
        <button
          onClick={downloadPrint}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-tf-gold hover:bg-tf-goldDark text-tf-textPrimary rounded-lg font-medium transition-colors duration-200"
        >
          <Download size={18} />
          Download for Print
        </button>
      </div>

      {/* Hidden canvas for print layout */}
      <canvas ref={printCanvasRef} className="hidden" />

      {/* Ideas section */}
      <div className="mt-12 text-center max-w-md">
        <h3 className="font-serif-display text-xl text-tf-textPrimary">
          Ideas for Your QR Code
        </h3>
        <ul className="mt-6 space-y-4 text-left">
          {[
            "Frame it and hang it in your home",
            "Print it on the back of your business card",
            "Include it in family letters and correspondence",
            "Add it to family reunion invitations",
            "Place it inside the cover of a family Bible or album",
          ].map((idea) => (
            <li key={idea} className="flex items-start gap-3 text-base text-tf-textSecondary">
              <span className="mt-2 w-2 h-2 rounded-full bg-tf-gold flex-shrink-0" />
              {idea}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
