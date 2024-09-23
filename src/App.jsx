import "./App.css";
import About from "./components/About.jsx";
import Calendar from "./components/Calendar.jsx";
import Docs from "./components/docs.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Map from "./components/map.jsx";
import Navbar from "./components/Navbar.jsx";
import Syllabus from "./components/syllabus/syllabus.jsx";
import Weather from "./components/weather.jsx";
import Whats from "./components/whats.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="h-[30vh] flex flex-col justify-evenly items-center">
      <h1 className="text-3xl text-center">404 - Page Not Found</h1>
      <p className="text-lg md:text-2xl text-center">The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/Home",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/Docs",
      element: (
        <>
          <Navbar />
          <Docs />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/WhatsGrp",
      element: (
        <>
          <Navbar />
          <Whats />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/Syllabus",
      element: (
        <>
          <Navbar />
          <Syllabus />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/Calendar",
      element: (
        <>
          <Navbar />
          <Calendar />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/Map",
      element: (
        <>
          <Navbar />
          <Map />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/About",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/Weather",
      element: (
        <>
          <Navbar />
          <Weather />
          <Footer />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <Navbar />
          <ErrorPage />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
