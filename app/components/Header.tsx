import Link from "next/link";
import Image from "next/image";

export function Header() {
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
        <Link href='/'>Projects</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
      </nav>
    </header>
  )
}