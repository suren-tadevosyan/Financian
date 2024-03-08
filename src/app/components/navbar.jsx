"use client";
import Link from "next/link";
import NavLink from "./navLink";
import Image from "next/image";
import { useState } from "react";

const links = [
  { url: "/services", title: "Services" },
  { url: "/allinone", title: "All in one" },
  { url: "/courses", title: "Courses" },
  { url: "/login", title: "Log in" },
  { url: "/getStartedNow", title: "Get started now" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topBar = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerBar = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomBar = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  return (
    <div className="h-20 flex items-center justify-between mx-[140px]  ">
      <div className=" h-20  items-center md:hidden lg:flex justify-center items-center  ">
        <Link href="/" className="w-[187.1px] h-[32px] relative ">
          <Image src="/assets/Logo.svg" alt="linkedin" fill />
        </Link>
      </div>
      <div className=" md:flex gap-[16px] text-xs">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
