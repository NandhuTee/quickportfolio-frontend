
function ProjectCard({ project, deleteProject ,handleEdit,}) {
  return (
    <div className="border rounded-2xl p-6 bg-white shadow-sm flex justify-between items-start">

      <div className="space-y-3">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-600">
          {project.description}
        </p>

        <div className="flex gap-4">

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
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

      
            <div className="flex gap-4">

            <button
                onClick={() => handleEdit(project)}
                className="text-blue-600 hover:text-blue-800"
            >
                Edit
            </button>

            <button
                onClick={() => deleteProject(project.id)}
                className="text-red-500 hover:text-red-700"
            >
                Delete
            </button>

            </div>



    </div>
  );
}

export default ProjectCard;

