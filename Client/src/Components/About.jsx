import '../App.css'
import image from "../assets/images/about.webp"

const About = () => {
    return (
        <>
            <div className='md:flex     justify-center  items-center pt-6'>
                <div className='px-10 mb-5 md:w-[70%]'>
                    <h1 className='opacity-45 font-thin text-xl text-gray-200'>About Us</h1>
                    <h1 className=' font-bold text-2xl text-white'>" Discover our website services  where innovation meets functionality. We're committed to crafting digital experiences that elevate your online presence. "
                    </h1>
                    <p className='opacity-30 leading-6 text-gray-200'>At Rowgrid, we are dedicated to transforming visions into impactful digital realities. With a passion for innovation, we provide cutting-edge website services tailored to enhance your brand's online journey.</p>
                    <button className=' hover:text-[#eab308] rounded-md btn'>Read more</button>
                </div>
                <div className='px-6'>
                    <img className=' w-[100%]' src={image} alt="" srcset="" />
                </div>
            </div>

           
          
            {/* https://image.freepik.com/free-photo/running-shoes-white-background_10541-635.jpg */}
        </>
        
    )
}
export default About