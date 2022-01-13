import React, { useEffect, useState } from "react";

import "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Music } from "./components/Music";
import { PixelSpacer } from "./components/PixelSpacer";
import { ConductingSpacer } from "./components/ConductingSpacer";

import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";

import CJP from './media/logos/cjp-logo.png';
import me_intro from './media/images/me-intro.jpg';

export const App = () => {
    const [isMenuVisible, toggleVisibility] = useState(false);

    const menuBtn = (!isMenuVisible) ? <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-9 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-9 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>

    const handleMenu = () => {
        toggleVisibility(!isMenuVisible);
    }

    useEffect(() => {
        const menu = document.getElementById('menu');
        if (isMenuVisible) {
            menu.classList.remove('translate-y-full');
        }
        else {
            menu.classList.add('translate-y-full');
        }
    })

    return (
        <div>
            <Navbar logo={CJP} menuBtn={menuBtn} handleMenu={handleMenu}/>
            <Intro meIntro={me_intro}/>
            <About />
            <PixelSpacer />
            <Skills />
            <ConductingSpacer />
            <Projects />
            <Music />
            <Footer logo={CJP} />
            <Menu handleMenu={handleMenu}/>
        </div>
        
    )
}