import Link from "next/link";
import { ArrowLeft, Home, DollarSign, CreditCard, Wrench } from "lucide-react";
import Header from "@/components/header";
import ProgressBar from "@/components/progress-bar";

export default function CashOutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 md:px-6 py-6">
      <Header />

      <main className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <Link
          href="/start"
          className="self-start flex items-center text-emerald-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back</span>
        </Link>

        <ProgressBar currentStep={1} totalSteps={7} />

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What do you plan to use the cash for?
          </h1>
          <p className="text-lg text-gray-600">
            This helps us recommend the right loan options for you.
          </p>
        </div>

        <div className="w-full space-y-4 mb-16">
          <button className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-emerald-600 transition-colors">
            <div className="w-10 h-10 flex items-center justify-center text-emerald-700 mr-3">
              <CreditCard className="h-6 w-6" />
            </div>
            <div className="text-left">
              <span className="text-lg text-gray-800 block">Pay off debt</span>
              <span className="text-sm text-gray-500">
                Consolidate high-interest debt
              </span>
            </div>
          </button>

          <button className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-emerald-600 transition-colors">
            <div className="w-10 h-10 flex items-center justify-center text-emerald-700 mr-3">
              <Wrench className="h-6 w-6" />
            </div>
            <div className="text-left">
              <span className="text-lg text-gray-800 block">
                Home improvements
              </span>
              <span className="text-sm text-gray-500">
                Renovate or repair your home
              </span>
            </div>
          </button>

          <button className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-emerald-600 transition-colors">
            <div className="w-10 h-10 flex items-center justify-center text-emerald-700 mr-3">
              <DollarSign className="h-6 w-6" />
            </div>
            <div className="text-left">
              <span className="text-lg text-gray-800 block">
                Major purchase
              </span>
              <span className="text-sm text-gray-500">
                Fund education, medical expenses, or other large costs
              </span>
            </div>
          </button>

          <button className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-emerald-600 transition-colors">
            <div className="w-10 h-10 flex items-center justify-center text-emerald-700 mr-3">
              <Home className="h-6 w-6" />
            </div>
            <div className="text-left">
              <span className="text-lg text-gray-800 block">Other</span>
              <span className="text-sm text-gray-500">
                Any other reason not listed above
              </span>
            </div>
          </button>
        </div>

        <div className="w-full flex justify-between">
          <Link
            href="/start"
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back
          </Link>
          <button
            className="px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors"
            disabled
          >
            Continue
          </button>
        </div>
      </main>
    </div>
  );
}
