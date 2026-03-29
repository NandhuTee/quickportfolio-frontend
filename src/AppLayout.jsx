import { Outlet, Link, useNavigate } from "react-router-dom";

function AppLayout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">

        <Link
          to="/dashboard"
          className="text-xl font-bold text-blue-600"
        >
          QuickPortfolio
        </Link>

        <div className="flex gap-4">

          {token && (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-black"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="text-red-500"
              >
                Logout
              </button>
            </>
          )}

          {!token && (
            <>
              <Link
                to="/"
                className="text-gray-700"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-blue-600"
              >
                Register
              </Link>
            </>
          )}

        </div>
      </nav>

      {/* Page Content */}
      <main className="p-6">
        <Outlet />
      </main>

    </div>
  );
}

export default AppLayout;