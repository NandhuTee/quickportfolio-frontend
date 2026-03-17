import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PortfolioView() {
  const { username } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  const API = "https://quickportfolio-backend.onrender.com/";

  useEffect(() => {
    fetch(`${API}/portfolio/${username}`)
      .then(res => res.json())
      .then(setPortfolio);
  }, [id]);

  if (!portfolio || portfolio.message) {
    return <div>Portfolio not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow rounded">

      <h1 className="text-3xl font-bold mb-2">
        {portfolio.user.name}
      </h1>

      <p className="text-gray-600 mb-6">
        {portfolio.bio}
      </p>

      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2 mb-6">
    {portfolio.skills?.map((skill, index) => (
  <span key={index}>{skill}</span>
))}
      </div>

      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      {portfolio.projects?.map(project => (
        <div key={project.id} className="border p-4 mb-3 rounded">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-gray-600 text-sm">
            {project.description}
          </p>
        </div>
      ))}

      <h2 className="text-xl font-semibold mt-6 mb-2">Experience</h2>
      {portfolio.experiences?.map(exp => (
        <div key={exp.id} className="border p-4 mb-3 rounded">
          <h3 className="font-semibold">
            {exp.role} @ {exp.company}
          </h3>
          <p className="text-gray-600 text-sm">
            {exp.description}
          </p>
        </div>
      ))}

    </div>
  );
}

export default PortfolioView;