import React from "react";

export const Music = () => {
    return (
        <section id="music" className="w-4/5 max-w-7xl mx-auto py-20 flex flex-col items-center gap-10">
            <div className="flex flex-col items-center text-center gap-5">
                    <h2 className="text-3xl 2xl:text-4xl tracking-wider">Other Passions</h2>
                    <div className="flex flex-col gap-5">
                        <p className="text-xl 2xl:text-2xl font-light leading-8">If I didn't speak of my background in music and the arts I'd be doing myself a disservice.  Here are a few pieces of music I worked on as a musician including my released EP in 2020 and a piece for full orchestra recorded in London.</p>
                        <p className="text-xl 2xl:text-2xl font-light leading-8">No matter what it is, part of the human experience is expressing one's self. Thus, my core of being a developer is fueled by my passion for creativity while in a long, marthon of the pursuit for knowledge.</p>
                    </div>
                      
            </div>
            <iframe className="bg-green-600 p-2 rounded-xl shadow-lg max-w-3xl shadow-xl" title="CJP-EP" src="https://open.spotify.com/embed/album/2bJ0ko1d2uRCKE9AnUSPzM?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <iframe className="bg-green-600 p-2 rounded-xl shadow-lg max-w-3xl shadow-xl" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/646634634&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </section>
    )
}