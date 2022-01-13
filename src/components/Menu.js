import React from 'react';

export const Menu = (props) => {

    const handleMenu = () => {
        props.handleMenu();
    }

    return (
        <aside id="menu" className='translate-y-full transform bottom-0 w-full fixed h-4/6 overflow-auto ease-in-out transition-all duration-700 z-50 bg-green-600'>
            <nav className='h-full py-20'>
                <ul className='w-4/5 max-w-7xl mx-auto  h-full text-center text-white text-5xl flex flex-col justify-evenly transition-all ease-in-out hover:border-8'>
                    <li>
                        <button type="button" onClick={handleMenu}>
                            <a href='#about' className='p-2 tracking-widest underline-offset-8 transition-all ease-in-out duration-500 hover:text-6xl hover:border-4'>About</a>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={handleMenu}>
                            <a href='#skills' className='p-2 tracking-widest underline-offset-8 transition-all ease-in-out duration-500 hover:text-6xl hover:border-4'>Skills</a>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={handleMenu}>
                            <a href='#projects' className='p-2 tracking-widest underline-offset-8 transition-all ease-in-out duration-500 hover:text-6xl hover:border-4'>Projects</a>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={handleMenu}>
                            <a href='#music' className='p-2 tracking-widest underline-offset-8 transition-all ease-in-out duration-500 hover:text-6xl hover:border-4'>Music</a>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={handleMenu}>
                            <a href='#footer' className='p-2 tracking-widest underline-offset-8 transition-all ease-in-out duration-500 hover:text-6xl hover:border-4'>Links</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>    
    )

}