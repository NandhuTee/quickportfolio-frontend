
function PortfolioCard({ portfolio }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow border space-y-4">

      <h2 className="text-3xl font-bold">
        {portfolio.user?.name}
      </h2>

      <p className="text-gray-600">
        {portfolio.bio}
      </p>

      <div className="flex flex-wrap gap-2">

        {portfolio.skills?.map((skill, index) => (
          <span
            key={index}
            className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}

export default PortfolioCard;

