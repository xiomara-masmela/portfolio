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
        <main>
            <article>
                <header>
                    <div>
                        <h1>{singlePost.title}</h1>
                        <div>
                            <img src={urlFor(singlePost?.authorImage).url()} alt={singlePost.name} />
                            <p>{singlePost.name}</p>
                        </div>
                    </div>
                </header>
                <div>
                    <img src={singlePost.mainImage.asset.url} />
                </div>
                <div>
                    <BlockContent 
                    blocks={singlePost.body} 
                    projectId="b7xqrihy" 
                    dataset="production" 
                    />   
                </div>
            </article>
        </main>
    )
}