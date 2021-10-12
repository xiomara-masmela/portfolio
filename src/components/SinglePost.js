import React, {useEffect, useState} from "react"
import sanityClient from "../client"
import { useParams } from "react-router-dom"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null)
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
            .then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>
    
    return(
        <main className="container flex justify-center mx-auto py-8">
            <article className="grid w-full">
                <header className="relative">
                    <div className="py-8" >
                        <h1 className="font-bold font-title text-xxl my-5">{singlePost.title}</h1>
                        <div className="flex items-center gap-x-10">
                            <p className="bold font-mono text-lg">{singlePost.name}</p>
                            <img className="w-32 h-32 rounded-full" src={urlFor(singlePost?.authorImage).url()} alt={singlePost.name} />
                            
                        </div>
                    </div>
                </header>
                <div className="content flex justify-between">
                    <div className="leading-loose mr-4 w-2/4">
                        <BlockContent 
                        blocks={singlePost.body} 
                        projectId="b7xqrihy" 
                        dataset="production" 
                        />   
                    </div>
                    <aside className="w-2/6">
                        <img className="w-full h-auto object-cover" src={singlePost.mainImage?.asset.url} alt={singlePost.title}/>
                    </aside>
                </div>   
            </article>
        </main>
    )
}