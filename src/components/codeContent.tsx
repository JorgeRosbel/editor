import { Code } from "./code";
import { useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";

export const CodeContent = () => {
    const [visible, setVisible] = useState<number>(1);

    const handleVisible = (id:number) => () => setVisible(id)

    return(
        <div className="w-1/2 flex">
            <div className="w-[10%] max-h-screen flex flex-col items-center justify-start gap-3 py-5 bg-dark-2">
                <button onClick={handleVisible(1)} className={`text-[#E34F26] text-[40px] ${visible === 1 ? "text-opacity-100":"text-opacity-40"} transition-all duration-300`}><FaHtml5 /></button>
                <button onClick={handleVisible(2)} className={`text-[#F7DF1E] text-[40px] ${visible === 2 ? "text-opacity-100":"text-opacity-40"} transition-all duration-300`}><FaJs /></button>
                <button onClick={handleVisible(3)} className={`text-[#1572B6] text-[40px] ${visible === 3 ? "text-opacity-100":"text-opacity-40"} transition-all duration-300`}><FaCss3Alt /></button>
            </div>
            <div className="flex-1">
                {visible === 1 && <Code lang='html' />}
                {visible === 2 && <Code lang='js' />}
                {visible === 3 && <Code lang='css' />}
            </div>
        </div>
    )
}

