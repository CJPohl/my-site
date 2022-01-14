import React from "react";

export const Footer = (props) => {
    return (
      <footer id="footer" className="bg-green-600">
          <div className="w-4/5 max-w-7xl mx-auto py-16 h-full flex flex-col justify-between items-center gap-12 text-white">
                <p className="text-4xl font-light text-center ">Let's build something together!</p>
                <div className="w-full flex justify-evenly">
                    <a
                    className="text-5xl"
                    href="https://github.com/CJPohl"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <i className="fab fa-github transition ease-in-out hover:scale-110 hover:rotate-180" />
                    </a>

                    <a className="text-white text-5xl" href="https://www.linkedin.com/in/christopher-j-pohl-848b24145/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin transition ease-in-out hover:scale-110 hover:rotate-180"></i>
                    </a>

                    <a className="text-white text-5xl" href="mailto:cjpohldev@gmail.com">
                        <i className="far fa-envelope transition ease-in-out hover:scale-110 hover:rotate-180"></i>
                    </a>
                </div>
                <p className="text-center text-lg text-white/60">Crafted with my own two hands.  View the project's sourcecode <span className="text-white hover:underline"><a href="https://github.com/CJPohl/my-site" target="_blank" rel="noreferrer">here</a></span></p>
                <p className="text-sm text-white/60">Copyright @ 2021 Christopher J. Pohl</p>    
          </div>
      </footer>
    );
  };
  