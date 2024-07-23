import { footerLinks, socialMedia } from "../Links.js";
import img from '..//assets/images/rowgrid2blc.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="m-5"
   
  >
    <div
      className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}
    >
      <div className="flex-1 flex flex-col justify-start m-5">
        <img
          src={img}
          alt=""
          className="w-[250px] h-[72px] mb-2 object-contain"
        />
        <p
          className={` cl font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] mt-4 max-w-[310px]`}
        >

          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10  ">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col  ss:my-0 my-4 min-w-[50px]"
          >
            <h4 className="font-poppins cl font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4 p-0">
              {footerLink.links.map((link) => (
                <li
                  key={link.name}
                  className={`font-poppins hover:text-[#eab308] font-normal text-[16px] leading-[24px] cl hover:text-secondary cursor-pointer mb-4 last:mb-0`}
                >
                  <Link className="no-underline hover:text-[#eab308] cl" to={link.lin}>{link.nam}</Link>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center  flex-col pt-5 m-2 border-t-[1px] border-t-[#3F3E45]">
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social) => (
         <a href={social.link} className="mx-3 ">
          <img
            src={social.icon}
            alt={social.id}
            key={social.id}
            className={`w-[21px] h-[21px] hover:opacity-55  object-contain cursor-pointer mr-6 last:mr-0`}
          />
         </a> 
        ))}
      </div>
      <p className=" cl font-poppins pt-2 font-normal text-center text-[14px] leading-[27px] text-white">
       RowGrid @ {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </div>
  </section>

  )
}

export default Footer
