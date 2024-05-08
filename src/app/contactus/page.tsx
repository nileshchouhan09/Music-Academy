"use client";
import React, { FormEvent, useState } from "react";
import { Meteors } from "@/Components/ui/meteors";
function page() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");


  const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("submitted",{email,message})

  }
  return (
    <div className="">
      <div className=" w-full relative h-screen">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start">
        
        <div className="max-w-2xl mx-auto p-4 relative z-10">
        {' '}
       
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>


      <form onSubmit={submitHandler} className="space-y-5 mt-4">
        <input type="email"
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-500"
        />
        <input type="textarea"
        value={message} 
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="Your Message"
        required
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-500"
        />
        <button type="submit" className="px-6 py-2 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
          Send Message
        </button>

      </form>
</div>
          

          <Meteors number={25} />
        </div>
      </div>
    </div>
  );
}

export default page;
