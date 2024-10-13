import { CiSquareCheck } from "react-icons/ci";
import Image from "next/image";
export default function Skills() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              SKILS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              MY SKILLS
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* SKILLS */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <CiSquareCheck className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                    <p className="font-bold text-blue-500 text-right">100%</p>
                    <Image
                      className="object-cover object-center rounded mx-auto w-[5rem]"
                      alt="HTML"
                      width={100}
                      height={100}
                      src={require("../../../public/Assets/HTML.jpg")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <CiSquareCheck className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[80%]"></div>
                    <p className="font-bold text-blue-500 text-right">80%</p>
                    <Image
                      className="object-cover object-center rounded mx-auto w-[5rem]"
                      alt="CSS"
                      width={100}
                      height={100}
                      src={require("../../../public/Assets/CSS.jpg")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <CiSquareCheck className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Javascript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[60%]"></div>
                    <p className="font-bold text-blue-500 text-right">60%</p>
                    <Image
                      className="object-cover object-center rounded mx-auto w-[5rem]"
                      alt="Javascript"
                      width={100}
                      height={100}
                      src={require("../../../public/Assets/JS.jpg")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <CiSquareCheck className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Wordpress
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[60%]"></div>
                    <p className="font-bold text-blue-500 text-right">60%</p>
                    <Image
                      className="object-cover object-center rounded mx-auto w-[5rem]"
                      alt="Wordpress"
                      width={100}
                      height={100}
                      src={require("../../../public/Assets/WP.jpg")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <CiSquareCheck className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Nextjs
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[60%]"></div>
                    <p className="font-bold text-blue-500 text-right">60%</p>
                    <Image
                      className="object-cover object-center rounded mx-auto w-[5rem]"
                      alt="Nextjs"
                      width={100}
                      height={100}
                      src={require("../../../public/Assets/NJS.jpg")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
