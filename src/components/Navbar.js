import React from 'react'
import RamanaSiddarthaResume from '../assets/RamanaSiddarthaResume.pdf'
import {Link} from "react-router-dom"
export default function Navbar(){
    return (
     <nav className="nav">
        <a href ="/" className="site-title">
          Ramana Siddartha
        </a>
        <ul>
            <li ><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          <a className='Resbtn' href={RamanaSiddarthaResume}  target="_blank" rel="noopener noreferrer"> Resume</a>
        </ul>
     </nav>
    )
}
