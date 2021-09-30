import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client"

export default function Post() {
    //query for information with react hooks
    const [postData, setPost] = useState(null);
    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "post"]{
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
        .then((data) => setPost(data))
        .catch(console.error)
    }, []);
    
    return (
        <main>
            <section className="container mx-auto">
                <h1>Blog Post page</h1>
                adokgr
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    { postData &&
                     postData.map((post, index) => (
                    <article>
                        <Link to={"/post/"+ post.slug.current} key={post.slug.current}>
                            <span className="block h-64 relative rounded shadow " key={index}>
                                <img src={post.mainImage?.asset.url}/>
                                <span>
                                    <h3>{post.title}</h3>
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