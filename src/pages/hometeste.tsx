import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import Eu from '../assets/images/eu.png'
import { motion } from "motion/react"
import MediaLink from '../components/mediaLink';
function Home() {
    return (
        <>
            <section className='flex w-full flex-col md:flex-row  items-center  md:justify-center   md:gap-20' id="home">
                <div className=" flex flex-col items-center gap-6">
                    <motion.span
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex text-[40px]  sm:text-2xl md:text-9xl  text-[#9D00FF]  font-[agdasima] font-bold drop-shadow-[0_0_8px_#9D00FF] animate-fade-in ">
                        ARTHUR ROBERTO
                    </motion.span>
                    <motion.span
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="flex  md:text-6xl text-lg mt-[-39px] md:mt-[-40px] text-[#7C3AED] drop-shadow-[0_0_10px_#7C3AED] font-light font-[inter]">Desenvolvedor Front-End</motion.span>

                    <div className=''>
                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="flex md:text-2xl max-w-220 w-full md:w-200 text-sm text-center text-white">Desenvolvo soluções web responsivas que unem a estética do design moderno
                            com as tecnologias mais atuais do mercado. Crio experiências digitais fluidas
                            e intuitivas, garantindo personalidade em qualquer dispositivo.
                        </motion.p>

                    </div>

                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 0, y: -20, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className='md:flex hidden mt-8  gap-8'>
                        <a href="#download" className="p-2 max-w-60 w-60 h-18 rounded-[22px] bg-[#9D00FF] transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#9D00FF] text-white flex justify-center items-center md:text-3xl text-2xl font-medium hover:drop-shadow-[0_0_10px_#9D00FF] ">Currículo <Download className="ml-2" size={30} />
                        </a>
                        <a href="#contato" className="p-2  max-w-60 w-60 h-18 rounded-[22px] border-2 border-[#9D00FF] text-white hover:bg-[#9D00FF] transition-all duration-300 hover:scale-110 hover:text-white flex justify-center items-center md:text-3xl text-2xl font-medium hover:drop-shadow-[0_0_10px_#9D00FF] ">Contato <Mail className="ml-2" size={30} />
                        </a>
                    </motion.div>
                </div>
                <div className='align-center flex-col  gap-8 mt-6 justify-center w-full max-w-sm h-auto items-center flex'>
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 3
                        }} className='
                            max-w-[500px] w-full  h-auto
                            object-cover aspect-square
                            p-1
                            bg-[#6528C4] drop-shadow-[0_0_20px_#9D00FF] md:rounded-[148px_40px] rounded-[80px_20px]  align-center flex justify-center items-center'>
                        <motion.img
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className='  
                            msx-w-500 w-full h-auto
                            object-cover aspec' src={Eu} alt="Ilustração do Arthur Sorrindo com a língua para fora" />
                        </motion.div>

                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 3
                        }}
                        className='  flex md:justify-center justify-evenly md:items-center gap-8 md:gap-14'>
                            <MediaLink Icon={Github} link="https://github.com/arthurnsm" />
                            <MediaLink Icon={Linkedin} link="https://www.linkedin.com/in/arthrnsm/" />
                            <MediaLink Icon={Mail} link="https://www.linkedin.com/in/arthrnsm/" />
                    </motion.div>

                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 0, y: -20, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className='md:hidden flex gap-3 mt-20'>
                        <a href="#download" className="p-2 md:w-60 h-12 w-40 rounded-[22px] bg-[#9D00FF] transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#9D00FF] text-white flex justify-center items-center md:text-3xl text-xl font-medium hover:drop-shadow-[0_0_10px_#9D00FF] ">Baixar CV <Download className="ml-2" />
                        </a>
                        <a href="#contato" className="p-2 md:w-60 h-12 w-40 rounded-[22px] border-2 border-[#9D00FF] text-white hover:bg-[#9D00FF] transition-all duration-300 hover:scale-110 hover:text-white flex justify-center items-center md:text-3xl text- font-medium hover:drop-shadow-[0_0_10px_#9D00FF] ">Contato <Mail className="ml-2 " />
                        </a>
                    </motion.div>

                </div>

            </section>
            <div className='md:flex hidden justify-center items-center md:mt-[-5px] mt-8 align-center'>
                <motion.span
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ y: [10, 0, 10] , opacity: 1, }}
                    transition={{
                        y: {
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeOut"
                        },
                                opacity: {
                            duration: 0.5, 
                            ease: "linear"
                        }
                    }}
                    className='flex rounded-full text-[#9D00FF]'><ChevronDown size={50} /></motion.span>
            </div>
        </>

    )
}
export default Home