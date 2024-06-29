import { createBrowserRouter } from "react-router-dom";
import PageLogin from "./pages/Login";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLogin />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
