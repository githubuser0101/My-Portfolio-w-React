
function Footer() {
    return (
        <div>
            <div className="flex list-none gap-8 text-2xl align-center mb-4">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Skills</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Contacts</li>
            </div>    
            <div className="text-center text-slate-600 mb-16">Copyright &#169; {new Date().getFullYear()} Sonu Kumar. All Rights Reserved.</div>
        </div>
    )
}

export default Footer
