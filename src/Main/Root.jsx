import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  const location = useLocation();

  const showNavbar = location.pathname.includes("/login");
  const showFooter = location.pathname.includes("/login");

  return (
    <div>
      {showNavbar || <Navbar></Navbar>}
      <Outlet></Outlet>
      {showFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
