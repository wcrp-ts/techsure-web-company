import PATH from "./path"
import AppLayout from "../layouts/AppLayout"

import Home from "../pages/Home"
import Product from "../pages/Product"
import Service from "../pages/Service"
import Achievement from "../pages/Achievement"
import Careers from "../pages/Careers"
import Contact from "../pages/Contact"
import JobDescription from "../pages/JobDiscription"

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { path: PATH.home, element: <Home /> },
      { path: PATH.product, element: <Product /> },
      { path: PATH.service, element: <Service /> },
      { path: PATH.achievement, element: <Achievement /> },
      { path: PATH.careers, element: <Careers /> },
      { path: PATH.contact, element: <Contact /> },
      { path: PATH.jobDescription, element: <JobDescription/> },
    ],
  },
]

export default routes
