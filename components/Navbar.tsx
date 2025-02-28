"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#004733] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">Better</span>
            </Link>
            <div className="hidden md:flex items-center ml-8 space-x-8">
              <Link href="#" className="text-white hover:text-gray-200">
                Buy
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                Refinance
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                HELOC
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                Rates
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                Better+
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white">
              <Phone className="w-5 h-5 mr-2" />
              (888) 123-4567
            </Button>
            <Button variant="ghost" className="text-white">
              Sign in
            </Button>
            <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white">
              Get started
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#004D40]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#" className="block px-3 py-2 text-white">
              Buy
            </Link>
            <Link href="#" className="block px-3 py-2 text-white">
              Refinance
            </Link>
            <Link href="#" className="block px-3 py-2 text-white">
              HELOC
            </Link>
            <Link href="#" className="block px-3 py-2 text-white">
              Rates
            </Link>
            <Link href="#" className="block px-3 py-2 text-white">
              Better+
            </Link>
            <Link href="#" className="block px-3 py-2 text-white">
              Sign in
            </Link>
            <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white mt-4">
              Get started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
