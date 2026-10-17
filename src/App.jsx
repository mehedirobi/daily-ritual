
import { RouterProvider, Outlet } from "react-router";
import router from "./router/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const appRouter = router;

export default function App() {
  return <RouterProvider router={appRouter} />;
}
