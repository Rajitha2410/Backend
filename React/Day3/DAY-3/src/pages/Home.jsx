import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "../assets/hero.png";

function Home() {
  return (
    <div className="min-h-screen bg-pink-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left">

            <p className="text-pink-500 font-semibold text-xs md:text-sm tracking-wider mb-4">
              A LITTLE GIFT FOR YOUR FUTURE SELF
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Dear Future Me,
              <span className="block text-pink-500 mt-2">
                Let's Write Our Story.
              </span>
            </h1>

            <p className="text-gray-600 text-sm md:text-base leading-7 mt-5 max-w-md mx-auto md:mx-0">
              Write a letter to your future self. Save your dreams,
              memories, goals and thoughts. One day, open it and
              remember how far you have come.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-7">

              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-pink-500 text-white text-sm px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition"
              >
                Write Your Letter
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center border border-pink-500 text-pink-500 text-sm px-6 py-3 rounded-full font-medium hover:bg-pink-100 transition"
              >
                Learn More
              </Link>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">

            <img
              src={heroImage}
              alt="Dear Future Me letter"
              className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg"
            />

          </div>

        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-white py-14 px-6 p-5">

        <div className="max-w-3xl mx-auto text-center">

          <Heart
            className="mx-auto text-pink-500 mb-4"
            size={32}
          />

          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Your Story Deserves to Be Remembered
          </h2>

          <p className="text-gray-600 text-sm md:text-base  p-5 leading-7 mt-4">
            Every small moment becomes a beautiful memory.
            Start writing today and leave something special
            for the person you will become.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Home;