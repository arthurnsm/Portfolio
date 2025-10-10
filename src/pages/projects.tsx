import ProjectCard from "../components/projectCard";
import { motion } from 'framer-motion';

const fadeVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" as const } },
};
function Projects(){
    return (
        <motion.section
        variants={fadeVariant}
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        id="projects" className="flex flex-col  mt-20 justify-center items-center p-10">
            
            <span className="text-[#8E79D9] font-[inter] text-center font-thin text-4xl md:text-5xl">PROJETOS</span>
            <div className="flex flex-col md:mt-40 mt-20 justify-start gap-60">
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </motion.section>
    );
}

export default Projects;