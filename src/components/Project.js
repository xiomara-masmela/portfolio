import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client"

export default function Project() {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "project"]{
            id,
            title,
            slug,
            tags,
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
    <main className="h-screen">
        <section className="container mx-auto">
            <h1 className="text-center font-title  text-xxl uppercase bold my-8 ">Projects</h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 mt-2 pt-6">
                { projectData &&
                projectData.map((project, index) => (
                <article>
                    
                    <Link to={"/project/"+ project.slug.current} key={project.slug.current}>
                        <span className="block h-auto relative " key={index}>
                            <img width='405' height='384' className="h-96 object-cover w-full rounded-2xl" src={project.mainImage?.asset.url} alt={project.title} />
                            <h3 className="font-mono text-lg my-2 text-pink font-semibold hover:text-black transition-all delay-75 ">{project.title}</h3>
                            <p className="bg-orange py-3 px-5 rounded-lg w-auto inline-block font-mono uppercase text-sm  ">{project.tags}</p>
                            
                            
                        </span>
                    </Link>
                </article>
                ))}
            </div>
        </section>
    </main>
    );
}