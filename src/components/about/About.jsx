import React from 'react'

export default function About() {
    return (
        <section  id='about' className="bg-white ">
            <div className="container mx-auto md:w-[70%] sm:py-16 py-10">
                <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
                    <div className=" font-bold relative">
                        <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5">
                            ABOUT
                        </div>
                        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                            About me
                        </h1>
                    </div>
                    <div className="text-slate-500 px-3">
                        <div className='flex flex-col justify-center'>
                            <p>
                                I’m a passionate Frontend Developer on a journey of continuous growth. I enjoy learning new technologies and improving my craft every day to build better digital experiences. My work focuses on turning creative ideas into clean, responsive, and interactive web interfaces that connect with users.
                            </p>
                            <br />
                            <p>
                                I’m constantly exploring modern tools like React, Tailwind CSS, and JavaScript frameworks to create visually appealing and efficient solutions. For me, web development is more than just code — it’s about bringing ideas to life and making the web a more beautiful, user-friendly place.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
