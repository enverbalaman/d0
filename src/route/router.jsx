import { createHashRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../App";
import About from "../pages/about";
import BlogDetails from "../pages/blog-details";
import LayoutTwo from "../layout/layoutTwo";
import Contact from "../pages/contact";
import Faq from "../pages/faq";
import PrivacyPolicy from "../pages/privacy-policy";
import NotFound from "../pages/404";

export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "blog-details",
        element: <BlogDetails />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "faq",
        element: <Faq />
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />
      }
    ]
  }
]);
