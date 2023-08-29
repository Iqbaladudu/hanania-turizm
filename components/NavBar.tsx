"use client";

import Image from "next/image";
import logo from "@/public/logo.svg";

import { NavLink } from "./NavLink";
import { NavLinkData } from "./Hero";

import { MutableRefObject, useEffect, useRef, useState } from "react";

enum StickyClassEnum {
  NORMAL = "relative",
  STICKY = "fixed top-0 md:top-5 navbar bg-base-200/30 shadow-md rounded-md backdrop-blur-md transition-all duration-300 w-10/12",
}

export function NavBar() {
  const [stickyClass, setStickyClass] = useState<StickyClassEnum>(
    StickyClassEnum.NORMAL
  );
  const navBarRef: MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let windowHeight = window.scrollY;
      windowHeight >= 15
        ? setStickyClass(StickyClassEnum.STICKY)
        : setStickyClass(StickyClassEnum.NORMAL);
    });
  }, []);

  return (
    <nav
      ref={navBarRef}
      className={`flex font-bold flex-wrap flex-row justify-between items-center z-50 ${stickyClass}`}
    >
      <div>
        <Image src={logo} alt="Logo Hanania Turizm" />
      </div>
      <div className="md:flex-row md:gap-5 hidden md:visible md:flex">
        {NavLinkData.map(({ href, label, status }, index) => (
          <NavLink key={index} href={href} label={label} status={status} />
        ))}
      </div>
      <div className="rounded-md">
        <button className="btn-sm rounded md:btn-md lg:btn bg-white text-ht-orange">
          Hubungi Kami
        </button>
      </div>
      <div className="flex md:hidden">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-square btn-ghost m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] menu shadow bg-base-100 rounded-md p-5 w-52 flex flex-col gap-5"
          >
            {NavLinkData.map(({ href, label, status }, index) => (
              <NavLink key={index} href={href} label={label} status={status} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
