import { createBrowserRouter } from "react-router-dom";
import PageLogin from "./pages/Login";
import Home from "./pages/Home";
import PageRegister from "./pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLogin />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <PageRegister />,
  },
]);
