"use client";
import React,{useState} from 'react'
import GithubIcon from '../../public/images/github-icon.svg';
import LinkedinIcon from '../../public/images/linkedin-icon.svg';
import Link from "next/link";
import Image from "next/image";


const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";
  
     
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };
  
      const response = await fetch(endpoint, options);
      const resData = await response.json();
     console.log(resData);
      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    };
  


    return (
   <section id='contact' className='grid md:grid-cols-2 md:my-12 py-24 gap-4 relative'>
         <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-60 transform -translate-x-1/2 -translate-1/2"></div>

            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>
                    Let&apos;s Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    As I embark on the journey of exploring new opportunities, my inbox is warmly open for any inquiries or simply a friendly hello. Feel free to reach out, and I&apos;ll do my best to respond promptly. For immediate assistance, you can also connect with me via phone at <span className='font-semibold'>6360717591</span>  or drop me an email at <span className='font-semibold'>jackandthebean1234@gmail.com</span>. Excited to connect!
                </p>
                <div className='social flex flex-row gap-2'>
                      <Link href="https://github.com/jim-gyas">
                        <Image src={GithubIcon} alt='Github Icon'/>
                      </Link>
                      <Link href="https://www.linkedin.com/in/jimpa-gyatso-46317b210/">
                        <Image src={LinkedinIcon} alt='Linkedin Icon'/>
                      </Link>
                </div>
            </div>
            <div>
            <form className="z-10 flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6 z-10">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="z-10 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jackandthebean1234@gmail.com"
              />
            </div>
            <div className="mb-6 z-10">
              <label
                htmlFor="subject"
                className="z-10 text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your purpose"
              />
            </div>
            <div className="mb-6 z-10">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="z-10 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              className="z-10 bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {
                emailSubmitted && (
                    <p className='text-green-500 text-sm mt-2'>
                        Email sent successfully!
                    </p>
                )
            }
          </form>
            </div>
   </section>
  )
}

export default EmailSection