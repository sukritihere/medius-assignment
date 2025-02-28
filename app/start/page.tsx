import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Home,
  RefreshCw,
  DollarSign,
  CheckCircle,
  Gift,
  Smartphone,
} from "lucide-react";

export default function StartPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 md:px-6 py-6">
      <header className="w-full max-w-6xl flex justify-between items-center mb-12">
        <div className="text-center">
          <span className="text-[#007A3D] font-bold text-2xl">Better</span>
          <span className="text-[#6D6E71] text-2xl"> Mortgage</span>
        </div>
        <div className="flex items-center text-emerald-700">
          <Phone className="h-5 w-5 mr-2" />
          <span className="text-sm md:text-base">
            Need help? Call (415) 523 8837
          </span>
        </div>
      </header>

      <main className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
            <Image
              src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg"
              alt="Betsy"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Hi, I'm Betsy!
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700">
            What can I help you with?
          </p>
        </div>

        <div className="w-full space-y-4 mb-16">
          <Link
            href="/buying-home"
            className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-emerald-600 transition-colors"
          >
            <div className="w-10 h-10 flex items-center justify-center text-emerald-700 mr-3">
              <Home className="h-6 w-6" />
            </div>
            <span className="text-lg text-gray-800">Buying a home</span>
          </Link>

          <Link
            href="/refinance"
            className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-emerald-600 transition-colors"
          >
            <div className="w-10 h-10 flex items-center justify-center text-emerald-700 mr-3">
              <RefreshCw className="h-6 w-6" />
            </div>
            <span className="text-lg text-gray-800">Refinance my mortgage</span>
          </Link>

          <Link
            href="/cash-out"
            className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-emerald-600 transition-colors"
          >
            <div className="w-10 h-10 flex items-center justify-center text-emerald-700 mr-3">
              <DollarSign className="h-6 w-6" />
            </div>
            <span className="text-lg text-gray-800">Get cash from my home</span>
          </Link>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12 text-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-gray-800 mb-1">$100B</div>
            <div className="text-sm text-gray-600">
              home loans funded entirely online
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-gray-800 mb-1">400K</div>
            <div className="text-sm text-gray-600">
              Customers who chose a Better Mortgage
            </div>
          </div>
        </div>

        <div className="w-full bg-emerald-50 rounded-lg p-6">
          <div className="text-center mb-6">
            <p className="text-gray-700">
              After a few questions, you'll unlock:
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
              <span className="text-gray-700">Custom mortgage rates</span>
            </div>

            <div className="flex items-center">
              <Gift className="h-5 w-5 text-emerald-600 mr-3" />
              <span className="text-gray-700">Exclusive offers</span>
            </div>

            <div className="flex items-center">
              <Smartphone className="h-5 w-5 text-emerald-600 mr-3" />
              <span className="text-gray-700">A personalized dashboard</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
