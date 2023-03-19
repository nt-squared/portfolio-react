const socialMediaIcons = [
  {
    href: "https://www.linkedin.com",
    src: "../assets/linkedin.png",
    alt: "linkedin",
  },
  {
    href: "https://www.twitter.com",
    src: "../assets/twitter.png",
    alt: "twitter",
  },
  {
    href: "https://www.facebook.com",
    src: "../assets/facebook.png",
    alt: "facebook",
  },
  {
    href: "https://www.instagram.com",
    src: "../assets/instagram.png",
    alt: "instagram",
  },
];

export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {socialMediaIcons.map((icon) => (
        <a
          key={icon.alt}
          className="hover:opacity-50 transition duration-500"
          href={icon.href}
          target="_blank"
          rel="noreferrer"
        >
          <img src={icon.src} alt={`${icon.alt}-link`} />
        </a>
      ))}
    </div>
  );
}
