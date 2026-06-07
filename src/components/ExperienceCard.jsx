function ExperienceCard({
  experience,
  deleteExperience,
}) {
  return (
    <div className="border rounded-2xl p-6 bg-white shadow-sm flex justify-between items-start">

      <div className="space-y-2">

        <h3 className="text-2xl font-bold">
          {experience.role}
        </h3>

        <p className="text-lg text-gray-700">
          {experience.company}
        </p>

        <p className="text-gray-500">
          {experience.startDate?.slice(0, 10)} -{" "}
          {experience.endDate
            ? experience.endDate.slice(0, 10)
            : "Present"}
        </p>

        <p className="text-gray-600">
          {experience.description}
        </p>

      </div>

      <button
        onClick={() => deleteExperience(experience.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>

    </div>
  );
}

export default ExperienceCard;

