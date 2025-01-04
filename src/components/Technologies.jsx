import { DiGit, DiJavascript, DiPython } from "react-icons/di";
import { FaAndroid, FaAws, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const Technologies = () => {
  return (
    <div className="pb-24">
      {/* Technologies Title with Reflection Effect */}
      <motion.div
        className="relative my-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={textVariants}
      >
        <h2 className="text-4xl text-white relative z-10">Technologies</h2>
        <h2
          className="text-4xl absolute top-full left-0 w-full text-center text-blue-400 opacity-50
          transform translate-y-2 blur-sm reflection"
        >
          Technologies
        </h2>
      </motion.div>

      {/* Icons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[
          { Component: RiReactjsLine, color: "text-cyan-400" },
          { Component: TbBrandNextjs, color: "" },
          { Component: SiMongodb, color: "text-cyan-500" },
          { Component: FaAndroid, color: "text-green-500" },
          { Component: FaNodeJs, color: "text-green-500" },
          { Component: DiGit, color: "text-orange-600" },
          { Component: FaDocker, color: "text-blue-500" },
          { Component: FaAws, color: "text-orange-500" },
          { Component: DiPython, color: "text-blue-500" },
          { Component: DiJavascript, color: "text-yellow-500" },
        ].map(({ Component, color }, index) => (
          <motion.div
            key={index}
            className="p-4"
            whileHover={{ scale: 1.4 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          >
            <Component className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
