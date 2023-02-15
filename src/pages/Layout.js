import { Outlet } from "react-router-dom";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className=" bg-slate-200 w-full ">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
