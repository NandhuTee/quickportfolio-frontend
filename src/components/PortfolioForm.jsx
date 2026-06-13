
function PortfolioForm({
  bio,
  setBio,
  skills,
  setSkills,
  savePortfolio,

  image,
  setImage,
  uploadImage,
}) {
  return (
    <div className="space-y-4 border p-5 rounded-2xl bg-gray-50">

      <textarea
        placeholder="Your Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="border w-full p-3 rounded-lg"
        rows={5}
      />

      <input
        type="text"
        placeholder="Skills (comma separated)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        className="border w-full p-3 rounded-lg"
      />

      <button
        onClick={savePortfolio}
        className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800"
      >
        Save Portfolio
      </button>

        
<div className="flex gap-4 items-center">

  <input
    type="file"
    onChange={(e) =>
      setImage(e.target.files[0])
    }
  />

  <button
    onClick={uploadImage}
    className="bg-black text-white px-4 py-2 rounded-lg"
  >
    Upload Image
  </button>

</div>


    </div>
  );
}

export default PortfolioForm;

