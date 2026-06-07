
function ExperienceForm({
  company,
  setCompany,
  role,
  setRole,
  description,
  setDescription,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  saveExperience,
}) {
  return (
    <div className="space-y-4 border p-5 rounded-2xl bg-gray-50">

      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="border w-full p-3 rounded-lg"
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border w-full p-3 rounded-lg"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border w-full p-3 rounded-lg"
      />

      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border w-full p-3 rounded-lg"
      />

      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border w-full p-3 rounded-lg"
      />

      <button
        onClick={saveExperience}
        className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800"
      >
        Save Experience
      </button>

    </div>
  );
}

export default ExperienceForm;

