import React from "react";

export const About = () => {
    return (
        <section id='about' className="bg-green-600">
            <article className="w-4/5 max-w-7xl mx-auto flex flex-col items-center gap-10 text-center py-40 text-white">
                <h2 className="text-3xl 2xl:text-5xl font-bold tracking-wider">It's a pleasure to meet you.</h2>
                <p className="text-xl 2xl:text-3xl font-light leading-10">Since beginning my journey to become the engineer I've always wanted to be, I've created many meaningful projects based upon my received tasks and life interests.  I find myself humble but confident, naturally a tinkerer, and a master of googling and finding answers to life's questions on Stack Overflow.</p>
            </article>
        </section>
    )
}