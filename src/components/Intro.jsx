import MyImage from '../assets/MyImage.png'
import github_icon from '../assets/github_icon.png'
import linkedin_icon from '../assets/linkedin_icon.png'

function Intro() {
    return (
        <div className='h-screen flex gap-20 items-center'>
            <div style={{width: '330px'}}>
                <img src={MyImage} alt="My-Passport-Pic" />
            </div>
            <div>
                <div className='text-center text-stone-400 font-bold'>Hello, I'm</div>
                <div className='text-center text-5xl font-bold text-slate-950'>Sonu Kumar</div>
                <div className='text-center text-3xl text-slate-700 py-3'>Software Engineer</div>
                <div className='flex gap-4 justify-center'>
                    <button className='rounded-full px-4 py-3 border border-slate-700 font-bold text-sm duration-300 hover:bg-stone-900 hover:text-white'>Download CV</button>
                    <button className='rounded-full px-4 py-3 border border-slate-700 font-bold text-sm duration-300 hover:bg-stone-900 hover:text-white'>Contact Info</button>
                </div>
                <div className='flex justify-center gap-5 my-4 items-center'>
                    <img style={{height: '42px'}} src={github_icon} alt="Github Icon" />
                    <img style={{height: '32px'}} src={linkedin_icon} alt="LinkedIn Icon" />
                </div>
            </div>
        </div>
    )
}

export default Intro
