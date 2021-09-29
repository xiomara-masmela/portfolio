import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800" activeClassName="text-white" to="/" exact> 
                        Home
                    </NavLink>
                    <NavLink to="/about" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800">
                        About
                    </NavLink>
                    <NavLink to="/project" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800">
                        Project
                    </NavLink>
                    <NavLink to="/post" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800">
                        Post
                    </NavLink>
                    
                </nav>
                <div className=" inline-flex py-3 px-3">
                    <SocialIcon url="https://www.linkedin.com/in/xiomara-masmela/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width:35}} />

                </div>

            </div>
            
        </header>
    )
}