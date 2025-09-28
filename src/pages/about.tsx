import { motion } from 'motion/react'
import Stack from '../components/stacks'
function About (){
    return(
        <>
            <section id="about" className="text-center md: mt-30">
                <span className="text-[#8E79D9] font-[inter] font-thin text-5xl">SOBRE MIM</span>
            </section>
            <div className="flex flex-row">
            <div className='flex flex-row md:mt-52'>
                <div className=''>
                    <motion.div className='md:w-[500px] md:h-[500px] w-[250px] h-[200px] border-2 border-[#390E7C]  md:rounded-[148px_40px] rounded-[80px_20px]  align-center flex justify-center items-center'>
                        <motion.img
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className=' md:w-[400px] md:h-[400px] w-[150px] h-[150px]' alt="Ilustração do Arthur Sorrindo com a língua para fora" />
                    </motion.div>

                </div>
                <div className='flex flex-col md:w-250 ml-10 mt-4 justify-around '>
                    <span className='text-white font-[inter]  text-3xl'>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and it to 
                        make a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting,
                    </span>
                    <div className='flex flex-col gap-8'>
                        <span className='text-[#4002A0] font-regular text-[30px] font-[inter]   text-xl'>TECNOLOGIAS QUE USO</span>
                        <div className='flex flex-row gap-10 pb-10 '>
                            <Stack nome="React"/> 
                            <Stack nome="Angular"/> 
                            <Stack nome="TailwindCSS"/> 
                            <Stack nome="HTML5"/>
                            <Stack nome="Javascript"/>
                            <Stack nome="CSS"/>   
                            <Stack nome="SASS"/>   
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default About