import '../App.css'
import image from "../assets/images/about.webp"

const About = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-center pt-6'>
                <div className='px-4 md:px-10 mb-5 md:w-[70%]'>
                    <h1 className='opacity-45 font-thin text-xl text-gray-200'>About Us</h1>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-white my-4'>" Discover our website services where innovation meets functionality. We're committed to crafting digital experiences that elevate your online presence. "</h1>
                    <p className='opacity-70 leading-6 text-gray-200 mb-4'>At Rowgrid, we are dedicated to transforming visions into impactful digital realities. With a passion for innovation, we provide cutting-edge website services tailored to enhance your brand's online journey.</p>
                    <button className='no-underline rounded-md text-white bg-[#eab308] hover:bg-white hover:text-[#eab308] btn'>Read more</button>
                </div>
                <div className='px-4 md:px-6 w-full md:w-[40%]'>
                    <img className='w-full h-auto rounded-md object-cover' src={image} alt="About Us" />
                </div>
            </div>
        </>
    )
}

export default About