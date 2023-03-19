import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const scenes = ["Home", "Skills", "Projects", "Testimonials", "Contact"];

export default function DotGroup({ selectedPage, setSelectedPage }) {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6
    before:rounded-full before:border-2 before:border-yellow before:left-[-50%]
    before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {scenes.map((scene) => {
        const lowerCaseScence = scene.toLocaleLowerCase();

        return (
          <AnchorLink
            key={scene}
            className={`${
              selectedPage === lowerCaseScence ? selectedStyles : "bg-dark-grey"
            }
            w-3 h-3 rounded-full`}
            href={`#${lowerCaseScence}`}
            onClick={() => setSelectedPage(lowerCaseScence)}
          ></AnchorLink>
        );
      })}
    </div>
  );
}
