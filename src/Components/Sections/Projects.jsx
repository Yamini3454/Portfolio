import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {
    return (
        <section 
        id='projects'
        className='min-h-screen flex items-center justify-center py-20'
        >
            <RevealOnScroll>
                <div className='max-w-5xl mx-auto px-4'>
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                        Featured Projects
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover-shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                            <h3 className='text-xl font-bold mb-2'>Cloning of a website</h3>
                            <p className='text-gray-400 mb-4'>I had cloned a website where i used technologies like Html, CSS, Bootstrap.
                                This Project hellped me deepen my understanding of front-end development and sharpen my skills in web design.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["Html", "CSS", "Bootstrap"].map((tech, key)=>{
                                    <span
                                        key={key}
                                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                        '>
                                            {tech}
                                    </span>
                                })}
                            </div>
                            <div className='flex justify-between items-center'>
                                <a 
                                    href='https://yamini3454.github.io/innomaticsProject1/'
                                    className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                        View Project → 
                                </a>
                            </div>
                        </div>
                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover-shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                            <h3 className='text-xl font-bold mb-2'>Simple Coffee Shop Page</h3>
                            <p className='text-gray-400 mb-4'>A simple coffee shop menu page using html, css and javascript 
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["Html", "CSS", "Bootstrap", "Javascript"].map((tech, key)=>{
                                    <span
                                        key={key}
                                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                        '>
                                            {tech}
                                    </span>
                                })}
                            </div>
                            <div className='flex justify-between items-center'>
                                <a 
                                    href='https://yamini3454.github.io/coffeeShopTask/'
                                    className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                        View Project → 
                                </a>
                            </div>
                        </div>
                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover-shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                            <h3 className='text-xl font-bold mb-2'>Memory Power Game</h3>
                            <p className='text-gray-400 mb-4'>A fun and interactive browser-based game built using HTML, CSS, and JavaScript, designed to boost memory and concentration.
                                The game features multiple themed levels, sound effects, and a responsive design that works seamlessly across all devices. 
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["Html", "CSS", "Bootstrap", "Javascript"].map((tech, key)=>{
                                    <span
                                        key={key}
                                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                        '>
                                            {tech}
                                    </span>
                                })}
                            </div>
                            <div className='flex justify-between items-center'>
                                <a 
                                    href='https://yamini3454.github.io/innomaticsProject2/index.html'
                                    className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                        View Project → 
                                </a>
                            </div>
                        </div>
                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover-shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                            <h3 className='text-xl font-bold mb-2'>Todo List</h3>
                            <p className='text-gray-400 mb-4'>A responsive React To-Do List app with calendar, task management, editable cards, and clean UI for daily productivity.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["Html", "CSS", "ReactJs", "NodeJs"].map((tech, key)=>{
                                    <span
                                        key={key}
                                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                        '>
                                            {tech}
                                    </span>
                                })}
                            </div>
                            <div className='flex justify-between items-center'>
                                <a 
                                    href='https://yamini3454.github.io/innomaticsProject1/'
                                    className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                        View Project → 
                                </a>
                            </div>
                        </div>
                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover-shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                            <h3 className='text-xl font-bold mb-2'>Interactive Portfolio</h3>
                            <p className='text-gray-400 mb-4'>I had cloned a website where i used technologies like Html, CSS, Bootstrap.
                                This Project hellped me deepen my understanding of front-end development and sharpen my skills in web design.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["Html", "CSS", "Bootstrap"].map((tech, key)=>{
                                    <span
                                        key={key}
                                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                        '>
                                            {tech}
                                    </span>
                                })}
                            </div>
                            <div className='flex justify-between items-center'>
                                <a 
                                    href='https://yamini3454.github.io/innomaticsProject1/'
                                    className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                        View Project → 
                                </a>
                            </div>
                        </div>
                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover-shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                            <h3 className='text-xl font-bold mb-2'>MERN Stack e-commerce website app</h3>
                            <p className='text-gray-400 mb-4'>Developed Green Cart, a full-stack e-commerce web app using React.js, Node.js, Express.js,
                                 MongoDB, Redux Toolkit, Tailwind CSS, and JWT for authentication, with responsive design and secure payment integration.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["Html", "CSS", "Bootstrap"].map((tech, key)=>{
                                    <span
                                        key={key}
                                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                        '>
                                            {tech}
                                    </span>
                                })}
                            </div>
                            <div className='flex justify-between items-center'>
                                <a 
                                    href='https://greenbasket-client.onrender.com'
                                    className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                        View Project → 
                                </a>
                            </div>     
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}