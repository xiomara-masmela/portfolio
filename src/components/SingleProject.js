import React, {useEffect, useState} from "react"
import sanityClient from "../client"
import { useParams } from "react-router-dom"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SingleProject() {
    const [SingleProject, setSingleProject] = useState(null)
    const {slug } = useParams();
    
    useEffect(() => {
        sanityClient.fetch(
            `
            *[slug.current == "${slug}"] {
                title,
                _id,
                slug,
                mainImage{
                    asset-> {
                        _id,
                        url
                    }
                },
                body,
                "name": author -> name,
                "authorImage": author -> image,
                link
            }`
            )
            .then((data) => setSingleProject(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!SingleProject) return (
        <main className="container flex justify-center mx-auto py-8">
            <p>Loading...</p>
        </main>
    )
    
    return(
        <main className="container flex justify-center mx-auto pt-10 pb-60">
            <article className="grid w-4/5">
                <header className="relative bg-pink">
                    <div className="py-8">
                        <h1 className="text-center font-bold font-title text-xxl my-5">{SingleProject.title}</h1>
                        
                    </div>
                </header>
                
                <div className="content w-3/5 mx-auto mt-4 pt-10">
                    <div className="leading-loose mr-4">
                    <a href={SingleProject.link} target="_blank" className="text-orange bold font-mono uppercase text-red hover:text-black transition-all delay-75">Demo</a>
                        <BlockContent 
                        blocks={SingleProject.body} 
                        projectId="b7xqrihy" 
                        dataset="production" 
                        /> 
                </div>
                    
                    <aside className="">
                        <img className="w-84 h-98 object-cover" src={SingleProject.mainImage?.asset.url} alt={SingleProject.title}/>
                    </aside> 
                     
                </div>
                
            </article>
        </main>
    )
}