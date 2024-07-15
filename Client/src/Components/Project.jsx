import React from "react";
import { motion } from "framer-motion"
import project1 from "../assets/images/project-1.png"
import project2 from "../assets/images/project-2.png"
import project3 from "../assets/images/project-3.png"
import project4 from "../assets/images/Screenshot (68).png"
import project5 from "../assets/images/Screenshot (69).png"
import project6 from "../assets/images/project6.png"


const projectVariant = {
  hidden: {
    opacity: 0,
  },
  visible: (index) => ({
    opacity: 1,
    transition: {
      delay: index * 0.12,
      duration: 0.8
    }
  })
}

function Project() {
  const ourProject = [
    {
      image: project1,
      description:
        "Celebrate your love with our exquisite wedding services, tailored to make your special day unforgettable. From stunning venues to personalized décor and flawless coordination, ",
        demo:"https://aadilmandottil.github.io/relme.com/"
    },
    {
      image:
        project4,
      description:
        "This is a cutting-edge mobile application designed to revolutionize the food ordering experience. Our platform connects users with a wide range of restaurants, enabling them to order their dishes.",
       demo:"https://food-app-com-beta.vercel.app/"
    },
    {
      image:
        project3,
      description:
        "Navigate taxation with confidence through our expert services tailored to meet your financial needs. From tax planning to compliance and strategic advisory, we ensure optimal outcomes for individuals",
        demo:"https://aadilmandottil.github.io/dbs.com/"
    },
    {
      image:
        project2,
      description:
        "Discover a cozy retreat at our café, where freshly brewed coffee meets delightful pastries. Whether with friends or alone, our artisanal treats promise the perfect break.",
        demo:"https://aadilmandottil.github.io/marshybistro.com/"
    },
    {
      image:
        project5,
      description:
        "At SmartHouse Property Network Ltd., we pride ourselves on being the go-to experts for all your property management requirements. Recognized as a top property management company in the UK, we focus on delivering ",
        demo:"https://www.smarthost.org.uk/"
    },
    {
      image:
        project6,
      description:

        "Embark on a transformative journey in education with our comprehensive services designed to inspire and empower learners of all ages. From personalized tutoring to innovative workshops, we nurture academic excellence and lifelong learning.",
       demo:"https://mentorow-home-page-wcm7.vercel.app/"
    },
  ];



  return (
    <>

      <div>
        <h1 className="cl text-center text-5xl">Our Projects</h1>
        <div className=' flex gap-8 flex-wrap justify-center items-center mt-6 mb-16 px-6'>
          {ourProject.map((project, index) => (
            <motion.div variants={projectVariant} initial="hidden" whileInView="visible" custom={index} className='w-96  bg-secondary2 text-center bg-gray-900'>
              <img className='w-full h-52 ' src={project.image} alt="" />
              <p className='mt-5 text-gray-200'>{project.description}</p>
              <button href={project.demo} className='px-4 py-2 cursor-pointer  mt-5  border-0 w-full bg-[#fff] hover:bg-secondry'> <a className="no-underline text-xl text-[black]  hover:text-[#fff]   " href={project.demo}>Demo</a> </button>
            </motion.div>
          ))}

        </div>
      </div>
    </>
  );
}

export default Project;