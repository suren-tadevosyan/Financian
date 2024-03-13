"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`rounded-lg border border-transparent   py-[12px] px-[16px] hover:bg-[#151515] hover:text-yellow-400 hover:border border-solid hover:border-[#453B18] ${
        pathname === link.url &&
        "bg-[#151515] text-yellow-400 border border-solid   !border-[#453B18]"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
