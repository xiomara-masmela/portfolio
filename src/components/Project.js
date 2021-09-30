import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client"

export default function Project() {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "project"]{
            title,
            slug,
            mainImage {
                asset-> {
                    _id,
                    url
                }
            }
        }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error)
    }, []);
    return (
    <main>
        <section className="container mx-auto">
            <h1>Projects baby</h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                { projectData &&
                projectData.map((project, index) => (
                <article>
                    <Link to={"/post"+ project.slug.current} key={project.slug.current}>
                        <span className="block h-64 relative rounded shadow " key={index}>
                            <img src={project.mainImage?.asset.url}/>
                            <span>
                                <h3>{project.title}</h3>
                            </span>
                        </span>
                    </Link>
                </article>
                ))}
            </div>
        </section>
    </main>
    );
}