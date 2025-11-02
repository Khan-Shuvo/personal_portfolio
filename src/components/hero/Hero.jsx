import React from 'react'
import person from '../../assets/person.png'

export default function Hero() {
    return (
        <section className="w-full bg-[#f3f4f3] ">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 items-center  sm:h-[600px] space-y-4 py-12 px-4 sm:py-0 ">
                <div className="">
                    <div className="space-y-2 grid justify-items-center sm:justify-items-start">
                        <p className="uppercase text-center font-bold ">Hello</p>
                        <p className="text-4xl md:text-6xl font-bold">
                            I'm Md. Shuvo Khan
                        </p>
                        <p className="text-3xl">
                            Front-end Developer
                        </p>
                        <p className="text-center sm:text-left">
                           I create responsive, user-friendly web interfaces using clean code and modern design. I enjoy turning ideas into interactive digital experiences and always learning and working on new projects.
                        </p>
                        <button className='text-white  '>
                            <a
                                href="#"
                                className="inline-block bg-[#f98e2b] py-2 px-2 rounded-lg font-semibold"
                            >
                                Hire me
                            </a>
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src={person}
                        className="w-full md:max-w-lg mx-auto backdrop-blur-sm"
                        alt="person"
                    />
                </div>
            </div>
        </section>
    )
}
