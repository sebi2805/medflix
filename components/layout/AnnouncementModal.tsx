"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { MFButton } from "../common/MFButton";
import CloseIcon from "../icons/CloseIcon";
import Medal from "../icons/Medal";
import { getCookie, setCookie } from "@/utils";
import { useRouter } from "next/navigation";

const AnnouncementModal: React.FC = () => {
  const [isFreeSessionModalOpen, setFreeSessionModalOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!getCookie("medflix-announcement")) {
        setFreeSessionModalOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleFreeSessionConfirm = () => {
    router.push("/contact");
    setCookie("medflix-announcement", "true");
    setFreeSessionModalOpen(false);
  };
  return (
    <Transition appear show={isFreeSessionModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center"
        onClose={() => setFreeSessionModalOpen(false)}
      >
        <div className="flex items-center justify-center min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />

          <div className="inline-block w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl border border-gray-200">
            <Dialog.Title
              as="h3"
              className="text-xl font-bold leading-6 text-center text-gray-900 mb-4"
            >
              Ședință Gratis!
            </Dialog.Title>

            <div className="flex justify-center mb-4">
              <Medal />
            </div>

            <p className="text-md text-gray-500 mb-4 text-center">
              Acesta este momentul tău. Programează acum o ședință gratis și
              descoperă cum putem colabora!
            </p>

            <div className="flex justify-center mt-4">
              <MFButton className="mt-4" onClick={handleFreeSessionConfirm}>
                Programează acum
              </MFButton>
            </div>

            <button
              onClick={() => setFreeSessionModalOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AnnouncementModal;
