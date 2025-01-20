import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { useState } from "react";


import buyfy from '../assets/project_images/buyfy.jpeg';
import stepone from '../assets/project_images/Step-One.jpeg';
import keeper from '../assets/project_images/keeper.jpeg';
import simongame from '../assets/project_images/simon-game.png';
import drumkit from '../assets/project_images/drum-kit.jpg';
import dicegame from '../assets/project_images/dice-game.png';

function Projects() {
    const [current, setCurrent] = useState(0);
    const projects = [buyfy, stepone, keeper, simongame, drumkit, dicegame]

    function prevSlide() {
        if (current === 0) setCurrent(projects.length - 1)
        else setCurrent(current-1)
    }

    function nextSlide() {
        if (current === projects.length-1) setCurrent(0)
        else setCurrent(current + 1)
    }
    
    return ( 

        // todo: alt is not done
        <div className="h-screen">
            <div className='my-16'>
                <div className='text-stone-400 text-center'>Browse My</div>
                <div className="font-bold text-slate-950 text-4xl text-center">Projects</div>
            </div>
            <div className="overflow-hidden relative rounded-lg shadow-lg">
                <div className='w-[480px] flex transition ease-out duration-1000' style={{transform: `translateX(-${current * 100}%)`}}>
                    {projects.map((image, index) => (
                        <img className="w-[480px]" src={image} key={index} />
                    ))}
                </div>
                <div className="absolute h-full w-full top-0 flex justify-between items-center text-white px-6 text-4xl">
                    <button onClick={prevSlide}><AiFillCaretLeft /></button>
                    <button onClick={nextSlide}><AiFillCaretRight /></button>
                </div>
                <div className="absolute bottom-0 w-full py-4 flex justify-center gap-3 cursor-pointer">
                    {projects.map((image, index) => (
                        <div onClick={() => setCurrent(index)} className={`w-4 h-4 bg-white rounded-full ${index === current ? "bg-gray-500" : "bg-white"}`} key={"circle-" + index}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
