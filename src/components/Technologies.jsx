import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";

function Technologies() {
  return (
    <div className="my-8">
        <h1 className="text-4xl text-center font-bold">Technologies</h1>
      <div className="max-w-[1200px] mx-auto my-6 p-2 flex flex-row flex-wrap gap-6 text-4xl justify-center items-center">
        <FaHtml5 className="text-orange-600"/>
        <FaCss3Alt className="text-blue-600"/>
        <IoLogoJavascript className="text-yellow-400"/>
        <FaBootstrap className="text-blue-600"/>
        <SiTailwindcss className="text-white"/>
        <FaReact className="text-blue-600"/>
        <FaNode className="text-yellow-600"/>
        <SiMongodb className="text-green-600"/>
        <TbBrandCpp className="text-white"/>
        <FaJava className="text-blue-400"/>
      </div>
    </div>
  )
}

export default Technologies
