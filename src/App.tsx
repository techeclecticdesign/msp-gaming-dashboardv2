"use client";

import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Installed from "./pages/installed";
import GameList from "./pages/gamelist";
import Manual from "./pages/manual";
import clsx from "clsx";
import "./App.css";

export default function () {
  const [pathname, setPathname] = useState(location.pathname);
  const links = [
    { name: "Dashboard", href: "/" },
    {
      name: "Installed Games",
      href: "/installed",
    },
    { name: "Full Game List", href: "/gamelist" },
    { name: "Game System Guide", href: "/manual" },
  ];

  return (
    <>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-52">
          <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <div className="mb-2 flex h-20 items-end justify-center items-center rounded-md bg-emerald-800 p-4 md:h-40">
              <figure>
                <img
                  src="/controller.png"
                  width={180}
                  height={110}
                  alt="MSP Gaming System"
                />
                <figcaption className="stencil.className} text-gray-50 text-center text-xl">
                  MSP Gaming
                </figcaption>
              </figure>
            </div>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
              {links.map((link) => {
                return (
                  <Link
                    onClick={() => setPathname(link.href)}
                    to={link.href}
                    key={link.name}
                    className={clsx(
                      "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 \
              text-sm font-medium md:flex-none \
              md:justify-start md:p-2 md:px-3",
                      {
                        "bg-emerald-100 text-emerald-600":
                          pathname === link.href,
                        "cursor-pointer bg-gray-50 text-black":
                          pathname !== link.href,
                      }
                    )}
                  >
                    <p className="hidden md:block">{link.name}</p>
                  </Link>
                );
              })}
              <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            </div>
          </div>
        </div>
        <div
          className="flex-grow p-6 font-sans md:overflow-y-auto md:p-12"
          tabIndex={1}
        >
          <div>
            {" "}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/installed" element={<Installed />} />
              <Route path="/gamelist" element={<GameList />} />
              <Route path="/manual" element={<Manual />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
