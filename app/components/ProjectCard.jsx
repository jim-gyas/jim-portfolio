import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
const ProjectCard = ({imgUrl,title,description, gitUrl, previewUrl}) => {
  return (
    <div  >
    <div className='z-10 h-52 md:h-72 rounded-t-xl relative group' style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>

   
<div className='z-10 flex items-center justify-center overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500' >

    <Link href={gitUrl} className='mr-3 h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
          <CodeBracketIcon className='  h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer group-hover/link:text-white'/>
    </Link>
    <Link href={previewUrl} className=' h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
          <EyeIcon className='transform left-1/2 h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer group-hover/link:text-white'/>
    </Link>
</div>

    </div>

   <div className='text-white mb-6 sm:mb-0 rounded-b-xl bg-[#181818] py-6 px-4'>
        <h5 className='text-xl  mt-3  font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
    </div>
    
    </div>
   
  
    )
}

export default ProjectCard