import Navbar from "../../components/Layout/Navbar";
import { Outlet } from "react-router-dom";

function MasterPage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MasterPage;
