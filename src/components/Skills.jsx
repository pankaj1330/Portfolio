
function Skills() {
    const skills = ['HTML','CSS','JAVASCRIPT','BOOTSTRAP','REACT JS','TAILWIND CSS','NODE JS','MONGODB','C++','JAVA'];
  return (
    <div className="max-w-[1200px] mx-auto my-6 overflow-hidden flex flex-row flex-nowrap gap-0 -rotate-0">
        <div className="space-x-8 text-3xl font-light text-gray-500 tracking-wider text-nowrap slider px-4">
            {
                skills.map((skill,index) => {
                    return <span key={index}>{skill}</span>
                })
            }
        </div>
        <div className="space-x-8 text-3xl font-light text-gray-500 tracking-wider text-nowrap slider px-4">
            {
                skills.map((skill,index) => {
                    return <span key={index+20}>{skill}</span>
                })
            }
        </div>
    </div>
  )
}

export default Skills
