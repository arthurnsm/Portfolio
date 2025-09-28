import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import Eu from '../assets/images/eu.png'
import { motion } from "motion/react"
function Home() {
    return (
        <>
            <section className='flex flex-col md:flex-row md:mt-12    md:justify-around'>
                <div className=" flex flex-col items-center gap-6">
                    <motion.span
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:text-[150px] text-[50px] mt-4 md:mt-0  text-[#9D00FF]  font-[agdasima] font-bold drop-shadow-[0_0_8px_#9D00FF] animate-fade-in ">
                        ARTHUR ROBERTO
                    </motion.span>
                    <motion.span
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="md:text-6xl text-2xl mt-[-43px] text-start md:mt-[-65px] text-[#7C3AED] drop-shadow-[0_0_10px_#7C3AED] font-light font-[inter] ">Desenvolvedor Front-End</motion.span>

                    <div className='gap-10'>
                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className=" md:text-2xl md:w-220 w-80 text-3sm text-center text-white">Desenvolvo soluções web responsivas que unem a estética do design moderno
                            com as tecnologias mais atuais do mercado. Crio experiências digitais fluidas
                            e intuitivas, garantindo personalidade em qualquer dispositivo.
                        </motion.p>

                    </div>

                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 0, y: -20, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className='md:flex hidden mt-8  gap-8'>
                        <a href="#download" className="p-2 md:w-60 h-18 rounded-[22px] bg-[#9D00FF] transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#9D00FF] text-white flex justify-center items-center md:text-3xl text-2xl font-medium hover:drop-shadow-[0_0_10px_#9D00FF] ">Baixar CV <Download className="ml-2" size={30} />
                        </a>
                        <a href="#contato" className="p-2 md:w-60 h-18 rounded-[22px] border-2 border-[#9D00FF] text-white hover:bg-[#9D00FF] transition-all duration-300 hover:scale-110 hover:text-white flex justify-center items-center md:text-3xl text-2xl font-medium hover:drop-shadow-[0_0_10px_#9D00FF] ">Contato <Mail className="ml-2" size={30} />
                        </a>
                    </motion.div>
                </div>
                <div className='align-center flex-col  gap-8 mt-6 justify-center items-center flex'>
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 3
                        }} className='md:w-[500px] md:h-[500px] w-[250px] h-[200px] bg-[#6528C4] drop-shadow-[0_0_20px_#9D00FF] md:rounded-[148px_40px] rounded-[80px_20px]  align-center flex justify-center items-center'>
                        <motion.img
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className=' md:w-[400px] md:h-[400px] w-[150px] h-[150px]' src={Eu} alt="Ilustração do Arthur Sorrindo com a língua para fora" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 3
                        }}
                        className='md:mt-8   flex justify-center items-center gap-8 md:gap-14'>
                        <motion.a transition={{ delay: 0.1, ease: "easeIn" }} initial={{ scale: 0 }} animate={{ scale: 1 }} href='https://github.com/arthurnsm' target="_blank" className='hover:scale-110 hover:bg-[#9D00FF] hover:text-white hover:drop-shadow-[0_0_10px_#9D00FF] transition-transform md:w-16 md:h-16 w-14 h-14 flex align-center justify-center items-center border-3 text-[#9D00FF] rounded-full border-[#9D00FF]'><Github size={30} /> </motion.a>
                        <motion.a transition={{ delay: 0.1, ease: "easeIn" }} initial={{ scale: 0 }} animate={{ scale: 1 }} href='https://www.linkedin.com/in/arthrnsm/' target="_blank" className='hover:scale-110 hover:bg-[#9D00FF] hover:text-white hover:drop-shadow-[0_0_10px_#9D00FF] transition-transform md:w-16 md:h-16 w-14 h-14 flex align-center justify-center items-center border-3 text-[#9D00FF] rounded-full border-[#9D00FF]'><Linkedin size={30} /> </motion.a>
                        <motion.a transition={{ delay: 0.1, ease: "easeIn" }} initial={{ scale: 0 }} animate={{ scale: 1 }} href='#' target="_blank" className='hover:scale-110 hover:bg-[#9D00FF] hover:text-white hover:drop-shadow-[0_0_10px_#9D00FF] transition-transform md:w-16 md:h-16 w-14 h-14 flex align-center justify-center items-center border-3 text-[#9D00FF] rounded-full border-[#9D00FF]'><Mail size={30} /> </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 0, y: -20, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className='md:hidden flex gap-3'>
                        <a href="#download" className="p-2 md:w-60 h-12 w-40 rounded-[22px] bg-[#9D00FF] transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#9D00FF] text-white flex justify-center items-center md:text-3xl text-xl font-medium hover:drop-shadow-[0_0_10px_#9D00FF] ">Baixar CV <Download className="ml-2" />
                        </a>
                        <a href="#contato" className="p-2 md:w-60 h-12 w-40 rounded-[22px] border-2 border-[#9D00FF] text-white hover:bg-[#9D00FF] transition-all duration-300 hover:scale-110 hover:text-white flex justify-center items-center md:text-3xl text- font-medium hover:drop-shadow-[0_0_10px_#9D00FF] ">Contato <Mail className="ml-2 " />
                        </a>
                    </motion.div>

                </div>

            </section>
            <div className='md:flex hidden justify-center items-center mt-8 align-center'>
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