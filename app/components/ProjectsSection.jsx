"use client";
import React, {useState,useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {motion, useInView} from 'framer-motion';

const projectsData = [{
    id:1,
    title:"Aarowana Website",
    description:"Led the development of Arowaana Company's website, excelling in HTML, CSS, and JavaScript. Collaborated with stakeholders, ensuring the site met business and brand needs, resulting in a responsive and visually appealing outcome.",
    image:"./images/project1.png",
    tag: ["All","Web"],
    gitUrl:"https://github.com/jim-gyas/Aarowana-Website",
    previewUrl:"http://arowana.uk/"   
},
{
    id:2,
    title:"Dashboard React App",
    description:"Developed a React-based dashboard with Syncfusion controls for enriched data visualization. Enhanced UI design for a more user-friendly experience. Collaborated with the team to seamlessly integrate advanced UI components.",
    image:"./images/project2.png",
    tag: ["All","Web"],
    gitUrl:"https://github.com/jim-gyas/Dashboard-React-app",
    previewUrl:"https://tinshop.netlify.app/"
},
{
    id:3,
    title:"Thread Next.js 13 App",
    description:"Developed a social networking app with Next.js, React, and Node.js, utilizing MongoDB for backend storage. Integrated Clerk for authentication and messaging, optimizing performance with shadcn. Enhanced functionality for a seamless user experience.",
    image:"./images/project3.png",
    tag: ["All","Web"],
    gitUrl:"https://github.com/jim-gyas/Thread-Application",
    previewUrl:"https://github.com/jim-gyas/Thread-Application"
},
{
    id:4,
    title:"Sorting Visualizer",
    description:"Built a Sorting Visualizer in C++ with SDL2, featuring popular sorting algorithms like Insertion, Selection, Bubble, Merge, Quick, and Heap Sort. Provides a hands-on experience to understand and compare algorithm efficiency.",
    image:"./images/project4.png",
    tag: ["All"],
    gitUrl:"https://github.com/jim-gyas/Sorting-visualizer-using-C-and-SDL2",
    previewUrl:"./images/main.exe"
},
{
    id:5,
    title:"E-commerce Website ",
    description:"Developed an advanced E-commerce Website with Django, a responsive design, user registration /authentication, a shopping cart, and a secure checkout process with integrated payment gateways for enhanced user experience and functionality.",
    image:"./images/project5.png",
    tag: ["All","Web"],
    gitUrl:"https://github.com/jim-gyas/E-commerce-Website-Using-advance-Django",
    previewUrl:"https://github.com/jim-gyas/E-commerce-Website-Using-advance-Django"
}

]


const ProjectsSection = () => {
 const [tag,setTag] = useState("All");
 const ref = useRef(null);
 const isInView = useInView(ref, {once: true});


 const handleTagName= (newTag) => {
  setTag(newTag);
 }
 const filteredProjects = projectsData.filter((project)=>

  project.tag.includes(tag)
 );

const cardVariants = {
  initial:{y:50, opacity: 0},
  animate:{y:0, opacity: 1},
};

 return (
   <section>
      <h2  id='projects' className='text-center ml-4 lg:ml-0 text-3xl sm:text-3xl lg:text-4xl font-bold text-white mt-4 mb-6 md:mb-10'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center
      gap-2 py-6'> 
    <ProjectTag onClick={handleTagName}
      name ="All"
      isSelected={tag==="All"}
    />
    <ProjectTag onClick={handleTagName}
      name ="Web"
      isSelected={tag==="Web"}
    />

      </div>
      <ul ref={ref} className=' text-white  md:grid md:grid-cols-3 gap-6 justify-center items-center gap-2 py-6 '>
        {filteredProjects.map((project,index) => 
        <motion.li
        key={index}
        className='z-10'
         variants={cardVariants} initial="initial" animate={isInView? "animate":"initial"}
         transition={{duration: 0.3, delay: index*0.4}}
        >

        <ProjectCard key={project.id} title={project.title}  description={project.description} imgUrl={project.image}
         tag={project}   gitUrl={project.gitUrl} previewUrl={project.previewUrl}
        />
        </motion.li>
        )}
      </ul>
   </section>
  )
}

export default ProjectsSection;