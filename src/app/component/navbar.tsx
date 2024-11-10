import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-amber-50">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <Image alt="Fareed-Picture" width={100} height={100} /> */}
            <span className="ml-3 text-xl">Fareed</span>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-white hover:bg-blue-500">
              Home
            </Link>
            <Link href={"about"} className="mr-5 hover:text-white hover:bg-blue-500">
              About
            </Link>
            <Link href={"skills"} className="mr-5 hover:text-white hover:bg-blue-500">
              Skils
            </Link>
            <Link href={"projects"} className="mr-5 hover:text-white hover:bg-blue-500">
              Projects
            </Link>
            <Link href={"contact"} className="mr-5 hover:text-white hover:bg-blue-500">
              Contact
            </Link>
          </nav>         
        </div>
      </header>
    </div>
  );
};
export default Navbar;
