import Header from "../components/Header"
import Card from "../components/Card"
import Footer from "../components/Footer"
import { Outlet } from "react-router"
import BannerHome from "../components/BannerHome";
function layout() {
  return (
      <div>
        <Header />
        <BannerHome />
        <Card />
        <Outlet />
        <Footer />
      </div>
  );
}
export default layout;
