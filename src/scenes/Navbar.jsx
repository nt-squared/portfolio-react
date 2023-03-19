import { useState } from "react";

import useMediaQuery from "../hooks/useMediaQuery";
import Link from "../components/Link";

const scenes = ["Home", "Skills", "Projects", "Testimonials", "Contact"];

export default function Navbar({ isTopOfPage, selectedPage, setSelectedPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navBarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">JE</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 text-sm font-opensans font-semibold">
            {scenes.map((scene) => (
              <Link
                key={scene}
                page={scene}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src="../assets/menu-icon.svg" alt="menu-icon" />
          </button>
        )}

        {/* MENU NAV */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed top-0 bottom-0 right-0 w-[300px] bg-blue">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src="../assets/close-icon.svg" alt="close-icon" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              {scenes.map((scene) => (
                <Link
                  key={scene}
                  page={scene}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
