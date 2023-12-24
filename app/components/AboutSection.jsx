"use client";

import React, {useTransition,useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import Link from 'next/link';

const TAB_DAATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li className='font-semibold mb-1'>PROGRAMMING LANGUAGES: <span className='font-normal'>C++, JavaScript, Python.</span></li>
    
                <li className='font-semibold mb-1'>FRONTEND TOOLS: <span className='font-normal'>HTML,CSS,React.js,Next.js,Ajax,
                          Bootstrap,TailwindCss,Babel,jQuery.</span></li>
                <li className='font-semibold mb-1'>BACKEND TOOLS: <span className='font-normal'>Node.js, Express.js,RESTful API.</span></li>
                <li className='font-semibold mb-1'>CORE SUBJECTS: <span className='font-normal'>Operating System,OOPs,
Computer Network,DSA.</span></li>
                <li className='font-semibold mb-1'>DATABASES: <span className='font-normal'>MySql,SQL,MongoDB.</span></li>
                <li className='font-semibold mb-1'>VERSION CONTROL AND OTHERS: <span className='font-normal'>Git,Github,Analytical Problem Solving.</span></li>
              
            </ul>
        )
    },
    {
    
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>
                    <h3>JABALPUR ENGINEERING
COLLEGE (MP)</h3>
              <p className='font-bold'>BTECH in COMPUTER SCIENCE AND ENGINEERING.</p>
              <p className='text-xs'>2019‐2023</p>
              <p className='text-xs'>CGPA : 7.68 {"{DSA,OOPs,DBMS,OS}"}</p>
                </li>
              <br/>
                <li>
                    <h3>TIBETAN CHILDREN VILLAGE SCHOOL BYLAKUPPE (KARNATAKA)</h3>
              <p className='font-bold'>Class 12 SCIENCE(CBSE)</p>
              <p className='text-xs'>2018‐2019</p>
              <p className='text-xs'>Percentage: 80% {"{C++,SQL}"}</p>
                </li>
              <br/>
                <li>
                    <h3>TIBETAN CHILDREN VILLAGE SCHOOL CHAUNTRA (HP)</h3>
              <p className='font-bold'>Class 10 (CBSE)</p>
              <p className='text-xs'>2015‐2016</p>
              <p className='text-xs'>CGPA : 7 {"{HTML}"}</p>
                </li>
         
          
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li><h3>Web Developer(Intern) | Ritual Softech</h3>
                <p className='text-xs mb-2'>Oct-2023-Now</p>
                
                <p >
                    <ol >
                        <li className='text-sm mb-1'>- Led the development of a professional website for
Arowaana Company, demonstrating proficiency
in HTML, CSS, JavaScript and React.js.</li>
                               <li className='text-sm mb-1'>- Collaborated closely with Arowaana stakeholders to
understand and meet business and brand requirements.</li>
                               <li className='text-sm '>- Delivered a responsive and visually engaging website.</li>
                               
                    </ol>
                </p>
                </li>
                
            </ul>
        )
    },
    {
        title: "Certificate",
        id: "certificate",
        content: (
            <ul className='list-disc pl-2'>
                <li><h3 className='font-semibold mb-2'>Programming in Python(Internshala)</h3>
                
                <p className='mb-2' >
                - The below link is my Python Certificate from Internshala
                </p>
                <Link className='ml-3  text-blue-600 ' href="https://trainings.internshala.com/view_certificate/4AE60E91-23EC-50E3-1139-6E54AB786751/8F7FEA4A-1B7E-548E-FC6D-318FC4DE205C/">
               Click here
                </Link>
                </li>
                <li><h3 className='font-semibold mb-2 mt-3'>Full Stack Web Developer</h3>
                
                <p className='mb-2' >
                - Certified Full Stack Web Developer skilled in frontend and backend technologies. 
                </p>
                <p className='mb-2' >
                - Proficient in HTML, CSS, JavaScript, Node.js, and database management.
                </p>
            
                </li>
                
            </ul>
        )
    }
]

const AboutSection = () => {
 const [tab, setTab] = useState("skills");
 const [isPending,startTransition ] = useTransition();

 const handleTabChange = (id) =>{
    startTransition(()=>{
        setTab(id);
    });
 };

  return (
   <section  id="about" className='mt-7 md:mt-7 text-white'> 
    <div className='md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center
    py-8 px-4 sm:py-16 xl:px-16 '>
    <Image 
        src="/images/webdesk.jpg"
        alt='web desk'
        width={400}
        height={400}
        className='z-10'
    />
    <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
        <h2 className='text-3xl sm:text-3xl lg:text-4xl  font-bold mb-4 text-white'>About Me</h2>
        <p className='text-base lg:text-lg'>
        I am a versatile full-stack web developer proficient in C++, JavaScript, and Python, with expertise in web development tools. I also have a keen interest in embedded engineering. My skills extend to core computer science subjects, databases, and version control. Eager to contribute to both web and embedded projects, I bring adaptability and a passion for innovative solutions.
        </p>
        <div className='flex flex-row mt-8'>
        <TabButton
        selectTab={()=>handleTabChange("skills")}
        active={tab==="skills"}
        >
         {" "}
         skills{" "}
         </TabButton>
        <TabButton
        selectTab={()=>handleTabChange("education")}
        active={tab==="education"}
        >
         {" "}
         Education{" "}
          </TabButton>
        <TabButton
        selectTab={()=>handleTabChange("experience")}
        active={tab==="experience"}
        >
         {" "}
         Experience{" "}
          </TabButton>
        <TabButton
        selectTab={()=>handleTabChange("certificate")}
        active={tab==="certificate"}
        >
         {" "}
         Certificate{" "}
          </TabButton>
     
        
        </div>
   
    <div className='mt-8'>{
     TAB_DAATA.find((t)=>t.id===tab).content   
    }</div>

    </div>
    </div>
   </section>
  )
}

export default AboutSection