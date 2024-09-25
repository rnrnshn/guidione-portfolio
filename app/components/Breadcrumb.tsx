import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// @ts-ignore
export function Breadcrumb({ breadcrumbs }) {
  return (
    <div className="max-w-6xl mx-auto py-4 flex items-center gap-1 mb-4">
      { // @ts-ignore
      breadcrumbs.map((breadcrumb, index) => (
        <span key={index} className="flex items-center gap-1">
          {breadcrumb.url ? (
            <Link href={breadcrumb.url} className="text-amber-400">
              {breadcrumb.label}
            </Link>
          ) : (
            <span>{breadcrumb.label}</span>
          )}
          {index < breadcrumbs.length - 1 && <MdOutlineKeyboardArrowRight />}
        </span>
      ))}
    </div>
  );
}
