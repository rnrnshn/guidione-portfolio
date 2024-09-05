import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export function Breadcrumb() {
  return (
    <div className="max-w-6xl mx-auto py-4 flex items-center gap-1 mb-4">
      <Link href="/" className="text-amber-400">Home</Link>
      <MdOutlineKeyboardArrowRight />
      <Link href="/about">About</Link>
    </div>
  )
}