"use client";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import MenuIcon from "../icons/MenuIcon";

export default function Navbar() {
  return (
    <Popover
      as="header"
      className="bg-darkGreen-500 shadow-md fixed top-0 z-50 w-full"
    >
      {({ open }) => (
        <>
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-white text-2xl font-bold flex items-center">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
                <Link href="/" className="hover:text-lightGreen-300">
                  MedFlix
                </Link>
              </div>
              <div className="hidden md:flex space-x-4">
                <Popover className="relative">
                  <Popover.Button className="text-white hover:text-lightGreen-300">
                    Servicii
                  </Popover.Button>
                </Popover>
                <Link
                  href="/contact"
                  className="text-white hover:text-lightGreen-300"
                >
                  Contact
                </Link>
              </div>
              {/* Mobile Menu Button */}
              <Popover.Button className="md:hidden text-white hover:text-lightGreen-300">
                <MenuIcon />
              </Popover.Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Popover.Panel
            as="nav"
            className="absolute w-full top-16 z-40 bg-darkGreen-500 shadow-md md:hidden"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="grid gap-4">
                <Popover className="relative">
                  <Popover.Button className="text-white hover:text-lightGreen-300">
                    Servicii
                  </Popover.Button>
                </Popover>
                <Link
                  href="/contact"
                  className="text-white hover:text-lightGreen-300"
                >
                  Contact
                </Link>
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
