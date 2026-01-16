import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Shield, CheckCircle2, Clock, AlertCircle } from "lucide-react";

type VerificationStatus = "idle" | "verifying" | "verified" | "expired";

export function CasinoEntryScreen() {
  const [status, setStatus] = useState<VerificationStatus>("idle");
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    if (status === "verified") {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setStatus("expired");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [status]);

  const handleGenerateQR = () => {
    setStatus("verifying");
    // Simulate API call
    setTimeout(() => {
      const timestamp = new Date().getTime();
      const userId = "USER_12345";
      setQrValue(`INSPIRE_CASINO_${userId}_${timestamp}`);
      setStatus("verified");
      setTimeRemaining(60);
    }, 2000);
  };

  const renderContent = () => {
    switch (status) {
      case "idle":
        return (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">
              <Shield className="h-12 w-12 text-purple-600" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Casino Entry</h2>
            <p className="mb-8 text-sm text-gray-600">
              Generate a secure QR code for casino entrance verification
            </p>
            <button
              onClick={handleGenerateQR}
              className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Generate Entry QR
            </button>
            <div className="mt-8 rounded-lg bg-blue-50 p-4">
              <p className="text-xs text-blue-900">
                <strong>Note:</strong> You must be verified before entering the casino. QR codes are valid for 60 seconds.
              </p>
            </div>
          </div>
        );

      case "verifying":
        return (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-6 h-24 w-24 animate-spin rounded-full border-8 border-purple-100 border-t-purple-600"></div>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Verifying...</h2>
            <p className="text-sm text-gray-600">
              Checking your entry status with Hi-Korea and CMP systems
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="h-2 w-2 animate-pulse rounded-full bg-purple-600"></div>
                <span>Checking visa status</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="h-2 w-2 animate-pulse rounded-full bg-purple-600"></div>
                <span>Verifying membership</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="h-2 w-2 animate-pulse rounded-full bg-purple-600"></div>
                <span>Generating secure QR</span>
              </div>
            </div>
          </div>
        );

      case "verified":
        return (
          <div className="flex flex-col items-center p-8">
            <div className="mb-4 flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-green-900">Verified</span>
            </div>
            <div className="mb-4 rounded-2xl bg-white p-6 shadow-xl">
              <QRCodeSVG value={qrValue} size={200} level="H" />
            </div>
            <div className="mb-6 flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-orange-600" />
              <span className="font-semibold text-orange-600">
                Valid for {timeRemaining}s
              </span>
            </div>
            <div className="w-full rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-4">
              <h3 className="mb-2 font-semibold text-gray-900">Entry Instructions</h3>
              <ol className="space-y-1 text-sm text-gray-700">
                <li>1. Show this QR to the gate scanner</li>
                <li>2. Wait for confirmation beep</li>
                <li>3. Proceed through the gate</li>
              </ol>
            </div>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-lg border border-purple-600 px-6 py-2 text-sm font-semibold text-purple-600 transition hover:bg-purple-50"
            >
              Generate New QR
            </button>
          </div>
        );

      case "expired":
        return (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
              <AlertCircle className="h-12 w-12 text-red-600" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">QR Expired</h2>
            <p className="mb-8 text-sm text-gray-600">
              This QR code has expired for security reasons. Please generate a new one.
            </p>
            <button
              onClick={handleGenerateQR}
              className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Generate New QR
            </button>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-full flex-col bg-gradient-to-b from-purple-50 to-white">
      <div className="border-b border-gray-200 bg-white p-6">
        <h1 className="text-xl font-bold text-gray-900">Casino Entry</h1>
        <p className="text-sm text-gray-600">Secure digital access</p>
      </div>
      <div className="flex flex-1 items-center justify-center">{renderContent()}</div>
    </div>
  );
}
