interface ProjectCardProps {
    position: number;
}

import Tag from "./tag";
import Link from "./link";
import { Github, Eye } from "lucide-react";
function ProjectCard(){
    return (
        <div className="flex md:flex-row justify-center items-center md:items-start gap-6">
            <span className=" md:hidden flex font-[Jost] text-center font-bold text-[#4802B4] text-2xl md:text-5xl ">Organização Protetora dos Animais</span>
            <div className='md:w-[500px] md:h-[500px] w-[250px] h-[200px] border-2 border-[#390E7C]  md:rounded-[148px_40px] rounded-[80px_20px]  align-center flex justify-center items-center'>

            </div>
            <div className="flex flex-col  md:ml-8 gap-8  md:mt-10">
                <span className=" md:flex hidden font-[Jost] text-center font-bold text-[#4802B4] text-2xl md:text-5xl ">Organização Protetora dos Animais</span>
                <span className=" font-[Inter] md:w-200 text-sm  text-white w-full md:text-2xl ">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and it to 
                    make a type specimen book. It has survived not only five 
                    centuries, but also the leap into electronic typesetting,</span>

                <div className="flex flex-wrap gap-4 ">
                    <Tag color='390E7C'/>
                    <Tag color='390E7C'/>
                </div>
                <div className="flex flex-row gap-6">
                    <Link link="#" Icon={Eye}/>
                    <Link link="#"  Icon={Github} />
                </div>

            </div>
        </div>
    );
}

export default ProjectCard;