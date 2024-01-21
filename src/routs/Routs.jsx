import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home /> 
  },
])