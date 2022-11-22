import React from 'react'
import portfolio from '../assets/portfolio.jpg'
import angular from  '../assets/angular.png'
import images from '../assets/images.png'
import js from '../assets/js.png'
import reactimg1 from '../assets/reactimg1.png'

export default function About(){
    return (
      <>
      <div className='Aboutblock'>
      
       <h1 class="title">About me</h1>
       </div>

       <div id="main">
  <div className='left'>
  <img src={portfolio} width="300" height="400" alt= " " />
  </div>
  <div className='text'>
 
   Name: Ramana Siddartha<br></br>
   Role: SDE<br></br>
   Email: ramanasiddartha390@gmail.com<br></br>
  
 
  <br></br>
  <p> * I have graduated in 2022 as a Bachelors of Technology(B.Tech) in Computer Science and Engg. from Vignan Institute Of Technology and Science,Hyderabad.</p>
  <p> * Well-organised person,employee with high attention to detail.Fan of cricket,gaming and recently Tv series.A family person therefore remote employement is preferred.Interest in the frontend Spectrum and working on ambitious projects with positive people.</p>
  <div className='Tech'>

  <h2>Technologies</h2>
   <br></br> 
  <img src={angular} width="200" height="200" alt= " "/>
  <img src={js} width="200" height="200" alt= " "/>
  <img src={images} width="200" height="200" alt= " "/>
  <img src={reactimg1} width="200" height="200" alt= " "/>
</div> 
 </div>
 <div class="skill-bars">
    <div class="bar">
      <div class="info">
        <span>HTML</span>
      </div>
      <div class="progress-line html">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>CSS</span>
      </div>
      <div class="progress-line css">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span >C++</span>
      </div>
      <div class="progress-line jquery">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>Python</span>
      </div>
      <div class="progress-line python">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>Java</span>
      </div>
      <div class="progress-line mysql">
        <span></span>
      </div>
    </div>
  </div>  
</div>
 




        </>
    
    )
}
