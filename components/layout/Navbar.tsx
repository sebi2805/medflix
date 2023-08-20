"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import MenuIcon from "../icons/MenuIcon";
import Image from "next/image";

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
                <Link
                  href="/about"
                  className="text-white hover:text-lightGreen-300"
                >
                  About
                </Link>
                <Popover className="relative">
                  <Popover.Button className="text-white hover:text-lightGreen-300">
                    Services
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 mt-2 w-56 max-w-sm px-4 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative bg-white p-4 grid gap-4">
                          <Link
                            href="/services/web"
                            className="text-darkGreen-600 hover:bg-darkGreen-100 hover:text-darkGreen-900 block px-2 py-2 rounded-md"
                          >
                            Web Development
                          </Link>
                          <Link
                            href="/services/app"
                            className="text-darkGreen-600 hover:bg-darkGreen-100 hover:text-darkGreen-900 block px-2 py-2 rounded-md"
                          >
                            App Development
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
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
                <Link
                  href="/about"
                  className="text-white hover:text-lightGreen-300"
                >
                  About
                </Link>
                <Popover className="relative">
                  <Popover.Button className="text-white hover:text-lightGreen-300">
                    Services
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 mt-2 w-56 max-w-sm px-4 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative bg-white p-4 grid gap-4">
                          <Link
                            href="/services/web"
                            className="text-darkGreen-600 hover:bg-darkGreen-100 hover:text-darkGreen-900 block px-2 py-2 rounded-md"
                          >
                            Web Development
                          </Link>
                          <Link
                            href="/services/app"
                            className="text-darkGreen-600 hover:bg-darkGreen-100 hover:text-darkGreen-900 block px-2 py-2 rounded-md"
                          >
                            App Development
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
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
