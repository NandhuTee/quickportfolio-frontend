import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import PortfolioView from "./PortfolioView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: ":username", element: <PortfolioView /> },
    ],
  },
]);