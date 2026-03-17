import { useEffect, useState } from "react";

function Dashboard() {
  const token = localStorage.getItem("token");
  const [projects, setProjects] = useState([]);
  const [portfolio, setPortfolio] = useState(null);

  const API = "https://quickportfolio-backend.onrender.com";

  useEffect(() => {
    fetch(`${API}/portfolio/1`)
      .then(res => res.json())
      .then(setPortfolio);

    fetch(`${API}/projects`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(setProjects);
  }, []);

  const addProject = async () => {
    await fetch(`${API}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: "New Project",
        description: "Project description",
        githubUrl: "#",
        liveUrl: "#",
      }),
    });

    window.location.reload();
  };

  const deleteProject = async (id) => {
    await fetch(`${API}/projects/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    window.location.reload();
  };

  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {portfolio && (
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold">
            {portfolio.user?.name}
          </h2>
          <p className="text-gray-600">{portfolio.bio}</p>
        </div>
      )}

      <div className="bg-white p-6 rounded shadow">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          <button
            onClick={addProject}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Project
          </button>
        </div>

        {projects.map(project => (
          <div key={project.id} className="border p-4 mb-3 rounded">
            <h3 className="font-semibold">{project.title}</h3>
            <button
              onClick={() => deleteProject(project.id)}
              className="text-red-500 text-sm mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;