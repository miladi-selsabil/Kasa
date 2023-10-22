import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router"
import BannerHome from "../components/BannerHome";
function layout() {
  return (
      <div>
        <Header />
        <BannerHome />
        <Outlet />
        <Footer />
      </div>
  );
}
export default layout;
