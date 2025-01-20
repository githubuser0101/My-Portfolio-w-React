import email_icon from '../assets/email_icon.png'
import linkedIn_contact_icon from '../assets/linkedIn_contact_icon.png'

function Contacts() {
    return (
        <div className='mb-4'>
            <div>
                <div className='text-stone-400 text-center'>Get in Touch</div>
                <div className="font-bold text-slate-950 text-4xl text-center mb-6">Contact Me</div>
            </div>
            <div className='flex gap-8 border border-slate-700 rounded-3xl px-8 py-6'>
                <div className='flex gap-2 items-center'>
                    <div><img style={{height:'32px'}} src={email_icon} alt="An email icon" /></div>
                        <span className='text-slate-800 cursor-pointer'>Email Me</span>
                    </div>
                <div className='flex gap-2 items-center'>
                    <img style={{height:'32px'}} src={linkedIn_contact_icon} alt="A linkedIn icon" />
                    <div className='cursor-pointer'>LinkedIn</div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
