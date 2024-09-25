"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const linkClasses = "hover:text-orange-500 text-gray-700 transition-all duration-300 ease-in-out";
  const activeLinkClasses = "border-b-2 border-orange-500 text-orange-500 mb-0 pb-1";

  // @ts-ignore
  const scrollToFooter = (e) => {
    e.preventDefault();

    // @ts-ignore
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="flex justify-between items-center px-4 pt-4 sm:px-4 sm:py-2">
      <div>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
      </div>

      <nav className="flex gap-4">
        <Link href='/' className={`${linkClasses} ${pathname === '/' ? activeLinkClasses : ''}`}>
          Projects
        </Link>
        <Link href='/about' className={`${linkClasses} ${pathname === '/about' ? activeLinkClasses : ''}`}>
          About
        </Link>
        <Link href="/" onClick={scrollToFooter} className={`${linkClasses}`}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
