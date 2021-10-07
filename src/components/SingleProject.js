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

    if (!SingleProject) return <div>Loading...</div>
    
    return(
        <main className="container flex justify-center mx-auto py-8">
            <article className="grid w-full">
                <header className="relative">
                    <div className="py-8">
                        <h1 className="font-bold font-title text-xxl my-5">{SingleProject.title}</h1>
                        <a href={SingleProject.link} target="_blank" className="text-orange bold font-mono uppercase">Demo</a>
                        

                    </div>
                </header>
                
                <div className="content flex">
                    <div className="leading-loose mr-4 grid lg:grid-cols-6">
                        <BlockContent 
                        blocks={SingleProject.body} 
                        projectId="b7xqrihy" 
                        dataset="production" 
                        /> 
                    </div>
                    
                    <aside className="grid lg:grid-cols-4">
                        <img className="w-full h-98 object-cover" src={SingleProject.mainImage?.asset.url} />
                </aside>  
                </div>
                
            </article>
        </main>
    )
}