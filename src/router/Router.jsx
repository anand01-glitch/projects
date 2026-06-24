import { createBrowserRouter } from "react-router";

import Counter from "../pages/counter/counter";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
    ],
  },
]);


export default router;