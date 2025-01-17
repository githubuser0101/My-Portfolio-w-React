import MyImage from '../assets/MyImage.png'
import education_animated_gif_icon from '../assets/education_animated_gif_icon.gif'
import niche_icon from '../assets/niche_icon.gif'


function About() {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className='my-16'>
                <div className='text-stone-400 text-center'>Get To Know More</div>
                <div className="font-bold text-slate-950 text-4xl text-center">About Me</div>
            </div>
            <div className='flex gap-20 mx-16 items-center'>
                <div>
                    <img src={MyImage} style={{width:'336'}} className='rounded-xl'  alt="My Picture"  />
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='flex gap-10 justify-center'>
                        <div className='flex-1 border border-slate-700 px-8 py-4 rounded-3xl'>
                            <div className='flex justify-center'>
                                <img src={niche_icon} style={{height:"36px"}}  alt="Niche Icon" />
                            </div>
                            <div className='text-center font-extrabold'>Niche</div>
                            <div className='text-center text-slate-800'>Web Development</div>
                            <div className='text-center text-slate-800'>Coding</div>
                        </div>
                        <div className='flex-1 border border-slate-700 px-8 py-4 rounded-3xl'>
                            <div className='flex justify-center'>
                                <img src={education_animated_gif_icon} style={{height:"36px"}}  alt="Education Icon" />
                            </div>
                            <div className='text-center font-extrabold'>Education</div>
                            <div className='text-center text-slate-800'>B.Tech Degree</div>
                            <div className='text-center text-slate-800'>Computer Science & Engineering</div>
                        </div>
                    </div>
                    <div className='text-justify'>
                        A logical and organized individual with exceptional verbal and written communication abilities. 
                        Proficient in DSA, Web Development and Database. Adept at quickly adapting to new skills and 
                        applying them effectively. Looking to start a career as an entry-level professional in the tech industry.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
