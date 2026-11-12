import { Heart, PenLine, Bookmark } from "lucide-react";

function About() {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-pink-500 font-semibold mb-3">
            OUR STORY
          </p>

          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            About Dear Future Me
          </h1>

          <p className="text-gray-600 leading-8 mb-4">
            Dear Future Me is a special place where you can
            write letters to your future self.
          </p>

          <p className="text-gray-600 leading-8">
            You can express your feelings, write your dreams,
            remember your achievements and keep your memories
            in one place.
          </p>
        </div>

        <div>
          <img
            src="/images/about.png"
            alt="Memories and letters"
            className="w-full rounded-3xl shadow-lg"
          />
        </div>
      </section>

      <section className="bg-pink-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why We Created This
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl text-center shadow-sm">
            <PenLine className="mx-auto text-pink-500 mb-4" size={35} />
            <h3 className="font-bold text-xl mb-3">Write</h3>
            <p className="text-gray-600">
              Write your thoughts, feelings and future plans.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl text-center shadow-sm">
            <Bookmark className="mx-auto text-pink-500 mb-4" size={35} />
            <h3 className="font-bold text-xl mb-3">Save</h3>
            <p className="text-gray-600">
              Keep your special moments and important memories.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl text-center shadow-sm">
            <Heart className="mx-auto text-pink-500 mb-4" size={35} />
            <h3 className="font-bold text-xl mb-3">Remember</h3>
            <p className="text-gray-600">
              Look back and celebrate your personal growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;