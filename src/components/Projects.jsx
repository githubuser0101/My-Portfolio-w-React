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
    const projectsImages = [buyfy, stepone, keeper, simongame, drumkit, dicegame]
    const projectNames = ["Buyfy", "StepOne", "Keeper", "Simon Game", "Drum Kit", "Dice Game"]


    function prevSlide() {
        if (current === 0) setCurrent(projectsImages.length - 1)
        else setCurrent(current-1)
    }

    function nextSlide() {
        if (current === projectsImages.length-1) setCurrent(0)
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
                {/* images  */}
                <div className='w-[480px] flex transition ease-out duration-1000' style={{transform: `translateX(-${current * 100}%)`}}>
                    {projectsImages.map((image, index) => (
                        <img className="w-[480px]" src={image} key={index} />
                    ))}
                    
                    <div className="absolute w-full h-full flex justify-center items-center text-3xl transition ease-out duration-100"
                    style={{transform: `translateX(-${current * 100}%)`}}>
                        {projectNames.map((name, index) => (
                            <span className='w-[480px]' key={index}>{name}</span>
                        ))}
                    </div>
                </div>

                {/* Slide Buttons */}
                <div className="absolute h-full w-full top-0 flex justify-between items-center text-white px-6 text-4xl">
                    <button onClick={prevSlide}><AiFillCaretLeft /></button>
                    <button onClick={nextSlide}><AiFillCaretRight /></button>
                </div>

                {/* Project Circles */}
                <div className="absolute bottom-0 w-full py-4 flex justify-center gap-3 cursor-pointer">
                    {projectsImages.map((image, index) => (
                        <div onClick={() => setCurrent(index)} className={`w-4 h-4 bg-white rounded-full ${index === current ? "bg-gray-500" : "bg-white"}`} key={"circle-" + index}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
