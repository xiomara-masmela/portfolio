import React, {useEffect, useState} from "react"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "../client"
import imageUrlBuilder from "@sanity/image-url"


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data)=> setAuthor(data[0]))
        .catch(console.error);
    }, []);
    if (!author) return (
        <main className="container flex justify-center mx-auto py-8">
            <p>Loading...</p>
        </main>
    )
    return (
        <main className="container flex justify-center mx-auto pt-10 pb-60 gap-20">
            <section className="bg-pink flex  flex-col justify-center">
                <h1 className=" text-center text-xxl font-title uppercase bold my-8 ">Hey There!</h1>
            </section>
            <section className="w-4/5 relative">
                <div className="absolute right-1/4">
                    <img className="w-32 h-32 rounded-full " src={urlFor(author.authorImage).url()} alt={author.name} />
                </div>
                <div className="w-4/5 pt-36">
                    <BlockContent 
                        blocks={author.bio} 
                        projectId="b7xqrihy" 
                        dataset="production" 
                    /> 
                </div>
                
            </section>
            
        </main>
    )
}