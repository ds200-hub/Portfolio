import { IoArrowForward } from "react-icons/io5";

function About() {
  return (
    <section id="About" className="w-full px-6 sm:px-10 lg:px-20 py-16 text-white">

      <div className="bg-black/30 backdrop-blur-md shadow-xl rounded-2xl p-8 sm:p-12">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image */}
          <div className="flex justify-center lg:w-1/2">
            <img
              src="/Images/3d boy enjoy.png"
              alt="about"
              className="w-64 sm:w-80 md:w-96 lg:w-[420px] hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-8">

            {/* Item 1 */}
            <div className="flex gap-4 items-start">
              <IoArrowForward className="text-blue-500 text-3xl mt-1" />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Frontend Developer
                </h3>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  I build responsive and modern user interfaces using React,
                  Tailwind CSS, and JavaScript with clean design principles.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4 items-start">
              <IoArrowForward className="text-green-400 text-3xl mt-1" />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Backend Developer
                </h3>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  I develop secure REST APIs using Node.js, Express and manage
                  databases like MongoDB & MySQL efficiently.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4 items-start">
              <IoArrowForward className="text-purple-400 text-3xl mt-1" />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Full Stack Developer (MERN)
                </h3>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  I build complete full-stack applications from frontend UI to
                  backend logic with authentication and deployment.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
