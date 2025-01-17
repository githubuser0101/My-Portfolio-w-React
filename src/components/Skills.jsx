import read_icon from '../assets/read_icon.png'

function Skills() {
    const skillSet = {
        frontendSkills : [
            {name: 'HTML', level: 'Advanced'},
            {name: 'CSS', level: 'Advanced'},
            {name: 'JavaScript', level: 'Advanced'},
            {name: 'React', level: 'Advanced'},
            {name: 'JQuery', level: 'Advanced'},
            {name: 'Redux Toolkit', level: 'Advanced'},
            {name: 'TailwindCSS', level: 'Advanced'},
            {name: 'Bootstrap', level: 'Advanced'},
            {name: 'Figma', level: 'Advanced'},
    ],
        backendSkills: [
            {name: 'Node', level: 'Advanced'},
            {name: 'Express', level: 'Advanced'},
            {name: 'EJS', level: 'Advanced'},
            {name: 'REST API', level: 'Advanced'},
            {name: 'Postman', level: 'Advanced'},
            {name: 'MongoDB', level: 'Intermediate'},
            {name: 'Appwrite', level: 'Advanced'},
            {name: 'Firebase', level: 'Advanced'},
            {name: 'PostgreSQL', level: 'Advanced'},
        ],
    }
    return (
        <div className="w-full h-screen">
            <div className='my-16'>
                <div className='text-stone-400 text-center'>Explore My</div>
                <div className="font-bold text-slate-950 text-4xl text-center">Skills</div>
            </div>
            <div className="flex gap-10">
                {/* Frontend Skills */}
                <div className="flex-1  border border-slate-700 rounded-3xl">
                    <div className="text-center font-bold text-slate-600 text-3xl my-4">Frontend Development</div>
                    <div className='flex flex-wrap text-md m-4 justify-around'>
                    {/* Skills */}
                    {skillSet.frontendSkills.map((skill) => {
                        return (
                            <div className='flex gap-4 mx-8 my-4 w-34'  key={skill}>
                                <div>
                                    <img src={read_icon} style={{height:'32px'}} alt="check icon" />
                                </div>
                                <div>
                                    <div className='font-extrabold'>{skill.name}</div>
                                    <div className='text-slate-600'>{skill.level}</div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="flex-1  border border-slate-700 rounded-3xl">
                    <div className="text-center font-bold text-slate-600 text-3xl my-4">Backend Development</div>
                    <div
                     className='flex flex-wrap text-md m-4 justify-around'>
                    {/* Skill */}
                    {skillSet.backendSkills.map((skill) => {
                        return (
                            <div className='flex gap-4 mx-8 my-4 w-34'  key={skill}>
                                <div>
                                    <img src={read_icon} style={{height:'32px'}} alt="check icon" />
                                </div>
                                <div>
                                    <div className='font-extrabold'>{skill.name}</div>
                                    <div className='text-slate-600'>{skill.level}</div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
