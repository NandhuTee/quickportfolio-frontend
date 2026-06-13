
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PortfolioView() {

  const { username } = useParams();

  const [portfolio, setPortfolio] = useState(null);

  const API = "http://localhost:5000";

  useEffect(() => {

    fetch(`${API}/portfolio/user/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPortfolio(data);
      });

  }, [username]);

  if (!portfolio || portfolio.message) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Portfolio not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-4">
            {portfolio.name}
          </h1>

          <p className="text-xl text-indigo-100 max-w-2xl">
            {portfolio.bio}
          </p>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">

        {/* SKILLS */}
        <section className="bg-white p-8 rounded-2xl shadow">

          <h2 className="text-3xl font-bold mb-6">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {portfolio.skills?.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}

          </div>

        </section>

        {/* PROJECTS */}
        <section className="bg-white p-8 rounded-2xl shadow">

          <h2 className="text-3xl font-bold mb-6">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {portfolio.projects?.map((project) => (

              <div
                key={project.id}
                className="border rounded-2xl p-6 hover:shadow-lg transition"
              >

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex gap-4">

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* EXPERIENCE */}
        <section className="bg-white p-8 rounded-2xl shadow">

          <h2 className="text-3xl font-bold mb-6">
            Experience
          </h2>

          <div className="space-y-6">

            {portfolio.experiences?.map((exp) => (

              <div
                key={exp.id}
                className="border-l-4 border-indigo-600 pl-6"
              >

                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="text-lg text-gray-700">
                  {exp.company}
                </p>

                <p className="text-gray-500 mb-2">
                  {exp.startDate?.slice(0, 10)} -{" "}
                  {exp.endDate
                    ? exp.endDate.slice(0, 10)
                    : "Present"}
                </p>

                <p className="text-gray-600">
                  {exp.description}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* SOCIAL LINKS */}
        <section className="bg-white p-8 rounded-2xl shadow">

          <h2 className="text-3xl font-bold mb-6">
            Social Links
          </h2>

          <div className="flex flex-wrap gap-4">

            {portfolio.links?.map((link) => (

              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition"
              >
                {link.platform}
              </a>

            ))}

          </div>

        </section>

      </div>

    </div>
  );
}

export default PortfolioView;

