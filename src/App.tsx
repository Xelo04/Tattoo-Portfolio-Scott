import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles/global.scss";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import MyHistory from "./pages/my-history/MyHistory";

function App() {
  const Layout = () => {
    const location = useLocation();
    const isContactPage = location.pathname === "/contact";

    return (
      <div id={isContactPage ? "contactBackground" : ""} className="main">
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
        {
          path: "/my-history",
          element: <MyHistory />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
