
function Project({project}) {
    console.log(project);
  return (
    <div className="p-4 border-2 rounded-2xl border-gray-500 bg-blue-950 bg-opacity-30 w-full sm:w-[300px] break-all">
      <h1 className="text-2xl font-bold mb-3">{project.name}</h1>
      <p>Link : <a href={project.link} className="text-blue-500">{project.link}</a></p>
      <p>Source Code : <a href={project.source} className="text-blue-500">{project.source}</a></p>
    </div>
  )
}

export default Project
