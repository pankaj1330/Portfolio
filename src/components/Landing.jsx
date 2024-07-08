import mainImg from '../assets/main.png'
import { HiOutlineDownload } from "react-icons/hi";

function Landing() {
  return (
    <main className='flex flex-col-reverse sm:flex-row gap-4 items-center justify-between px-12 py-8 tracking-wider max-w-[1200px] mx-auto'>
        <div>
            <h1 className='text-6xl font-bold mb-4'>Web Developer</h1>
            <p>Create Responsive Optimize through trending technology,<br /> with best SEO of websites</p>
            

            <div className='relative mt-6 text-sm tracking-normal'>
                <a href='#contact' className='px-3 py-1 rounded-3xl bg-blue-600 shadow-lg text-white mr-4'>Hire me</a>
                <a href='../assets/Pushpender-Resume.pdf' download className='px-3 py-1 rounded-3xl bg-gray-600 shadow-lg text-white'>Download CV <HiOutlineDownload className='inline text-lg'/></a>
                <svg  height="150" className='absolute bottom-0 right-full mr-1' viewBox="0 0 79 235" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M75.7998 3.19806C50.1843 3.91647 54.9044 2.94458 34.1801 22.898C29.4468 27.4551 22.2901 32.9978 20.6682 41.0942C18.2748 53.042 32.9256 89.1888 42.5174 75.8854C48.7163 67.2878 47.5223 52.5204 38.0924 48.6148C22.6279 42.2098 10.1944 61.1468 5.38686 77.5103C0.0940138 95.5256 4.53909 115.234 17.0132 127.263C22.7118 132.758 31.9039 130.27 26.8618 118.599C16.4911 94.596 4.49663 123.714 6.12058 139.661C9.04561 168.385 33.7168 206.119 56.799 200.135C64.0159 198.264 61.657 194.09 58.6284 191.002C55.5553 187.869 47.8279 176.427 49.9025 180.772C53.5294 188.367 58.1307 191.423 63.2708 195.883C69.9006 201.635 55.68 214.205 51.5604 218.692C49.3978 221.047 46.2555 226.322 45.6706 230.164C44.5155 237.748 52.8538 217.931 54.346 210.482" stroke="#00ADB5" strokeOpacity="0.2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </div>
        </div>
        <div>
            <img src={mainImg} alt='Main image' />
        </div>
    </main>
  )
}

export default Landing
