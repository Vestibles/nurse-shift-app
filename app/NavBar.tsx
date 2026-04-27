"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const base = "px-3 py-1 rounded-md text-sm transition";
  const active = "bg-blue-700 text-white font-semibold shadow-sm";
  const inactive = "text-gray-700 hover:text-blue-700 hover:bg-gray-100";

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex gap-4 sticky top-0 z-50">
      <Link
        href="/handover"
        className={`${base} ${pathname === "/handover" ? active : inactive}`}
      >
        Handover
      </Link>

      <Link
        href="/dashboard"
        className={`${base} ${pathname === "/dashboard" ? active : inactive}`}
      >
        Dashboard
      </Link>
    </nav>
  );
}
