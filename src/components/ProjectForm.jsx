
function ProjectForm({
  title,
  setTitle,
  description,
  setDescription,
  githubUrl,
  setGithubUrl,
  liveUrl,
  setLiveUrl,
  saveProject,
editingProject,
}) {
  return (
    <div className="space-y-4 mb-8 border p-5 rounded-xl bg-gray-50">

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border w-full p-3 rounded-lg"
      />

      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border w-full p-3 rounded-lg"
      />

      <input
        type="text"
        placeholder="GitHub URL"
        value={githubUrl}
        onChange={(e) => setGithubUrl(e.target.value)}
        className="border w-full p-3 rounded-lg"
      />

      <input
        type="text"
        placeholder="Live URL"
        value={liveUrl}
        onChange={(e) => setLiveUrl(e.target.value)}
        className="border w-full p-3 rounded-lg"
      />

      <button
        onClick={saveProject}
        className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800"
      >
      
            {editingProject ? "Update Project" : "Save Project"}


      </button>

    </div>
  );
}

export default ProjectForm;

