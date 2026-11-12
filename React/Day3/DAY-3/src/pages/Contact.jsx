import {
  PenLine,
  Lock,
  Calendar,
  Heart,
  Star,
  BookOpen
} from "lucide-react";

const services = [
  {
    icon: PenLine,
    title: "Write a Letter",
    description: "Write a personal letter to your future self."
  },
  {
    icon: Lock,
    title: "Keep It Private",
    description: "Keep your personal thoughts and memories private."
  },
  {
    icon: Calendar,
    title: "Future Delivery",
    description: "Choose a future date to read your letter."
  },
  {
    icon: Heart,
    title: "Save Memories",
    description: "Save your favourite moments and experiences."
  },
  {
    icon: Star,
    title: "Track Your Dreams",
    description: "Write down your dreams and future goals."
  },
  {
    icon: BookOpen,
    title: "Surprise Yourself",
    description: "Read your old thoughts and see your progress."
  }
];

function Services() {
  return (
    <div className="bg-pink-50 min-h-screen py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <p className="text-pink-500 font-semibold mb-3">
          WHAT WE OFFER
        </p>

        <h1 className="text-4xl font-bold text-gray-800">
          Our Services
        </h1>

        <p className="text-gray-600 mt-4">
          Make your memories special with Dear Future Me.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                <Icon className="text-pink-500" size={28} />
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h2>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;