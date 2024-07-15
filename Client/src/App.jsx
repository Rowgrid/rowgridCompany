import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import Project from "./Components/Project";
import Contact from "./Components/Contact"
import {Routes, Route} from "react-router-dom"
import Footer from "./Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


const App = () => {
  return(
    <>
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About/>}/>
          <Route path="service" element={<Service/>}/>
          <Route path="project" element={<Project/>}/>
          <Route path="contact" element={<Contact/>}/>
        
        </Route>
        <Route path="/" element={<Footer/>}/>
        <Route path="about" element={<Footer/>}/>
        <Route path="service" element={<Footer/>}/>
        <Route path="project" element={<Footer/>}/>
        <Route path="contact" element={<Footer/>}/>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
    </>
  )
}
export default App;