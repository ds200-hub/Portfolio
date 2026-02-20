import TextChanger from "../../Textchanger";

function Home() {
  return (
    <section id="Home" className="w-full text-white px-6 sm:px-10 lg:px-20 py-16">

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <TextChanger></TextChanger>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300">
            I am a MERN Stack Developer passionate about building scalable
            and modern web applications with clean UI and powerful backend.
          </p>
          <a
            href="https://res.cloudinary.com/dtbjtelg3/image/upload/v1771575870/updated_deepak_resume_dxl5yn.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-[#465697] hover:bg-blue-600 text-white 
  py-3 px-6 rounded-full text-lg font-semibold 
  transition duration-300 hover:scale-105"
          >
            My Resume
          </a>

        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/Images/3d boy.png"
            alt="boy"
            className="w-64 sm:w-80 md:w-96 lg:w-[450px] 
            hover:scale-105 transition duration-500"c
          />
        </div>

      </div>

    </section>
  );
}

export default Home;
