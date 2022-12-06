import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Projects from "../Projects/Projects";
import Vision from "../Vision/GlobalMap";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/vision",
        element: <Vision></Vision>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
    ],
  },
]);

export default route;
