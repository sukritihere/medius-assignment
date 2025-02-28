import Link from "next/link";
import { ArrowLeft, MapPin, Building, Home, Users } from "lucide-react";
import Header from "@/components/header";
import ProgressBar from "@/components/progress-bar";

export default function BuyingHomePage() {
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

        <ProgressBar currentStep={1} totalSteps={8} />

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What type of home are you looking for?
          </h1>
          <p className="text-lg text-gray-600">
            This helps us understand what you're looking for.
          </p>
        </div>

        <div className="w-full space-y-4 mb-16">
          <button className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-emerald-600 transition-colors">
            <div className="w-10 h-10 flex items-center justify-center text-emerald-700 mr-3">
              <Home className="h-6 w-6" />
            </div>
            <div className="text-left">
              <span className="text-lg text-gray-800 block">Single Family</span>
              <span className="text-sm text-gray-500">A standalone house</span>
            </div>
          </button>

          <button className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-emerald-600 transition-colors">
            <div className="w-10 h-10 flex items-center justify-center text-emerald-700 mr-3">
              <Building className="h-6 w-6" />
            </div>
            <div className="text-left">
              <span className="text-lg text-gray-800 block">Condo</span>
              <span className="text-sm text-gray-500">
                An individual unit in a multi-unit building
              </span>
            </div>
          </button>

          <button className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-emerald-600 transition-colors">
            <div className="w-10 h-10 flex items-center justify-center text-emerald-700 mr-3">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-left">
              <span className="text-lg text-gray-800 block">Townhouse</span>
              <span className="text-sm text-gray-500">
                A multi-floor home that shares walls with other units
              </span>
            </div>
          </button>

          <button className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-emerald-600 transition-colors">
            <div className="w-10 h-10 flex items-center justify-center text-emerald-700 mr-3">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="text-left">
              <span className="text-lg text-gray-800 block">Multi-family</span>
              <span className="text-sm text-gray-500">2-4 unit property</span>
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
