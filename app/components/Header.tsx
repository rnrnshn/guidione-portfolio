"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const linkClasses = "hover:text-orange-500 text-gray-700 transition-all duration-300 ease-in-out";
  const activeLinkClasses = "border-b-2 border-orange-500 text-orange-500 mb-0 pb-1"; // Styles for active link

  return (
    <header className="flex justify-between items-center px-4 pt-4 sm:px-4 sm:py-2">
      <div>
        <Image
          src='/logo.png'
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>

      <nav className="flex gap-4">
        <Link href='/' className={`${linkClasses} ${pathname === '/' ? activeLinkClasses : ''}`}>
          Projects
        </Link>
        <Link href='/about' className={`${linkClasses} ${pathname === '/about' ? activeLinkClasses : ''}`}>
          About
        </Link>
        <Link href='/contact' className={`${linkClasses} ${pathname === '/contact' ? activeLinkClasses : ''}`}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
