import Project from "./Project"

function Projects() {
    const projects = [
        {
            id : 12,
            name : "ThinkSharp",
            link : "https://thinksharp.in/",
            source : "https://thinksharp.in/"
        },
        {
            id : 13,
            name : "URL Shortner",
            link : "https://url-shortner-two-liart.vercel.app/",
            source : 'https://github.com/pankaj1330/urlShortner'
        },
        {
            id : 14,
            name : "Grocery Bud",
            link : "https://grocery-bud-one-olive.vercel.app/",
            source : 'https://github.com/pankaj1330/grocery-bud'
        },
        {
            id : 15,
            name : "Cocktails",
            link : "https://cocktails-nu.vercel.app",
            source : 'https://github.com/pankaj1330/Cocktails'
        },
        {
            id : 16,
            name : "Money Tracker",
            link : "https://money-traker-app.vercel.app/",
            source : 'https://github.com/pankaj1330/moneyTrakerApp'
        },
        {
            id : 17,
            name : "Password Generator",
            link : "https://pankaj1330.github.io/PasswordGenerator/",
            source : 'https://github.com/pankaj1330/PasswordGenerator'
        },
        {
            id : 18,
            name : "Blogify App",
            link : "https://blogify-app-s2cl.onrender.com/",
            source : 'https://github.com/pankaj1330/Blogify'
        },
        
    ]
  return (
    <div className="max-w-[1200px] mx-auto p-2 bg-">
        <h1 className="text-3xl font-light text-center sm:text-start"><span className="text-6xl text-red-600 font-bold">A</span>wesome Projects</h1>
        <div className="flex flex-row gap-4 flex-wrap items-stretch my-6 justify-center sm:justify-normal">
        {
            projects.map(project => {
                return <Project key={project.id + 150} project={project}/>
            })
        }
        </div>
    </div>
  )
}

export default Projects
