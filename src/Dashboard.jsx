import { useEffect, useState } from "react";

function Dashboard() {
  const token = localStorage.getItem("token");

  const [projects, setProjects] = useState([]);
  const [portfolio, setPortfolio] = useState(null);

  const API = "https://quickportfolio-backend.onrender.com";

  /* 🔄 Fetch Portfolio */
  const fetchPortfolio = async () => {
    try {
      const res = await fetch(`${API}/portfolio`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setPortfolio(data);
    } catch (err) {
      console.error("Portfolio Error:", err.message);
    }
  };

  /* 🔄 Fetch Projects */
  const fetchProjects = async () => {
    try {
      const res = await fetch(`${API}/projects`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setProjects(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Projects Error:", err.message);
      setProjects([]);
    }
  };

  useEffect(() => {
    if (!token) return;

    fetchPortfolio();
    fetchProjects();
  }, []);

  /* ➕ Add Project */
  const addProject = async () => {
    try {
      const res = await fetch(`${API}/projects`, {
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

      if (!res.ok) throw new Error("Failed to add project");

      fetchProjects(); // ✅ refresh without reload
    } catch (err) {
      console.error(err.message);
    }
  };

  /* ❌ Delete Project */
  const deleteProject = async (id) => {
    try {
      const res = await fetch(`${API}/projects/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete");

      fetchProjects(); // ✅ refresh
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">

      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* 🚫 No Token */}
      {!token && (
        <p className="text-red-500">Please login first</p>
      )}

      {/* 📌 Portfolio Info */}
      {portfolio && !portfolio.message && (
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <h2 className="text-xl font-semibold">
            {portfolio.user?.name}
          </h2>

          <p className="text-gray-600 mt-2">
            {portfolio.bio || "No bio added"}
          </p>
        </div>
      )}

      {/* 🚀 Projects Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg border">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Projects</h2>

          <button
            onClick={addProject}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add Project
          </button>
        </div>

        {projects.length === 0 ? (
          <p className="text-gray-500">No projects yet</p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="border p-4 mb-3 rounded-lg flex justify-between items-center"
            >
              <h3 className="font-semibold">{project.title}</h3>

              <button
                onClick={() => deleteProject(project.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Dashboard;