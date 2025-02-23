import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import img from "../app/images/happy-woman-holding-laptop.png"

export default function Hero() {
  return (
    <section className="relative w-full bg-white py-16 px-6">
      {/* Navbar */}

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center mt-12 relative">
        {/* Left Side - Image with Curved Shape */}
        <div className="relative w-[350px] h-[250px] md:w-[450px] md:h-[350px] rounded-[50px] overflow-hidden">
          <Image
            src={img}
            alt="Woman writing blog"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Write Your <span className="text-blue-600">Article</span> here
          </h1>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 transition">
            Create Account
          </button>
        </div>
      </div>

      {/* Background Gradient Elements */}
      <div className="absolute top-20 left-6 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
      <div className="absolute top-40 left-32 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
      <div className="absolute top-52 left-10 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
      <div className="absolute top-16 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
    </section>
  );
}
