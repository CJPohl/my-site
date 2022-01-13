import React from "react";

import atomicLogo from '../media/logos/atomic-blog.png'
import myst from '../media/logos/myst.png'
import battleship from '../media/logos/battleship.png'
import pickupArtists from '../media/logos/pickup-artists.png'

export const Projects = () => {
    return (
        <section id="projects">
            <div className="py-20 w-4/5 max-w-7xl mx-auto flex flex-col gap-10">
                <div className="flex flex-col items-center text-center gap-5">
                    <h2 className="text-3xl 2xl:text-5xl tracking-wider">Discover My Work</h2>
                    <p className="text-xl 2xl:text-2xl font-light leading-8">Here are a few projects that I've worked on recently.  Hover for more info!</p>   
                </div>
                <div className=" grid grid-row-4 lg:grid-row-2 lg:grid-cols-2 gap-4">
                    <div className="relative project-container flex  justify-center">
                        <img className="rounded-xl border-2 border-black/20" src={atomicLogo} alt='Atomic Blog'></img>
                        <div className="absolute w-full top-0 bottom-0 p-8 bg-green-900 rounded-xl flex flex-col items-center justify-center 2xl:gap-10 project-desc">
                            <p className="text-sm 2xl:text-2xl text-center text-white leading-7 tracking-wider fade-in-quick">A modern Blogging website with full featured admin access.</p>
                            <a href="https://atomic-blog.netlify.app/" target="_blank" rel="noreferrer" className="flex items-center justify-center py-1 px-5 border-2 border-green-600 rounded-full transition ease-in-out hover:bg-green-600">
                                <p className="text-lg text-white tracking-wider">View Site</p>
                            </a>
                        </div>
                    </div>
                    <div className="relative project-container flex justify-center" href="#" target="_blank" rel="noreferrer">
                        <img className="rounded-xl border-2 border-black/20" src={myst} alt="Myst"></img>
                        <div className="absolute w-full top-0 bottom-0 p-8 bg-green-900 rounded-xl flex flex-col items-center justify-center 2xl:gap-10 project-desc">
                            <p className="text-sm 2xl:text-2xl text-center text-white leading-7 tracking-wider fade-in-quick">A clone of the popular gaming website "Steam".</p>
                            <a href="https://myst-steam.netlify.app/" target="_blank" rel="noreferrer" className="flex items-center justify-center py-1 px-5 border-2 border-green-600 rounded-full transition ease-in-out hover:bg-green-600">
                                <p className="text-lg text-white tracking-wider">View Site</p>
                            </a>
                        </div>
                    </div>
                    <div className="relative project-container flex justify-center" href="#" target="_blank" rel="noreferrer">
                        <img className="rounded-xl border-2 border-black/20" src={battleship} alt="Battleship"></img>
                        <div className="absolute w-full top-0 bottom-0 p-8 bg-green-900 rounded-xl flex flex-col items-center justify-center 2xl:gap-10 project-desc">
                            <p className="text-sm 2xl:text-2xl text-center text-white leading-7 tracking-wider fade-in-quick">The classic boardgame implemented.</p>
                            <a href="https://pixel-battleship.netlify.app/" target="_blank" rel="noreferrer" className="flex items-center justify-center py-1 px-5 border-2 border-green-600 rounded-full transition ease-in-out hover:bg-green-600">
                                <p className="text-lg text-white tracking-wider">View Site</p>
                            </a>
                        </div>
                    </div>
                    <div className="relative project-container flex justify-center" href="https://pickupartists.herokuapp.com/inventory" target="_blank" rel="noreferrer">
                        <img className="rounded-xl border-2 border-black/20" src={pickupArtists} alt='Pickup Artists'></img>
                        <div className="absolute w-full top-0 bottom-0 p-8 bg-green-900 rounded-xl flex flex-col items-center justify-center 2xl:gap-10 project-desc">
                            <p className="text-sm 2xl:text-2xl text-center text-white leading-7 tracking-wider fade-in-quick">The complete inventory catalog of this fake online guitar retailer.</p>
                            <a href="https://pickupartists.herokuapp.com/inventory" target="_blank" rel="noreferrer" className="flex items-center justify-center py-1 px-5 border-2 border-green-600 rounded-full transition ease-in-out hover:bg-green-600">
                                <p className="text-lg text-white tracking-wider">View Site</p>
                            </a>
                        </div>
                    </div>
                </div>  
            </div> 
            <div className="w-full border border-black/5"></div>   
        </section>
    )
}