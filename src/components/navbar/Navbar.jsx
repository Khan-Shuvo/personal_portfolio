import React, { useState } from 'react'
import { TiThMenuOutline } from "react-icons/ti";

export default function Navbar() {

  const navMenus = [
    {
      name: "Home",
      link: "/#home",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Skills",
      link: "/#skills"
    },
    {
      name: "Projects",
      link: "/#projects"
   }
  ];

  const [menu, setMenu] = useState(false);

  return (

    <nav id="home" className='bg-[#f3f4f3] sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center py-3 px-3 sm:py-0'>
        <h1 className="text-3xl md:text-5xl font-bold text-[#f98e2b] flex justify-center items-center px-16 ">
          portfolio
        </h1>

        {/* desktop nav  */}

        <div className="hidden sm:block">
          <ul className="flex items-center gap-4 dark:text-white">
            {navMenus.map((navMenu, index) => {
              return (
                <li key={index}>
                  <a
                    className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                    href={navMenu.link}
                  >
                    {navMenu.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* movile menu  */}

        <div className="sm:hidden relative">
          <TiThMenuOutline
            className='text-2xl cursor-pointer'
            onClick={() => setMenu(!menu)}
          />
          {menu && (
            <div className="absolute top-8 right-0 bg-white/80 shadow-md rounded-md z-10 py-10">
              <ul className="flex flex-col items-center gap-4">
                {navMenus.map((navMenu, index) => {
                  return (
                    <li key={index}>
                      <a
                        className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                        href={navMenu.link}
                        onClick={() => setMenu(false)}
                      >
                        {navMenu.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>


  )
}
