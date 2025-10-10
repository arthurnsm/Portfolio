import type { LucideIcon } from 'lucide-react';
interface LinkProps {
    Icon: LucideIcon;
    link: string

}


function Link({Icon, link}: LinkProps){
    return(
        <a href={link}>
       <div className="w-16 border-4 border-[#390E7C] h-16 rounded-full p-2 flex justify-center items-center hover:scale-110  hover:text-white  transition-transform cursor-pointer">
        <Icon size={30} className="text-[#9D00FF]"/>
        </div>
        </a>
    )
}

export default Link;