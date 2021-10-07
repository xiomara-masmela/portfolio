import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function Footer() {
    return (
        <Footer className="container mx-auto" >
            <div className="flex justify-between items-center">
                <div className="logo">
                    <img src=""/>logo
                </div>
                <nav className="flex items-center justify-between p-6">
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


            </div>
            
        </Footer>
    )
}