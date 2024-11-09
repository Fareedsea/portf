import { BsYoutube } from "react-icons/bs";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container mt-10 px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Fareed</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Fareed —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
             <Link 
              target="_blank" 
              href={"https://www.w3schools.com/"}
              className="text-gray-500"
              >
              <BsYoutube className="text-3xl hover:text-red-500"/>
            </Link>
            <Link 
              target="_blank" 
              href={"https://www.youtube.com/"}
              className="text-gray-500"
              >
              <BsYoutube className="text-3xl hover:text-red-500"/>
            </Link>            
          </span>
        </div>
      </footer>
    </div>
  );
};
export default Footer; 