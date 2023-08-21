import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

type CookieName = "medflix-cookie";

export const deleteCookie = (name: CookieName) => {
  document.cookie = name + "=;path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

export const setCookie = (name: CookieName, value: string) => {
  if (getCookie("medflix-cookie") === "true" || name === "medflix-cookie") {
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + 365 * 50 * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
};

export const getCookie = (name: CookieName) => {
  if (typeof window !== "undefined") {
    return (
      document.cookie
        ?.split("; ")
        ?.find((row) => row.startsWith(`${name}=`))
        ?.split("=")?.[1] ?? null
    );
  }
};

export const getCookieSSR = (
  context: GetServerSidePropsContext<ParsedUrlQuery>,
  name: CookieName
) => {
  return context?.req?.cookies?.[name] ?? null;
};
