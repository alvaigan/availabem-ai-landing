"use client";
import Image from "next/image";
import NavMenu from "./NavMenu";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navItems: NavItem[] = [
    { id: "inicio", title: "Início", href: "#início" },
    { id: "recursos", title: "Recursos", href: "#recursos" },
    { id: "como-funciona", title: "Como Funciona", href: "#como-funciona" },
    { id: "benefícios", title: "Benefícios", href: "#benefícios" },
  ];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-xl shadow-lg py-3 px-3 flex flex-row justify-between items-center bg-white w-4/5">
        <div>
          <Image
            src="/logo.png"
            alt="AvailaBem-AI Logo"
            width={0}
            height={0}
            sizes="100%"
            fetchPriority="high"
            priority
            className="w-[166px] h-auto lg:w-[166px]"
          />
        </div>
        <NavMenu items={navItems} />
        <div className="flex flex-row gap-2 hidden sm:hidden md:flex">
          <Link href="/entrar">
            <Button variant="outline" size={"lg"}>
              Entrar
            </Button>
          </Link>
          <Link href="/registrar">
            <Button variant="default" size={"lg"}>
              Comçar
            </Button>
          </Link>
        </div>

        {/* Mobile */}
        <div
          className="sm:flex md:hidden p-2 cursor-pointer"
          onClick={handleMobileMenu}
        >
          <Image
            src="/hamburger-icon.svg"
            alt="Hamburger Icon"
            width={0}
            height={0}
            className="w-auto h-auto"
            priority
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleMobileMenu}
        />
      )}

      <div
        className={`fixed duration-300 ease-in-out top-0 left-0 w-full min-h-full bg-white z-50 flex flex-col p-5 transition-transform transform ${showMobileMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-row mt-5 justify-between w-full items-center">
          <div>
            <Image
              src="/logo.png"
              alt="AvailaBem-AI Logo"
              width={0}
              height={0}
              sizes="100%"
              fetchPriority="high"
              priority
              className="w-[166px] h-auto lg:w-[166px]"
            />
          </div>
          <div className="p-2 cursor-pointer" onClick={handleMobileMenu}>
            <Image
              src="/close-icon.svg"
              alt="AvailaBem-AI Logo"
              width={0}
              height={0}
              sizes="100%"
              fetchPriority="high"
              priority
              className="w-8 h-8"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-10 flex-grow">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href} onClick={handleMobileMenu}>
              <div className="text-2xl font-normal">{item.title}</div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Link href="/entrar">
            <Button variant="outline" size={"lg"} className="w-full">
              Entrar
            </Button>
          </Link>
          <Link href="/registrar">
            <Button variant="default" size={"lg"} className="w-full">
              Comçar
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
