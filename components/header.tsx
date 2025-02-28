import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full max-w-6xl flex justify-between items-center mb-12">
      <Link href="/" className="flex items-center">
        <Image
          src="/better-logo.svg"
          alt="Better Mortgage"
          width={150}
          height={40}
          className="h-10 w-auto"
        />
      </Link>
      <div className="flex items-center text-emerald-700">
        <Phone className="h-5 w-5 mr-2" />
        <span className="text-sm md:text-base">
          Need help? Call (415) 523 8837
        </span>
      </div>
    </header>
  );
}
