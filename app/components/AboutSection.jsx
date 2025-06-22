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
                <li className='font-semibold mb-1'>PROGRAMMING & DATA TOOLS: <span className='font-normal'>Python, SQL, Bash, Git, GitHub, REST APIs, MySQL.</span></li>
    
                <li className='font-semibold mb-1'>Data Analysis & Visualization: <span className='font-normal'>Excel,Pandas, NumPy, Matplotlib, Power BI(DAX), Tableau.</span></li>
                <li className='font-semibold mb-1'>Data Engineering & Processing: <span className='font-normal'>ETL Pipelines, Data Cleaning, Deduplication, Web Scraping, Query Optimization, Hugging Face</span></li>
                <li className='font-semibold mb-1'>Reporting \& Collaboration: <span className='font-normal'>Dashboard design, data validation, Git workflows, pull requests, documentation.</span></li>
                <li className='font-semibold mb-1'>Cloud & DevOps: <span className='font-normal'>AWS (EC2, S3), Docker, basic Linux</span></li>
              
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
              <p className='text-xs'>CGPA : 7.7{"{DSA,OOPs,DBMS,OS}"}</p>
              <p className='font-bold'>Course Work: <span className='text-xs'>Data Analytics, Machine Learning, Artificial Intelligence, DBMS, Data Structures, Python
Programming, SQL</span></p>
                </li>         
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li><h3>Data Engineer| Monlam Tibetan IT Research Organization</h3>
                <p className='text-xs mb-2'>June 2024 - April 2025</p>
                
                <p >
                    <ol >
                        <li className='text-sm mb-1'>- Built and maintained ETL pipelines, cleaned and prepared linguistic data for OCR and speech models, sourcing and storing datasets using Hugging Face Hub.</li>
                               <li className='text-sm mb-1'>- Generated 500+ hours of speech-text paired data to support Wav2Vec fine-tuning, contributing to reducing Character Error Rate from 30% to 15%.</li>
                               <li className='text-sm mb-1'>- Performed web scraping, data augmentation for OCR, and tracked model performance with Matplotlib; managed documentation and business rules.</li>
                               <li className='text-sm mb-1'>- Used Git/GitHub for version control and collaboration; maintained MySQL databases and deployed workflows on AWS and Vast.ai for scalable training.</li>
                               
                    </ol>
                </p>
                </li>
                <br/>
                <li><h3>Associate Software Engineer | Syncmonk Pvt. Ltd</h3>
                <p className='text-xs mb-2'>June 2024 - April 2024</p>
                
                <p >
                    <ol >
                        <li className='text-sm mb-1'>- Built Fisheye using grafana for monitoring and visualization.</li>
                               <li className='text-sm mb-1'>- Integrated Grafana with MongoDB via PyMongo and REST APIs.</li>
                               <li className='text-sm mb-1'>- Monitored time sync using Linux PTP and SNMP protocols.</li>
                               <li className='text-sm mb-1'>-Documented workflows and contributed to clean, modular codebases.</li>
                               
                    </ol>
                </p>
                </li>
                <br/>
                <li><h3>Frontend Developer (Freelance) | Ritual Softech</h3>
                <p className='text-xs mb-2'>Oct 2023 - Dec 2023</p>
                
                <p >
                    <ol >
                        <li className='text-sm mb-1'>- Developed responsive web applications using HTML, CSS, JavaScript, and React.js.</li>
                               <li className='text-sm mb-1'>- Applied media queries and Bootstrap for mobile-friendly design.</li>
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
        I am a detail-oriented Data Engineer with a strong foundation in data analysis, automation, and dashboarding. Proficient in Python, SQL, Git, Power BI, and Tableau, I specialize in building ETL pipelines, transforming large datasets, and generating insights from structured and unstructured data. With a focus on scalable solutions and clean documentation, I thrive in collaborative environments and data-driven projects.
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