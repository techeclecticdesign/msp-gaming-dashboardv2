/* Container and styles for NavLinks */

import NavLinks from "../components/nav-links";

export default function SideNav() {
  return (
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
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
