import { useState } from "react";
import { User, Shield, CheckCircle2, ArrowRight, Scan } from "lucide-react";

type OnboardingStep = "welcome" | "select-type" | "resort" | "casino-step1" | "casino-step2" | "complete";

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [step, setStep] = useState<OnboardingStep>("welcome");
  const [userType, setUserType] = useState<"resort" | "casino" | null>(null);

  const renderStep = () => {
    switch (step) {
      case "welcome":
        return (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-6 text-6xl">🎰</div>
            <h1 className="mb-3 text-3xl font-bold text-gray-900">Welcome to INSPIRE</h1>
            <p className="mb-8 text-sm text-gray-600">
              Your integrated gateway to luxury resort and casino experiences
            </p>
            <button
              onClick={() => setStep("select-type")}
              className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Get Started
            </button>
          </div>
        );

      case "select-type":
        return (
          <div className="p-6">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Select Account Type</h2>
            <p className="mb-6 text-sm text-gray-600">Choose your primary service interest</p>
            <div className="space-y-4">
              <button
                onClick={() => {
                  setUserType("resort");
                  setStep("resort");
                }}
                className="flex w-full items-center gap-4 rounded-xl border-2 border-gray-200 bg-white p-6 text-left transition hover:border-purple-600 hover:bg-purple-50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <User className="h-7 w-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Resort Guest</h3>
                  <p className="text-xs text-gray-600">
                    Access hotel, dining, entertainment & more
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </button>

              <button
                onClick={() => {
                  setUserType("casino");
                  setStep("casino-step1");
                }}
                className="flex w-full items-center gap-4 rounded-xl border-2 border-gray-200 bg-white p-6 text-left transition hover:border-purple-600 hover:bg-purple-50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                  <Shield className="h-7 w-7 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Casino Member</h3>
                  <p className="text-xs text-gray-600">
                    Requires passport verification (Foreign visitors only)
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        );

      case "resort":
        return (
          <div className="p-6">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Resort Account</h2>
            <p className="mb-6 text-sm text-gray-600">Complete your profile</p>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Park Ji-hoon"
                  className="w-full rounded-lg border border-gray-300 p-3"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="jihoon@example.com"
                  className="w-full rounded-lg border border-gray-300 p-3"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  placeholder="+82 10-1234-5678"
                  className="w-full rounded-lg border border-gray-300 p-3"
                />
              </div>
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" id="terms" />
                  <label htmlFor="terms" className="text-xs text-gray-700">
                    I agree to the Terms of Service and Privacy Policy. I consent to receive
                    marketing communications via Strivacity/Engage.
                  </label>
                </div>
              </div>
              <button
                onClick={() => setStep("complete")}
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl"
              >
                Create Account
              </button>
            </div>
          </div>
        );

      case "casino-step1":
        return (
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white">
                1
              </div>
              <div className="h-1 flex-1 rounded bg-purple-600"></div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-600">
                2
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Casino Registration</h2>
            <p className="mb-6 text-sm text-gray-600">Step 1: Passport Verification</p>
            <div className="mb-6 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                <Scan className="h-10 w-10 text-purple-600" />
              </div>
              <p className="mb-2 font-semibold text-gray-900">Scan Your Passport</p>
              <p className="text-center text-xs text-gray-600">
                Place your passport on a flat surface and scan using OCR
              </p>
              <button className="mt-4 rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white">
                Start Scan
              </button>
            </div>
            <div className="rounded-lg bg-orange-50 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-orange-900">
                <Shield className="h-4 w-4" />
                Security Note
              </h3>
              <ul className="space-y-1 text-xs text-orange-800">
                <li>• Data verified with Hi-Korea immigration system</li>
                <li>• AML (Anti-Money Laundering) compliance check</li>
                <li>• CMP membership validation</li>
              </ul>
            </div>
            <button
              onClick={() => setStep("casino-step2")}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Continue to Verification
            </button>
          </div>
        );

      case "casino-step2":
        return (
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-sm font-semibold text-white">
                ✓
              </div>
              <div className="h-1 flex-1 rounded bg-gray-400"></div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white">
                2
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">In-Person Verification</h2>
            <p className="mb-6 text-sm text-gray-600">Step 2: Final Approval</p>
            <div className="mb-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Pre-registration Complete</h3>
                  <p className="text-xs text-gray-600">Application ID: #CAS-2026-00124</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4">
                <h4 className="mb-2 font-semibold text-gray-900">Next Steps</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="font-semibold text-purple-600">1.</span>
                    <span>Visit the Casino Reception Desk</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-purple-600">2.</span>
                    <span>Present your physical passport</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-purple-600">3.</span>
                    <span>Staff will verify and activate your account</span>
                  </li>
                </ol>
              </div>
            </div>
            <button
              onClick={() => setStep("complete")}
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Got It!
            </button>
          </div>
        );

      case "complete":
        return (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">All Set!</h2>
            <p className="mb-8 text-sm text-gray-600">
              {userType === "resort"
                ? "Your resort account is ready to use"
                : "Visit the casino reception to complete your verification"}
            </p>
            <button
              onClick={onComplete}
              className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Explore INSPIRE
            </button>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-full flex-col bg-gradient-to-b from-purple-50 to-white">
      {step !== "welcome" && step !== "complete" && (
        <div className="border-b border-gray-200 bg-white p-4">
          <button
            onClick={() => {
              if (step === "resort" || step === "casino-step1") {
                setStep("select-type");
              } else if (step === "casino-step2") {
                setStep("casino-step1");
              } else {
                setStep("welcome");
              }
            }}
            className="text-sm text-purple-600 hover:underline"
          >
            ← Back
          </button>
        </div>
      )}
      <div className="flex flex-1 items-center justify-center">{renderStep()}</div>
    </div>
  );
}
