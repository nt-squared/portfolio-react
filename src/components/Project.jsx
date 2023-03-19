import { motion } from "framer-motion";

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Project({ title }) {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const overlayStyles = `absolute w-full h-full inset-0 opacity-0 hover:opacity-90 transition duration-500
        bg-grey text-deep-blue z-30 flex flex-col justify-center items-center text-center p-16 `;
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair ">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptate aut quos consequuntur officiis vel!
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
}
