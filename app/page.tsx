import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Star, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-48 bg-[#004733] h-auto flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
          <h1 className="text-[50px] md:text-[70px] lg:text-[100px] font-bold text-[#1ee07f] leading-tight">
            Mortgages
            <br />
            made simple
          </h1>
        </div>

        <div className="relative w-full flex justify-center pt-32">
          <div className="absolute left-96 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center ">
            <Button
              asChild
              size="lg"
              className="text-sm py-8 px-12 bg-[#1ee07f] hover:bg-[#45a049] rounded-full shadow-lg text-[#004733]"
            >
              <Link href="/start">Start my approval</Link>
            </Button>
            <div className="flex items-center justify-center mt-2 text-white space-x-2 text-sm">
              <span className="inline-block">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" />
                </svg>
              </span>
              <span>3 min</span>
              <span className="mx-2">|</span>
              <span>No credit impact</span>
            </div>
          </div>

          <img
            src="https://media.better.com/better-com/homepage/hero-variant-c.webp"
            alt="Mobile app"
            className="w-[300px] md:w-[350px] lg:w-[500px] rounded-lg mx-auto"
          />

          <div className="absolute right-96 top-1/2 -translate-y-1/2 bg-transparent rounded-lg p-2  flex items-center z-30">
            <div className="flex flex-col items-center text-white">
              <div className="flex items-center space-x-1">
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-5"
                />
                <div className="flex items-center space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <Star className="w-5 h-5 text-gray-400 fill-current" />
                </div>
              </div>

              <span className="text-sm mt-1">
                4.6 Stars | 3177 Google reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp"
                alt="Customer testimonial"
                className="w-full h-auto max-h-[600px] object-cover rounded-lg"
              />
            </div>

            <div className="flex gap-2 mt-4 justify-center md:justify-start">
              <button className="px-6 py-2 border-4 border-green-800 text-green-800 rounded-full font-medium bg-white">
                Arian
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded-full font-medium bg-white">
                Amanda
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded-full font-medium bg-white">
                Paul
              </button>
            </div>
          </div>

          <div className="w-full sm:w-90 px-2 md:px-40">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#333333] mb-4">
              Find out why we're better.
            </h2>

            <button className="px-10 py-5 bg-[#004733] text-white rounded-full font-medium mt-4 flex-col sm:flex-row items-center">
              See all our stories
            </button>

            <div className="flex gap-2 mt-4">
              <Star className="fill-green-800 text-green-800 w-5 h-5" />
              <span className="text-gray-700 font-medium">Trustpilot</span>
              <span className="text-gray-700">Excellent 4.4 out of 5</span>
              {/* <span className="text-gray-700">4.4 out of 5</span> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div>
              <h2 className="text-[44px] font-bold mb-2">Got questions?</h2>
              <p className="text-[44px] font-bold">We've got answers</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6 md:mt-0">
              <Button
                variant="outline"
                className="rounded-full border-2 border-[#004D40] text-[#004D40] hover:bg-[#004D40] hover:text-white px-6"
              >
                Our products
              </Button>
              <Button variant="outline" className="rounded-full px-6">
                Calculators
              </Button>
              <Button variant="outline" className="rounded-full px-6">
                Guides & FAQs
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 bg-[#E8F5E9] rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Buying your first home with Better
              </h3>
              <Button variant="outline" className="rounded-full mb-6">
                <ArrowRight className="w-5 h-5" />
              </Button>
              <img
                src="https://media.better.com/better-com/homepage/learning-center/first-home.webp"
                alt="First time home buyer"
                className="w-full rounded-lg"
              />
            </div>

            <div className="md:col-span-8 bg-[#E8F5E9] rounded-2xl p-8">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-4">
                    One Day Mortgage¹
                  </h3>
                  <p className="mb-6 text-gray-700">
                    Kick your home loan into hyperdrive. Going from locked rate
                    to Commitment Letter takes weeks for traditional lenders. We
                    do it in a single day.
                  </p>
                  <Button variant="outline" className="rounded-full">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0">
                  <img
                    src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp"
                    alt="One Day Mortgage"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-6 bg-[#E8F5E9] rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2">
                  <img
                    src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp"
                    alt="HELOC"
                    className="w-full rounded-lg mb-6 md:mb-0"
                  />
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-semibold mb-4">Better HELOC</h3>
                  <p className="mb-6 text-gray-700">
                    Introducing One Day HELOC™—your express lane to getting cash
                    from your home with our Home Equity Line of Credit.
                  </p>
                  <Button variant="outline" className="rounded-full">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 bg-[#E8F5E9] rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Insurance</h3>
                  <Button variant="outline" className="rounded-full mb-6">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <img
                    src="https://media.better.com/better-com/homepage/learning-center/insurance.webp"
                    alt="Insurance"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-4 right-4 flex items-center bg-white rounded-lg shadow-lg p-2">
        <img
          src="https://media.better.com/images/better-forever-thumbnail.webp"
          alt="Better Forever"
          className="w-12 h-12 rounded-lg mr-3"
        />
        <div className="text-sm">
          <p className="font-medium">Save on future home loans</p>
          <p className="text-gray-600">with $0 origination fees.</p>
        </div>
        <Button
          variant="link"
          className="text-[#004D40] hover:text-[#00695C] ml-2"
        >
          See details →
        </Button>
      </div>
    </div>
  );
}
