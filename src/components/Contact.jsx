import { useState } from 'react'
import contactImg from '../assets/undraw_personal_text_re_vqj3.svg'

function Contact() {
    const [formdata,setFormdata] = useState({
        firstname : "",
        email : "",
        message : "",
    })

    function handleSubmit(e){
        e.preventDefault();
        alert('Thanks for sharing your feedback '+formdata.firstname+' 😊')
        setFormdata({
            firstname : "",
            email : "",
            message : "",
        })
        return;
    }

    function handleChange(e){
        setFormdata(prev => {
            return{
                ...prev,
                [e.target.name] : e.target.value
            }
        });
    }

  return (
    <section className='max-w-[1200px] mx-auto' id='contact'>
      <div className='p-2 mt-4 flex flex-col sm:flex-row justify-around gap-4 items-center'>
        <form className='w-[340px]' onSubmit={handleSubmit}>
            <h1 className='text-4xl font-bold mb-6'>Contact Me</h1>
            <label htmlFor="firstname">Name : </label> <br />
            <input type="text" name="firstname" id="firstname" placeholder="Your full Name" className='w-full outline-none p-1 text-black rounded-sm' value={formdata.firstname} onChange={handleChange}/> <br /> <br />
            <label htmlFor="email">Email : </label> <br /> 
            <input type="email" name="email" id="email" placeholder="Your Email" className='w-full outline-none p-1 text-black rounded-sm' value={formdata.email} onChange={handleChange}/> <br /> <br />
            <label htmlFor="message">Message : </label> <br />
            <textarea name="message" id="message" placeholder="Type your Message here" className='w-full outline-none p-1 text-black rounded-sm' rows={4} value={formdata.message} onChange={handleChange}/> <br /> <br />
            <input type="submit" value="Submit" className='py-2 px-4 tracking-wider bg-blue-900 text-white rounded-md cursor-pointer'/>
        </form>
        <div className='hidden sm:block'>
            <img src={contactImg} alt="contact image" className='max-w-[360px]' />
        </div>
      </div>
    </section>
  )
}

export default Contact
