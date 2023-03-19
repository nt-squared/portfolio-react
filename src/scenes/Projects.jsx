import { motion } from "framer-motion";

import LineGradient from "../components/LineGradient";
import Project from "../components/Project";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-48 ">
      {/* HEADING */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl uppercase">
            my <span className="text-red ">pro</span>jects
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea in
          quisquam, nostrum amet sint architecto commodi, saepe tempore ipsam,
          voluptates unde ullam fugiat necessitatibus.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div
            className="flex justify-center items-center text-center p-10
                bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair
                font-semibold uppercase"
          >
            beautiful user interfaces
          </div>
          <Project title="Project 1" />
          <Project title="Project 2" />

          {/* ROW 2 */}
          <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" />

          {/* ROW 3 */}
          <Project title="Project 6" />
          <Project title="Project 7" />
          <div
            className="flex justify-center items-center text-center p-10
                bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair
                font-semibold uppercase"
          >
            smooth user experience
          </div>
        </motion.div>
      </div>
    </section>
  );
}
