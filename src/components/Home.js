import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client"

export default function Home() {
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
        <main className="container mx-auto home relative min-h-screen" >
            <section className="relative flex justify-between h-full bg-pink transition-all backdrop-filter backdrop-hue-rotate-15 ">
                <div className="grid-cols-8 px-8 py-8 flex justify-center flex-col w-full relative border-0 ">
                    <h1 className=" text-center title-home text-xxl bold uppercase font-title">Hi! <br></br>I'm Xiomara</h1>
                    <p className=" text-center text-sm uppercase font-mono">Software Engineer</p>
                </div>
            </section>
            <section className="pb-11">
                <div className="grid md:grid-cols-2  lg:grid-cols-3  gap-8 mt-2 pt-6">
                    { projectData &&
                    projectData.map((project, index) => (
                    <article>
                        <Link to={"/project/"+ project.slug.current} key={project.slug.current}>
                            <span className="block h-auto relative " key={index}>
                                <img width='405' height='384' className="h-96 object-cover w-full rounded-2xl" src={project.mainImage?.asset.url} alt={project.title} />
                                <h3 className="font-mono text-lg my-2 text-pink font-semibold hover:text-black transition-all delay-75 ">{project.title}</h3>
                                <p className="bg-orange py-3 px-5 rounded-lg w-auto inline-block font-mono uppercase  ">{project.tags}</p>
                            </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
        
    )
}