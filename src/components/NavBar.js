import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="" >
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                <NavLink className="inflex-flex items-center py-6 px-3 mr-4 text-black" activeClassName="text-white" to="/" exact> 
                        Home
                    </NavLink>
                    
                </div>
                <nav className="flex items-center justify-between p-6">
                    
                    <NavLink to="/about" className="inflex-flex items-center py-6 px-3 mr-4 text-black-600 hover:text-green-800">
                        About me
                    </NavLink>
                    <NavLink to="/project" className="inflex-flex items-center py-6 px-3 mr-4 text-black-600 hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink to="/post" className="inflex-flex items-center py-6 px-3 mr-4 text-black-600 hover:text-green-800">
                        Blog
                    </NavLink>
                    <NavLink to="/post" className="inflex-flex items-center py-6 px-3 mr-4 text-black-600 hover:text-green-800">
                        Contact me
                    </NavLink>
                    
                </nav>


            </div>
            
        </header>
    )
}