import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Amazing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover powerful tools and resources to accelerate your development
            journey. From beginner to expert, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="h-10 bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      company: "TechCorp",
      content:
        "This platform has completely transformed how I approach development. The tools and resources are incredible!",
      avatar: "👩‍💻",
    },
    {
      name: "Michael Chen",
      role: "Full Stack Engineer",
      company: "StartupXYZ",
      content:
        "The documentation is crystal clear and the examples are spot-on. It's saved me countless hours of research.",
      avatar: "👨‍💻",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateLab",
      content:
        "As a non-technical person, this platform made complex concepts accessible. Highly recommended!",
      avatar: "👩‍💼",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of developers who are building amazing things
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 italic text-lg">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TestimonialsSection />
    </main>
  );
}
