import { motion } from "framer-motion";
import Brand from "./Brand";
import rowgridImage from "/src/assets/images/rowgrid.png";
import bg1 from "../assets/images/bg4.avif";
// import web1Image from '/src/assets/images/web1.jpg';
// import web4Image from '/src/assets/images/web4.png';
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";
import Contact from "./Contact";
import Project from "./Project";
import Features from "./Features";
import bg2 from "../assets/images/bg2.avif";
import whatsapp from "../assets/images/whatsapp.png"
import MarqueeTech from "./Marquee";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Home = () => {
  return (
    <>
      <div className="">
        <div class="relative">
          <img
            src={bg2}
            class="absolute inset-0 h-screen w-full object-cover"
            alt=""
          />
          <div class="relative pb-12 md:h-screen bg-primary bg-opacity-90">
            {/* <svg class="absolute inset-x-0  -bottom-0 text-white" viewBox="0 0 1160 163">
              <path fill="lightblue" d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"></path>
            </svg> */}
            <div class="relative mx-auto overflow-hidden  px-4 py-8 sm:max-w-xl md:max-w-full md:px-24  lg:max-w-screen-xl lg:px-8 lg:py-2">
              <div class="flex flex-col items-center justify-between  xl:flex-row md:pt-32">
                <div class="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
                  <motion.h2
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    class="mb-6 max-w-lg font-sans text-7xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none"
                  >
                    Your <span className="text-[#eab308]">Vision</span>, Our
                    Expertise
                  </motion.h2>
                  <motion.p
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    class="mb-4 max-w-xl text-xl text-gray-400 md:text-md pb-4"
                  >
                    Join countless satisfied clients who have transformed their
                    online presence with our expert design solutions. Let's
                    create something amazing together.
                  </motion.p>
                  <motion.a
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    href="/"
                    aria-label=""
                    class=" btn p-3 mt-7  no-underline rounded-md hover:text-[#eab308]"
                  >
                    Start Your Journey
                  </motion.a>
                </div>
                <div class="w-full max-w-xl xl:w-5/12 px-2 xl:px-8 pt-10">
                  <div class="rounded-xl flex justify-center border-t-4 border-emerald-600 bg-white p-7 sm:p-10">
                    <img
                      className="sm:w-[500px] sm:h-[300px] w-96 rounded opacity-60 object-contain"
                      src={bg1}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-[30px]  right-[30px]  cursor-pointer">
          <a href="https://wa.me/9645284458">
            <img
              src={whatsapp}
              width={40}
              alt=""
            />
          </a>
        </div>
        <About />
        <Service />
        <MarqueeTech />

        <Features />
        <Project />
        <Contact />
      </div>
    </>
  );
};
export default Home;
