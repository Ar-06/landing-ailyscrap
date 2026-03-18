import { Outlet } from "react-router-dom";
import { Footer } from "../components/ui/footer";
import { Navbar } from "../components/ui/navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;