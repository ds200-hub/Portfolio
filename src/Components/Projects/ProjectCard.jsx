const ProjectCard = ({ title, description, image, demoLink, sourceLink }) => {
  return (
    <div className="bg-[#0c0e19] rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition duration-300 flex flex-col">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold mb-2">
          {title}
        </h3>

        <p className="text-sm md:text-base text-gray-400 flex-grow">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition duration-300"
          >
            Demo
          </a>

          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition duration-300"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
