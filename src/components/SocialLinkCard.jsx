
function SocialLinkCard({
  link,
  deleteLink,
}) {
  return (
    <div className="border rounded-2xl p-5 bg-white shadow-sm flex justify-between items-center">

      <div>

        <h3 className="text-xl font-bold">
          {link.platform}
        </h3>

        <a
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          {link.url}
        </a>

      </div>

      <button
        onClick={() => deleteLink(link.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>

    </div>
  );
}

export default SocialLinkCard;

