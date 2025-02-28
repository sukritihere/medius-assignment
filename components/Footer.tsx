import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-[#004D40] text-2xl font-bold mb-2">Better</h2>
          <p className="text-gray-600 max-w-2xl">
            Better is a family of companies serving all your homeownership
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="flex items-center">
                <span className="text-[#004D40] font-bold">Better</span>
                <span className="text-gray-400 ml-1">Mortgage</span>
              </h3>
              <p className="text-sm mt-2">
                We can't wait to say "Welcome home." Apply 100% online, with
                expert customer support.
              </p>
            </div>

            <div>
              <h3 className="flex items-center">
                <span className="text-[#004D40] font-bold">Better</span>
                <span className="text-gray-400 ml-1">Real Estate</span>
              </h3>
              <p className="text-sm mt-2">
                Connect with a local Better Real Estate Partner Agent to find
                out all the ways you can save.
              </p>
            </div>

            <div>
              <h3 className="flex items-center">
                <span className="text-[#004D40] font-bold">Better</span>
                <span className="text-gray-400 ml-1">Cover</span>
              </h3>
              <p className="text-sm mt-2">
                Shop, bundle, and save on insurance coverage for home, auto,
                life, and more.
              </p>
            </div>

            <div>
              <h3 className="flex items-center">
                <span className="text-[#004D40] font-bold">Better</span>
                <span className="text-gray-400 ml-1">Inspect</span>
              </h3>
              <p className="text-sm mt-2">
                Get free repair estimates, 24-hour turnarounds on reports, and
                rest easy with our 100-day inspection guarantee.
              </p>
            </div>

            <div>
              <h3 className="flex items-center">
                <span className="text-[#004D40] font-bold">Better</span>
                <span className="text-gray-400 ml-1">Settlement Services</span>
              </h3>
              <p className="text-sm mt-2">
                Get transparent rates when you shop for title insurance all in
                one convenient place.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Home affordability calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Mortgage calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Free mortgage calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Mortgage calculator with taxes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Mortgage calculator with PMI
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Rent vs buy calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  HELOC payment calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  HELOC vs cash-out refinance calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Buy a home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Sell a home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Get home inspection
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Media
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Learning center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@better.com"
                  className="text-sm hover:text-[#004D40]"
                >
                  hello@better.com
                </a>
              </li>
              <li>
                <a
                  href="tel:415-523-8837"
                  className="text-sm hover:text-[#004D40]"
                >
                  415-523-8837
                </a>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Glossary
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-900 mt-8 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  NMLS Consumer Access
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Disclosures & Licensing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Affiliated Business
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#004D40]">
                  Browser Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="text-gray-400 hover:text-[#004D40]">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#004D40]">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#004D40]">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/equal-housing-opportunity.png"
              alt="Equal Housing Opportunity"
              className="h-8"
            />
            <img
              src="/equal-housing-lender.png"
              alt="Equal Housing Lender"
              className="h-8"
            />
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-800 space-y-4">
          <p>
            © 2025 Better Home & Finance Holding Company and/or its affiliates.
            Better is a family of companies. Better Mortgage Corporation
            provides home loans; Better Real Estate, LLC and Better Real Estate
            California Inc License # 02144055 provides real estate services;
            Better Cover, LLC sells insurance products; and Better Settlement
            Services provides title insurance services, and Better Inspect, LLC
            provides home inspection services. All rights reserved.
          </p>
          <p>
            Home lending products offered by Better Mortgage Corporation. Better
            Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade
            Center, 80th Floor. New York, NY 10007. Loans made or arranged
            pursuant to a California Finance Lenders Law License. Not available
            in all states. Equal Housing Lender. NMLS Consumer Access
          </p>
          <p>
            Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
            LLC and Better Real Estate, and operating in the State of California
            through its wholly owned subsidiary Better Real Estate California
            Inc., is a licensed real estate brokerage and maintains its
            corporate headquarters at 325-41 Chestnut Street, Suite 826,
            Philadelphia, PA 19106. Here is a full listing of Better Real
            Estate, LLC’s license numbers. Better Real Estate, LLC provides
            access to real estate brokerage services via its nationwide network
            of partner brokerages and real estate agents (“Better Real Estate
            Partner Agents”). Equal Housing Opportunity. All rights reserved.
          </p>
          <p>New York State Housing and Anti-Discrimination Notice</p>
          <p>
            Homeowners insurance policies are offered through Better Cover, LLC,
            a Pennsylvania Resident Producer Agency. License #881593. 325-41
            Chestnut Street, Suite 807, Philadelphia, PA 19106.
          </p>
          <p>
            Insurance quotes and policies are offered through Better Cover, LLC.
            A Pennsylvania Resident Producer Agency. License #881593. Here is a
            full listing of Better Cover, LLC’s license numbers.
          </p>
          <p>
            Better Inspect, LLC maintains its corporate headquarters at 325-41
            Chestnut Street, Suite 846, Philadelphia, PA 19106.
          </p>
          <p>
            Better Mortgage Corporation, Better Real Estate, LLC, Better
            Settlement Services, LLC, Better Cover, LLC, Better Connect, and
            Better Inspect, LLC are separate operating subsidiaries of Better
            Home & Finance Holding Company. Each company is a separate legal
            entity operated and managed through its own management and
            governance structure as required by its state of incorporation, and
            applicable and legal and regulatory requirements. Products not
            available in all states.
          </p>
          <p>
            Any unauthorized use of any proprietary or intellectual property is
            strictly prohibited. All trademarks, service marks, trade names,
            logos, icons, and domain names are proprietary to Better Home &
            Finance Holding Company. Better Home & Finance Holding Company
            trademarks are federally registered with the U. S. Patent and
            Trademark Office. Better Cover is a registered trademark with the
            U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
