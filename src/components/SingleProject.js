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
                "authorImage": author -> image
            }`
            )
            .then((data) => setSingleProject(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!SingleProject) return <div>Loading...</div>
    
    return(
        <main>
            <article>
                <header>
                    <div>
                        <h1>{SingleProject.title}</h1>
                        <div>
                            <img src={urlFor(SingleProject?.authorImage).url()} alt={SingleProject.name} />
                            <p>{SingleProject.name}</p>
                        </div>
                    </div>
                </header>
                <div>
                    <img src={SingleProject.mainImage?.asset.url} />
                </div>
                <div>
                    <BlockContent 
                    blocks={SingleProject.body} 
                    projectId="b7xqrihy" 
                    dataset="production" 
                    />   
                </div>
            </article>
        </main>
    )
}