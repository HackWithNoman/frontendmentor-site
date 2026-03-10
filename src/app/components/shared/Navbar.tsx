"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between py-6 flex-col md:flex-row md:gap-0">
      <Link href={"/"}>
        <Image src="/logo.png" alt="site logo" width={200} height={38}></Image>
      </Link>

      <div className="mt-6">
        {links.map(({ href, label }) => {
          return (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-[#6366f1] mr-6 ${
                pathname === href
                  ? "text-[#6366f1] font-semibold"
                  : "text-zinc-500"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
