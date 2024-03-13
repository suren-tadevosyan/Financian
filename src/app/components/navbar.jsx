"use client";
import Link from "next/link";
import NavLink from "./navLink";
import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import Login from "../components/login/login";
import Register from "../components/login/register";

const links = [
  { url: "/services", title: "Services" },
  { url: "/allinone", title: "All in one" },
  { url: "/courses", title: "Courses" },
  { title: "Log in" },
  { url: "/getStartedNow", title: "Get started now" },
];

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

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
          <Image src="/assets/Logo.svg" alt="logo" fill />
        </Link>
      </div>
      <div className=" md:flex gap-[16px] text-xs">
        {links.map((link) =>
          link.title === "Log in" ? (
            <Button
              key={link.title}
              label={link.title}
              onClick={toggleModal}
              className={`rounded-lg  py-[12px] px-[16px] hover:bg-[#151515] border border-transparent hover:text-yellow-400 hover:border border-solid hover:border-[#453B18] `}
            />
          ) : (
            <NavLink link={link} key={link.title} />
          )
        )}
      </div>
      <Modal
        open={openModal}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center "
      >
        <Box
          sx={{
            width: 500,
            p: 2,
            backgroundColor: "rgba(20, 20, 20, 0.9)",
          }}
          className="rounded-lg !px-6 !py-8"
        >
          {showLogin ? (
            <Login onRegisterClick={handleToggleForm} />
          ) : (
            <Register onLoginClick={handleToggleForm} />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
