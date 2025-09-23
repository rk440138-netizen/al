import React from 'react'

export default function Home() {
  return (
<div className="h-135 bg-gray-500 flex flex-col items-center justify-cente">
        <img src="/profilepic.jpg" alt="Profile"

          className="w-48 h-48 mt-2.5 rounded-full object-cover shadow-md mb-4"
        />
        <div className="text-center ">
        <h2 className="text-2xl text-center font-bold ">ROHIT KASHYAP</h2>
        <h3 className="text-lg font-semibold mt-1 text-center mb-1">A Bit About Me</h3>
        <p className="text-gray-800 mt-3 max-w-2xl">
          I am a graduate student at Tel Aviv University Astrophysics Department. 
          I’m mostly working on active galactic nuclei and their role in galaxy 
          evolution and on machine learning algorithms and their application to 
          astronomical datasets Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ipsa laboriosam culpa temporibus. Doloribus ratione laborum perspiciatis soluta, velit, repellat, magni nulla adipisci eum omnis ab fugiat placeat minima aspernatur.
        </p>
        </div>
       
    </div>
  )
}
