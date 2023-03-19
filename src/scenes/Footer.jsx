import SocialMediaIcons from "../components/SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md: flex justify-center md:justify-between text-center">
          <p className="uppercase font-playfair font-semibold text-2xl text-yellow">
            jane esper
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023 ESPER. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
