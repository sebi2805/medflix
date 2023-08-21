"use client";
import PrivacyPolicy from "@/app/privacy/page";
import { getCookie, setCookie } from "@/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const AcceptCookie: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const acceptCookies = () => {
    setCookie("medflix-cookie", "true");
    router.refresh();
    setIsVisible(false);
  };

  const closeBar = () => {
    setIsVisible(false);
  };
  React.useEffect(() => {
    if (getCookie("medflix-cookie") !== "true") {
      setIsVisible(true);
    }
  }, [pathname]);
  return isVisible ? (
    pathname?.includes("privacy") ? (
      <PrivacyPolicy />
    ) : (
      <>
        <div className="fixed inset-0 bg-black flex flex-col justify-end z-20 opacity-50"></div>
        <div
          className="fixed bottom-0 bg-white p-4 shadow-md flex justify-between items-center w-full"
          style={{
            zIndex: 100,
          }}
        >
          <div className="text-sm text-gray-900 flex-1">
            We use cookies to ensure you get the best experience on our website.{" "}
            <Link href="/privacy" className="text-blue-400 hover:underline">
              Learn more
            </Link>
          </div>
          <div className="space-x-4">
            <button
              type="button"
              className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={acceptCookies}
            >
              Accept Cookies
            </button>
            <button
              type="button"
              className="py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={closeBar}
            >
              Close
            </button>
          </div>
        </div>
      </>
    )
  ) : (
    <></>
  );
};

export default AcceptCookie;
