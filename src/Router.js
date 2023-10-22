
import { createBrowserRouter } 
from "react-router-dom";
import Layout from './page/Layout'
import Error from "./page/Error"
import About from "./page/About"
import Logement from "./page/Logement"
import Home from './page/Home'

import "./index.css";
import Card from "./components/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'logement/:id',
        element: <Logement />,
      },
    ],
  },
]);

export default router