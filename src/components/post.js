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
        <main className="h-screen">
            <section className="container mx-auto">
            <h1 className="text-center font-title  text-xxl uppercase bold my-8 ">Blog</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2 pt-6">
                    { postData &&
                     postData.map((post, index) => (
                    <article>
                        <Link to={"/post/"+ post.slug.current} key={post.slug.current}>
                            <span className="block h-64 relative" key={index}>
                                <img width='405' height='384' className="h-96 object-cover w-full rounded-2xl" src={post.mainImage?.asset.url} alt={post.title} />
                                <h3 className="font-mono text-lg my-2 text-red font-semibold hover:text-black transition-all delay-75">{post.title}</h3>
                            </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    );
}