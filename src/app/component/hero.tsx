"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1>Hello</h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am Fareed
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "SEO Experts",
                    "Python Programmer",
                    "Speed Optimization Experts",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed">
            I am passionate about the world of technology and creativity. As a budding Front End Web Developer, I am honing my skills to build engaging and user-friendly websites. With over three years of professional experience in video editing, I bring a keen eye for detail and storytelling to every project. Additionally, my expertise in Social Media Marketing allows me to craft compelling digital strategies and connect with audiences effectively. As a Prompt Engineer, I also enjoy exploring innovative solutions and enhancing user interactions. I’m excited about the future and eager to continue growing in these dynamic fields.
            </p>
            <div className="flex justify-center">
              <Link href={"/contact"}>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">
                  Contact
                </button>
              </Link>
              <Link href="/Assets/CV-Fareed.pdf">
              <button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">
                Download-CV
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center round mx-auto w-[15rem] rounded-full"
              alt="hero"
              width={200}
              height={200}
              src={require("../../../public/Assets/Fareed.jpg")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
