import { motion } from "motion/react"
import type { LucideIcon } from 'lucide-react';
interface MediaLinkProps{
    link: string,
    Icon: LucideIcon,
}

function MediaLink({link, Icon}:MediaLinkProps){
    return(
        <>
        <motion.a transition={{ delay: 0.1, ease: "easeIn" }} initial={{ scale: 0 }} animate={{ scale: 1 }} href={link} target="_blank" className='hover:scale-110 hover:bg-[#9D00FF] hover:text-white hover:drop-shadow-[0_0_10px_#9D00FF] transition-transform md:w-16 md:h-16 w-12 h-12 flex align-center justify-center items-center md:border-3 border-2 text-[#9D00FF] rounded-full border-[#9D00FF]'><Icon size={30} /> </motion.a>
        </>
    )
}

export default MediaLink
