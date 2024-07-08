import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Follow() {
    const socialLinks = [
        {
            id : 1,
            name : "Instagram",
            icon : <FaInstagram />,
            link : "https://www.instagram.com/pankaj_singh_0971/",
        },
        {
            id : 2,
            name : "Linkedin",
            icon : <FaLinkedin />,
            link : "https://www.linkedin.com/in/pushpender-singh-rajwar-90b924283/",
        },
        {
            id : 3,
            name : "Github",
            icon : <FaGithub />,
            link : "https://github.com/pankaj1330",
        },
        {
            id : 4,
            name : "Youtube",
            icon : <FaYoutube />,
            link : "https://www.youtube.com/",
        },
    ]
  return (
    <section className="max-w-[1200px] mx-auto p-2">
    
      <div className="my-8 flex flex-row items-center justify-around gap-8 sm:gap-4 flex-wrap">
        <h1 className="text-4xl font-bold text-center">Follow Me</h1>
        <div className="flex flex-col w-[400px] gap-2 sm:gap-3">
        {
            socialLinks.map((link,index) => {
                if(index%2 === 0){
                    return <a key={link.id} href={link.link} className={`px-5 py-2 mx-4 rounded-md shadow-md shadow-purple-600 self-end flex flex-row gap-3 w-fit justify-center items-center duration-1000 hover:scale-110`}>
                        {link.icon} {link.name}
                    </a>
                }
                return <a key={link.id} href={link.link} className={`px-5 py-2 mx-4 rounded-md shadow-md shadow-purple-600 flex flex-row gap-3 w-fit justify-center items-center hover:scale-110 duration-1000`}>
                        {link.icon} {link.name}
                    </a>
            })
        }
        </div>
      </div>
    </section>
  )
}

export default Follow
