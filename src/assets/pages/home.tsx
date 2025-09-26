import { Download, Mail, Github, Linkedin } from 'lucide-react';
import Eu from '../images/eu.png'
import { motion } from "motion/react"
function Home(){
    return(
    <section  className='flex flex-row mt-30 justify-around'>
        <div className=" flex flex-col gap-6">
            <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
             className="text-[150px]   text-[#9D00FF]  font-[agdasima] font-bold drop-shadow-[0_0_8px_#9D00FF] animate-fade-in ">
                ARTHUR ROBERTO
                </motion.h1>
            <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}

            className="text-6xl mt-[-65px] text-[#7C3AED] drop-shadow-[0_0_10px_#7C3AED] font-light font-[inter] tracking-wide ">Desenvolvedor Front-End</motion.p>
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            
            className="tex text-2xl w-220 text-white">Desenvolvo soluções web responsivas que unem a estética do design moderno 
                com as tecnologias mais atuais do mercado. Crio experiências digitais fluidas 
                e intuitivas, garantindo personalidade em qualquer dispositivo.
            </motion.p>
            <div className='mt-8 flex gap-8'>
            <a href="#download" className="w-62 h-18 rounded-[22px] bg-[#9D00FF] transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#9D00FF] text-white flex justify-center items-center text-3xl font-medium hover:drop-shadow-[0_0_10px_#9D00FF] ">Baixar CV <Download className="ml-2" size={30}/>
            </a>
            <a href="#contato" className="w-62 h-18 rounded-[22px] border-2 border-[#9D00FF] text-white hover:bg-[#9D00FF] transition-all duration-300 hover:scale-110 hover:text-white flex justify-center items-center text-3xl font-medium hover:drop-shadow-[0_0_10px_#9D00FF] ">Contato <Mail className="ml-2" size={30}/>
            </a>
            </div>
        </div>
        <div className='align-center flex-col justify-center items-center flex'>
            <motion.div   
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, 
            duration: 3 }} className='w-[500px] h-[500px] bg-[#6528C4] drop-shadow-[0_0_20px_#9D00FF] rounded-[148px_40px] align-center flex justify-center items-center'>
                <motion.img 
                 initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                className=' w-[400px] h-[400px]' src={Eu} alt="Ilustração do Arthur Sorrindo com a língua para fora" />
            </motion.div>
            <motion.div 
                        animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, 
            duration: 3 }}
            className='mt-10  flex justify-center items-center gap-14'>
                <motion.a transition={{delay: 0.8, ease: "easeIn" }}initial={{ scale: 0 }} animate={{ scale: 1 }} href='#' className='hover:scale-110 hover:bg-[#9D00FF] hover:text-white hover:drop-shadow-[0_0_10px_#9D00FF] transition-transform w-16 h-16 flex align-center justify-center items-center border-3 text-[#9D00FF] rounded-full border-[#9D00FF]'><Github size={30}/> </motion.a>
                <motion.a transition={{delay: 0.8, ease: "easeIn" }}initial={{ scale: 0 }} animate={{ scale: 1 }} href='#' className='hover:scale-110 hover:bg-[#9D00FF] hover:text-white hover:drop-shadow-[0_0_10px_#9D00FF] transition-transform w-16 h-16 flex align-center justify-center items-center border-3 text-[#9D00FF] rounded-full border-[#9D00FF]'><Linkedin size={30}/> </motion.a>
                <motion.a transition={{delay: 0.8, ease: "easeIn" }}initial={{ scale: 0 }} animate={{ scale: 1 }} href='#' className='hover:scale-110 hover:bg-[#9D00FF] hover:text-white hover:drop-shadow-[0_0_10px_#9D00FF] transition-transform w-16 h-16 flex align-center justify-center items-center border-3 text-[#9D00FF] rounded-full border-[#9D00FF]'><Mail size={30}/> </motion.a>
            </motion.div>
        </div>

    </section>
    
)
}
export default Home