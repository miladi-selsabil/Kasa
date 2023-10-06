import Header from "../components/Header"
import Cart from "../components/Card"
import { Outlet } from "react-router"
function layout() {
  return (
      <div>
        <Header />
        <Cart />
        <Outlet />
      </div>
  );
}
export default layout;
