import React from "react"

export default function Home() {
    return (
        <main className="container mx-auto home relative min-h-screen" >
            <section className="relative flex justify-between h-full bg-pink ">
                <div className="grid-cols-8 px-8 py-8 flex justify-center flex-col w-full relative border-0 ">
                    <h1 className=" text-center title-home text-xxl bold uppercase font-title">Hola! <br></br>I'm Xiomara</h1>
                    <p className=" text-center text-lg uppercase font-mono">Software Engineer</p>
                </div>
            </section>
        </main>
        
    )
}