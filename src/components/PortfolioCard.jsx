function PortfolioCard({ portfolio }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow border space-y-4">

      {portfolio.imageUrl && (
        <img
          src={`http://localhost:5000${portfolio.imageUrl}`}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mx-auto"
        />
      )}

      <h2 className="text-3xl font-bold text-center">
        {portfolio.user?.name}
      </h2>

      <p className="text-gray-600 text-center">
        {portfolio.bio}
      </p>

      <div className="flex flex-wrap gap-2 justify-center">
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