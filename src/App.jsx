import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import { Navbar } from "./components/Navbar";
// import { Home } from "./components/Home";
// import { About } from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Outlet />
        </div>
      ),
      children: [
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
