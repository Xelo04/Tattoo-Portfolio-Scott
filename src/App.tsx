import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles/global.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="contentContainer">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/about",
        //   element: <About />,
        // },
        // {
        //   path: "/gallery",
        //   element: <Gallery />,
        // },
        // {
        //   path: "/contact",
        //   element: <Contact />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
