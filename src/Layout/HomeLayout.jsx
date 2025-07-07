import { Outlet } from "react-router-dom";
import { ScrollProvider } from "../ScrollContext";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div className="bg-primary">
      <ScrollProvider>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </ScrollProvider>
    </div>
  );
};

export default HomeLayout;
