
function SocialLinkForm({
  platform,
  setPlatform,
  url,
  setUrl,
  saveLink,
}) {
  return (
    <div className="space-y-4 border p-5 rounded-2xl bg-gray-50">

      <input
        type="text"
        placeholder="Platform (GitHub, LinkedIn...)"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        className="border w-full p-3 rounded-lg"
      />

      <input
        type="text"
        placeholder="Profile URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border w-full p-3 rounded-lg"
      />

      <button
        onClick={saveLink}
        className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800"
      >
        Save Link
      </button>

    </div>
  );
}

export default SocialLinkForm;

