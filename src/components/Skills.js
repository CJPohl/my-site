import React from "react";

export const Skills = () => {
    return (
        <section id="skills" className="bg-green-600 py-20">
            <div className="bg-white rounded-3xl w-4/5 max-w-7xl mx-auto grid grid-row-2 md:grid-row-0 md:grid-cols-2 shadow-lg">
                <div className="rounded-t-3xl md:rounded-tr-none md:rounded-bl-3xl p-5 w-full border-solid border-2 flex flex-col items-center gap-8 transition duration-300 ease-in-out hover:bg-black/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="flex flex-col items-center text-center gap-8">
                        <h3 className="text-2xl 2xl:text-3xl font-medium tracking-wider">Front-End</h3>
                        <p className="font-light text-lg 2xl:text-xl">The artistic side of being a developer is bringing creative ideas to life.  With client side development, I enjoy cultivating positive and memorable user experiences while maintaining the must needed functionality in a fast moving industry.</p>
                        <h4 className="text-xl 2xl:text-2xl font-medium text-green-600">My Lingo:</h4>
                        <p className="font-light text-lg 2xl:text-xl">HTML, CSS, Javascript, Responsiveness, Functional and Async Programming, Unit Testing</p>
                        <h3 className="text-xl 2xl:text-2xl font-medium text-green-600">Tools of the Trade:</h3>
                        <ul className="font-light text-lg 2xl:text-xl">
                            <li>Visual Studio Code</li>
                            <li>ESLint and Prettier</li>
                            <li>Jest</li>
                            <li>React JS</li>
                            <li>Functional Components and Hooks</li>
                            <li>Redux State Management</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="rounded-b-3xl md:rounded-bl-none md:rounded-tr-3xl p-5 w-full border-solid border-2 flex flex-col items-center gap-8 transition duration-300 ease-in-out hover:bg-black/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    <div className="flex flex-col items-center text-center gap-8">
                        <h3 className="text-2xl 2xl:text-3xl font-medium tracking-wider">Back-End</h3>
                        <p className="font-light text-lg 2xl:text-xl">In order to deliver a unique but consistent experience through the front, I take pride in my ability to deliver secure, stable, and safe back-ends.</p>
                        <h4 className="text-xl 2xl:text-2xl font-medium text-green-600">My Lingo:</h4>
                        <p className="font-light text-lg 2xl:text-xl">Javascript, SQL, Pug, CRUD, MVC, Authentication, RESTful API</p>
                        <h3 className="text-xl 2xl:text-2xl font-medium text-green-600">Tools of the Trade:</h3>
                        <ul className="font-light text-lg 2xl:text-xl">
                            <li>Node JS</li>
                            <li>npm</li>
                            <li>Express JS</li>
                            <li>Middleware</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>    
            </div>
            
            
        </section>
    )
}