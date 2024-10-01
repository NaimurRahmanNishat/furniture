import { FaSearch } from "react-icons/fa";
import banner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="md:pt-44 pt-24 text-center space-y-8 w-1/2 mx-auto px-2">
        <h1 className="text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-2xl font-normal lg:w-1/2 mx-auto">
          Trun your room with panto into a lot more minimalist and modern with
          ease speed
        </p>
        {/* search field */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full md:w-80 px-6 py-2 bg-white/25 border rounded-full border-gray-300 focus:outline-none placeholder:text-white"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer">
            <FaSearch/>
          </div>
        </div>
      </div>
      {/* bottom blur effect */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"/>
      {/* hover button for displaying tooltip box */}
      <div className="absolute bottom-40 left-24 group">
        <button className="relative p-4 bg-white/10 rounded-full border border-1 bg-white text-xl">
          <div>
            <div className=""/>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
