import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <header className="mt-10 text-gray-600 body-font bg-amber-50">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium justify-center items-center gap-5 text-gray-900 mb-4 md:mb-0">
            
          <Link 
              target="_blank" 
              href={"https://www.facebook.com/"}
              className="text-gray-500"
              >
              <BsFacebook className="text-2xl hover:text-blue-500"/>
            </Link>
            <Link 
              target="_blank" 
              href={"https://www.instagram.com/"}
              className="text-gray-500"
              >
              <FaInstagram className="text-2xl hover:text-red-300"/>
            </Link>
            <Link 
              target="_blank" 
              href={"https://www.youtube.com/"}
              className="text-gray-500"
              >
              <BsYoutube className="text-2xl hover:text-red-500"/>
            </Link>
            <Link 
              target="_blank" 
              href={"https://www.linkedin.com/"}
              className="text-gray-500"
              >
              <FaLinkedinIn className="text-2xl hover:text-blue-500"/>
            </Link>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            Copyright ©2024 All rights reserved
          </nav>         
        </div>
      </header>
    </div>
  );
};
export default Footer;
