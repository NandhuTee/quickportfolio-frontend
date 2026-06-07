import { useEffect, useState } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectCard from "./components/ProjectCard";

import ExperienceForm from "./components/ExperienceForm";
import ExperienceCard from "./components/ExperienceCard";


import SocialLinkForm from "./components/SocialLinkForm";
import SocialLinkCard from "./components/SocialLinkCard";







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

  //experience

const [experiences, setExperiences] = useState([]);

const [company, setCompany] = useState("");
const [role, setRole] = useState("");
const [expDescription, setExpDescription] = useState("");

const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");

const [showExperienceForm, setShowExperienceForm] = useState(false);

//social links

const [links, setLinks] = useState([]);

const [platform, setPlatform] = useState("");
const [url, setUrl] = useState("");

const [showLinkForm, setShowLinkForm] = useState(false);





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


const fetchExperiences = async () => {
  try {
    const res = await fetch(`${API}/experience`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    setExperiences(data);

  } catch (err) {
    console.error(err.message);
  }
};

const fetchLinks = async () => {
  try {
    const res = await fetch(`${API}/links`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    setLinks(data);

  } catch (err) {
    console.error(err.message);
  }
};


const saveLink = async () => {
  try {
    const res = await fetch(`${API}/links`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        platform,
        url,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to save link");
    }

    fetchLinks();

    setPlatform("");
    setUrl("");

    setShowLinkForm(false);

  } catch (err) {
    console.error(err.message);
  }
};



const saveExperience = async () => {
  try {
    const res = await fetch(`${API}/experience`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        company,
        role,
        description: expDescription,
        startDate,
        endDate,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to save experience");
    }

    fetchExperiences();

    setCompany("");
    setRole("");
    setExpDescription("");
    setStartDate("");
    setEndDate("");

    setShowExperienceForm(false);

  } catch (err) {
    console.error(err.message);
  }
};


const deleteLink = async (id) => {
  try {
    const res = await fetch(`${API}/links/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to delete link");
    }

    fetchLinks();

  } catch (err) {
    console.error(err.message);
  }
};



const deleteExperience = async (id) => {
  try {
    const res = await fetch(`${API}/experience/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to delete experience");
    }

    fetchExperiences();

  } catch (err) {
    console.error(err.message);
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
    fetchLinks();
    fetchExperiences();

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

   
      {/* 🚀 Experience section */}
<div className="bg-white p-6 rounded-xl shadow-lg border space-y-4">

  <div className="flex justify-between items-center">

    <h2 className="text-2xl font-bold">
      Experience
    </h2>

    <button
      onClick={() =>
        setShowExperienceForm(!showExperienceForm)
      }
      className="bg-green-600 text-white px-4 py-2 rounded-lg"
    >
      {showExperienceForm
        ? "Close Form"
        : "Add Experience"}
    </button>

  </div>

  {showExperienceForm && (
    <ExperienceForm
      company={company}
      setCompany={setCompany}
      role={role}
      setRole={setRole}
      description={expDescription}
      setDescription={setExpDescription}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      saveExperience={saveExperience}
    />
  )}

  {experiences.length === 0 ? (
    <p className="text-gray-500">
      No experience added
    </p>
  ) : (
    experiences.map((experience) => (
      <ExperienceCard
        key={experience.id}
        experience={experience}
        deleteExperience={deleteExperience}
      />
    ))
  )}

</div>

     {/** 🚀 SOCIAL LINKS SECTION */}

<div className="bg-white p-6 rounded-xl shadow-lg border space-y-4">

  <div className="flex justify-between items-center">

    <h2 className="text-2xl font-bold">
      Social Links
    </h2>

    <button
      onClick={() =>
        setShowLinkForm(!showLinkForm)
      }
      className="bg-purple-600 text-white px-4 py-2 rounded-lg"
    >
      {showLinkForm
        ? "Close Form"
        : "Add Link"}
    </button>

  </div>

  {showLinkForm && (
    <SocialLinkForm
      platform={platform}
      setPlatform={setPlatform}
      url={url}
      setUrl={setUrl}
      saveLink={saveLink}
    />
  )}

  {links.length === 0 ? (
    <p className="text-gray-500">
      No social links added
    </p>
  ) : (
    links.map((link) => (
      <SocialLinkCard
        key={link.id}
        link={link}
        deleteLink={deleteLink}
      />
    ))
  )}

</div>



    </div>
  );
}

export default Dashboard;