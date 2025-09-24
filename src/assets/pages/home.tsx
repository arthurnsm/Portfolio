import { Download, Mail, Github, Linkedin } from 'lucide-react';
import Eu from '../images/eu.png'
function Home(){
    return(
    <section  className='flex flex-row mt-30 justify-around'>
        <div className=" flex flex-col gap-6">
            <h1 className="text-[150px]   text-[#9D00FF] font-[agdasima] font-bold ">ARTHUR ROBERTO</h1>
            <p className="text-6xl mt-[-65px] text-[#7C3AED] font-light font-[inter] tracking-wide ">Desenvolvedor Front-End</p>
            <p className="tex text-2xl w-220 text-white">Desenvolvo soluções web responsivas que unem a estética do design moderno 
                com as tecnologias mais atuais do mercado. Crio experiências digitais fluidas 
                e intuitivas, garantindo personalidade em qualquer dispositivo.
            </p>
            <div className='mt-8 flex gap-8'>
            <a href="#download" className="w-62 h-18 rounded-[22px] bg-[#9D00FF] hover:transition hover:scale-110 hover:text-white   hover:bg-[#B85CFF] text-white flex justify-center items-center text-3xl font-medium ">Baixar CV <Download className="ml-2" size={30}/>
            </a>
            <a href="#contato" className="w-62 h-18 rounded-[22px] border-2 border-[#9D00FF] text-white hover:bg-[#9D00FF] hover:transition hover:scale-110 hover:text-white   flex justify-center items-center text-3xl font-medium">Contato <Mail className="ml-2" size={30}/>
            </a>
            </div>
        </div>
        <div className='align-center flex-col justify-center items-center flex'>
            <div className='w-[500px] h-[500px] bg-[#6528C4] rounded-[148px_40px] align-center flex justify-center items-center'>
                <img className='w-[400px] h-[400px]' src={Eu} alt="Ilustração do Arthur Sorrindo com a língua para fora" />
            </div>
            <div className='mt-10  flex justify-center items-center gap-14'>
                <a href='#' className='hover:scale-110 hover:bg-[#9D00FF] hover:text-white transition-transform w-16 h-16 flex align-center justify-center items-center border-4 text-[#9D00FF] rounded-full border-[#9D00FF]'><Github size={30}/> </a>
                <a href='#' className='hover:scale-110 hover:bg-[#9D00FF] hover:text-white transition-transform w-16 h-16 flex align-center justify-center items-center border-4 text-[#9D00FF] rounded-full border-[#9D00FF]'><Linkedin size={30}/> </a>
                <a href='#' className='hover:scale-110 hover:bg-[#9D00FF] hover:text-white transition-transform w-16 h-16 flex align-center justify-center items-center border-4 text-[#9D00FF] rounded-full border-[#9D00FF]'><Mail size={30}/> </a>
            </div>
        </div>

    </section>
    
)
}
export default Home