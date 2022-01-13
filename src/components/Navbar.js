import React from "react";

export const Navbar = (props) => {
    const handleMenu = () => {
        props.handleMenu();
    }

    return (
        <header className="z-50 fixed w-full flex justify-between items-center px-8 2xl:p-10">
            <a className="p-4 bg-white rounded-xl transition ease-in-out hover:scale-110" href="#root">
                <img className="w-24 max-w-full h-auto" src={props.logo} alt='CJP Logo'></img>
            </a>
            <button type="button" className="p-4 bg-white rounded-xl transition ease-in-out hover:scale-110" onClick={handleMenu}>
                {props.menuBtn}
            </button>
        </header>
    )
}