import aboutImg from '../assets/about.png';

function About() {
  return (
    <section className='max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center gap-4 tracking-wide p-2' id='about'>
      <div>
        <h1 className='text-5xl font-bold mb-10'>About</h1>
        <p className='mb-2'>B.Tech graduate with specialized training in web development from IBM. Proficient in modern web technologies including HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, and MongoDB. Strong foundation in programming with expertise in C++ and Java, complemented by a solid understanding of Data Structures and Algorithms (DSA).
</p>
<p>
Proven ability to develop efficient, scalable, and user-friendly applications. Committed to continuous learning
and professional development in the technology sector.
</p>
      </div>
      <div>
        <img src={aboutImg} alt="about image" />
      </div>
    </section>
  )
}

export default About
