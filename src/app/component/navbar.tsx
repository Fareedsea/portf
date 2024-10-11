import react from "react";
import Link from "next/link"; 
import { SlCloudDownload } from "react-icons/sl";
import { SiRacket } from "react-icons/si";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-cent..er">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <image alt="Fareed-Picture" width={100} height={100}/>
            <span className="ml-3 text-xl">Fareed</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-blue-900">Home</Link>
            <Link href={"about"} className="mr-5 hover:text-blue-900">About</Link>
            <Link href={"skills"} className="mr-5 hover:text-blue-900">Skils</Link>
            <Link href={"projects"} className="mr-5 hover:text-blue-900">Projects</Link>
            <Link href={"contact"} className="mr-5 hover:text-blue-900">Contact</Link>
          </nav>
          <a href="/Assets/CV-Fareed.pdf">
          <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
            Download CV
            <SlCloudDownload className="text-xl ml-2"/>
          </button>
          </a>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
