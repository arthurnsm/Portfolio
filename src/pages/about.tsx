import { motion } from 'framer-motion';
import Stack from '../components/stacks'

const fadeVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
};
function About (){
    return(
        <>
        <motion.section
        variants={fadeVariant}
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
            id="about">
                <div className='text-center mt-20 md:mt-30'>
                    <span className="text-[#8E79D9] font-[inter] font-thin text-4xl md:text-5xl">SOBRE MIM</span>
                </div>
            <div className="flex md:flex-row flex-col justify-center align-center items-center mt-8">
            <div className='flex md:flex-row flex-col justify-center align-center items-center md:mt-20'>
                <div className=''>
                    <motion.div className='md:w-[500px] md:h-[500px] w-[250px] h-[200px] border-2 border-[#390E7C]  md:rounded-[148px_40px] rounded-[80px_20px]  align-center flex justify-center items-center'>
                        <motion.img
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className='                            w-[120px] h-[120px]
                            sm:w-[180px] sm:h-[180px]
                            md:w-[300px] md:h-[300px]
                            lg:w-[400px] lg:h-[400px] ' alt="Ilustração do Arthur Sorrindo com a língua para fora" />
                    </motion.div>

                </div>
                <div className='flex flex-col w-92 md:w-250 md:ml-10 mt-4 px-6 '>
                    <span className='text-white font-[inter] text-center md:text-start md:text-3xl'>
                        Desde muito novo tenho uma paixão inexplicavel por tudo relacionado a <span className='text-[#8b56db]'>tecnologia</span> no geral.
                        Aos 12 anos descobri a <span className='text-[#8b56db]'>programação</span> e fiquei encantado com o universo de possibilidades que existem na área.
                        Com o passar do tempo, descobri também o gosto pelo <span className='text-[#8b56db]'>design</span>. Juntando o útil ao agradável, decidi me dedicar 
                        no <span className='text-[#8b56db]'>desenvolvimento web</span>, especialmente no <span className='text-[#8b56db]'>Front-end</span>, onde posso deixar minha criatividade fluir para criar conceitos
                        únicos e alinhados com os conceitos do <span className='text-[#8b56db]'>design </span> e <span className='text-[#8b56db]'>UI/UX.</span>
                        
                    </span>
                    <div className='flex flex-col gap-8'>
                        <span className='text-[#4002A0] font-regular font-[inter] text-center md:text-[30px] md:text-start mt-8 text-xl'>TECNOLOGIAS QUE USO</span>
                        <div className='flex flex-wrap justify-center md:justify-start pb-10 '>
                            <Stack nome="React"/> 
                            <Stack nome="Angular"/> 
                            <Stack nome="TailwindCSS"/> 
                            <Stack nome="HTML5"/>
                            <Stack nome="Javascript"/>
                            <Stack nome="CSS"/>   
                            <Stack nome="SASS"/>  
                            <Stack nome="Vue.js"/>   
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </motion.section>
        </>
    )
}

export default About