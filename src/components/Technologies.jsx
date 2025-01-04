import { DiGit, DiJavascript, DiPython } from "react-icons/di";
import { FaAndroid, FaAws, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri"; // Import React.js icon

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="p-4">
          <SiMongodb className="text-7xl text-cyan-500" />
        </div>
        <div className="p-4">
          <FaAndroid className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
          <DiGit className="text-7xl text-orange-600" />
        </div>
        <div className="p-4">
          <FaDocker className="text-7xl text-blue-500" />
        </div>
        <div className="p-4">
          <FaAws className="text-7xl text-orange-500" />
        </div>
        <div className="p-4">
          <DiPython className="text-7xl text-blue-500" />
        </div>
        <div className="p-4">
          <DiJavascript className="text-7xl text-yellow-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;