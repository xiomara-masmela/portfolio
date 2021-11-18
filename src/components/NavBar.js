import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import logo from "../assets/logo.png"

export default function NavBar() {
    return (
        <header >
            <div className="container mx-auto flex justify-end mt-4">
            <div>
                    <SocialIcon url="https://www.linkedin.com/in/xiomara-masmela/" className="mr-4" target="_blank" rel="noreferrer" fgColor="transparent" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/xiomara-masmela" className="mr-4" target="_blank" rel="noreferrer" fgColor="transparent" style={{height: 35, width: 35}} />
                    <SocialIcon url="mailto:xiomara.masmela@gmail.com" className="mr-4" target="_blank" rel="noreferrer" fgColor="transparent" bgColor="#F28F6B" style={{height: 35, width: 35}} />
                </div>
            </div>
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                <NavLink className="inflex-flex items-center py-4 px-3 mr-4 text-black hover:text-red-500"  to="/" exact> 
                        <img src={logo} className="w-20 h-20 object-cover" alt="logo" />
                </NavLink>
                    
                </div>
                <nav className="flex items-center justify-between p-6">
                    <NavLink to="/about" className="inflex-flex items-center py-4 px-3 mr-4 text-black-600 hover:text-pink transition-all delay-75 ">
                        About
                    </NavLink>
                    <NavLink to="/project" className="inflex-flex items-center py-4 px-3 mr-4 text-black-600 hover:text-pink transition-all delay-75 ">
                        Projects
                    </NavLink>
                    
                    
                </nav>
                
                
            </div>
        </header>
    )
}