import React from "react";

export const Intro = (props) => {
    return (
        <section className="h-screen flex flex-col justify-evenly pt-20">
            <img src={props.meIntro} alt="Developer" className="2xl:absolute 2xl:w-full -z-50 top-0 max-w-full"></img>
            <article className="fade-in -z-50 w-4/5 max-w-7xl mx-auto py-10 flex flex-col gap-4 2xl:bg-black/60 2xl:absolute  2xl:bottom-0 2xl:text-white 2xl:w-full 2xl:max-w-full flex gap-3 2xl:text-center">
                <h1 className="slide-text text-4xl 2xl:text-6xl tracking-widest">Christopher J. Pohl</h1>
                <div className="slide-text text-2xl 2xl:text-4xl font-light flex flex-col gap-3 tracking-wider">
                        <h2>Fullstack Web Developer</h2>
                        <h2>Hardworking Human</h2>
                        <p>New York</p>
                </div>
            </article>
        </section>
    )
}