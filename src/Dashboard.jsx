import { useEffect, useState } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectCard from "./components/ProjectCard";






function Dashboard() {
const token = localStorage.getItem("token"); 
const [projects, setProjects] = useState([]); 
const [portfolio, setPortfolio] = useState(null); 
const [showForm, setShowForm] = useState(false);
 const [title, setTitle] = useState(""); 
 const [description, setDescription] = useState(""); 
 const [githubUrl, setGithubUrl] = useState("");
 const [liveUrl, setLiveUrl] = useState("");
  const [editingProject, setEditingProject] = useState(null);



  const API = "http://localhost:5000";

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


const createPortfolio = async () => {
  try {
    const res = await fetch(`${API}/portfolio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bio: "My portfolio bio",
        skills: ["React", "Node.js"],
      }),
    });

    const data = await res.json();

    console.log(data);

    if (!res.ok) {
      throw new Error(data.message);
    }

    fetchPortfolio();

  } catch (err) {
    console.error(err.message);
  }
};


const handleEdit = (project) => {

  setEditingProject(project);
  setTitle(project.title || "");
  setDescription(project.description || "");
  setGithubUrl(project.githubUrl || "");
  setLiveUrl(project.liveUrl || "");

  setShowForm(true);
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

const saveProject = async () => {
  try {

    const url = editingProject
      ? `${API}/projects/${editingProject.id}`
      : `${API}/projects`;

    const method = editingProject
      ? "PUT"
      : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        description,
        githubUrl,
        liveUrl,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to save project");
    }

    fetchProjects();

    setTitle("");
    setDescription("");
    setGithubUrl("");
    setLiveUrl("");

    setEditingProject(null);

    setShowForm(false);

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

   
<button
  onClick={() => setShowForm(!showForm)}
  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
>
  {showForm ? "Close Form" : "Add Project"}
</button>
  <div>

    {showForm && (
      <ProjectForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        githubUrl={githubUrl}
        setGithubUrl={setGithubUrl}
        liveUrl={liveUrl}
        setLiveUrl={setLiveUrl}
        saveProject={saveProject}
         editingProject={editingProject}
      />
  )}
  </div>


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

        
        </div>

        {projects.length === 0 ? (
          <p className="text-gray-500">No projects yet</p>
        ) : (
     
              
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            deleteProject={deleteProject}
            handleEdit={handleEdit}
          />
        ))



        )}

      </div>

    </div>
  );
}

export default Dashboard;