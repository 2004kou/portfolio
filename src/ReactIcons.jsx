import { IconContext } from 'react-icons'
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiFlask } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

    const ReactIcons = () =>{
    return(
    <div className='block w-3/5'>
    <h3 className='text-white !font-semibold !text-[40px] !mb-[30px]'>Languages</h3>
        <IconContext.Provider value={{ size:30, color:"#ffffffff"}}>
            <ul className="w-3/5 text-left flex">
                <li className="text-white flex !w-[150px] h-[60px] justify-center items-center border border-white rounded-full shadow-[0_0_20px_white] !pl-[20px] !pr-[20px] !mr-[20px]"><FaHtml5 />HTML</li>
                <li className="text-white flex !w-[150px] h-[60px] justify-center items-center border border-white rounded-full shadow-[0_0_20px_white] !pl-[20px] !pr-[20px] !mr-[20px]"> <FaCss3 />CSS</li>
                <li className="text-white flex !w-[150px] h-[60px] justify-center items-center border border-white rounded-full shadow-[0_0_20px_white] !pl-[20px] !pr-[20px] !mr-[20px]"><FaPython/>Python</li>
                <li className="text-white flex !w-[150px] h-[60px] justify-center items-center border border-white rounded-full shadow-[0_0_20px_white] !pl-[20px] !pr-[20px]"><IoLogoJavascript />JavaScript</li>
            </ul>
        </IconContext.Provider>
    <h3 className='text-white !font-semibold !text-[40px] !mt-[30px]
    !mb-[20px]'>Frameworks</h3>
        <IconContext.Provider value={{ size:30, color:"#ffffffff"}}>
            <ul className="w-3/5 text-left flex">
                <li className="text-white flex !w-[150px] h-[60px] justify-center items-center border border-white rounded-full shadow-[0_0_20px_white] !pl-[20px] !pr-[20px] !mr-[20px]"><SiFlask />Flask</li>
                <li className="text-white flex !w-[150px] h-[60px] justify-center items-center border border-white rounded-full shadow-[0_0_20px_white] !pl-[20px] !pr-[20px]"><RiTailwindCssFill />Tailwind CSS</li>
            </ul>
        </IconContext.Provider>
    </div>
        
    )
}

export default ReactIcons