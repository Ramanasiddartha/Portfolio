import React from 'react'
import Typewriter from "typewriter-effect"


export default function Home(){
    return (
    <div className='Hero' >
      
       <h1> Hi,I am Ramana Siddartha </h1> 
         <h2><Typewriter 

         onInit={(typewriter) => {
         typewriter
         .typeString("Software Developer!")
         .pauseFor(2000)
         .deleteAll()
         .typeString("Designer!")
         .pauseFor(2000)
         .deleteAll()
         .typeString("Tech Enthusiast!")
         .pauseFor(2000)
         .deleteAll()
         .typeString("Gamer!")
         .pauseFor(2000)
         .deleteAll()
         .typeString("Software Developer!")
         .start();
         
         }}
         /> </h2>
    </div>
    )
}
