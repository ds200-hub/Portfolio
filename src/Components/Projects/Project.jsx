import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <section id="Projects" className="py-20 px-6 sm:px-10 lg:px-20 text-white">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My <span className="text-blue-500">Projects</span>
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <ProjectCard
          title="Zerodha-Trading Platform"
          description="A full-stack trading platform built with MERN featuring secure login, portfolio tracking, and stock order management."
          image="/Images/zerodha.png"
          demoLink="https://zerodha-landing-page-three.vercel.app/"
          sourceLink="https://github.com/ds200-hub/zerodha-clone"
        />

        <ProjectCard
          title="Market-Price-Checker"
          description="A full-stack vegetable price tracking system with token-based authentication, allowing shopkeepers to update prices and add new items dynamically."
          image="/Images/market-price-checker.png"
          demoLink="https://market-price-checker-omega.vercel.app/login"
          sourceLink="https://github.com/ds200-hub/Market-Price-Checker"
        />

        <ProjectCard
          title="Wanderlust-Hotel Listing"
          description="A full-stack hotel listing platform built using Node.js, Express, MongoDB, and EJS, allowing users to explore hotels and add new listings with authentication and CRUD functionality."
          image="/Images/wanderlust.png"
          demoLink="https://delta-project-3v84.onrender.com/listings"
          sourceLink="https://github.com/ds200-hub/project-Wanderlust"
        />

      </div>

    </section>
  );
}

export default Project;
