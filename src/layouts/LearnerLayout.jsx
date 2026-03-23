import Navbar from "../components/Navbar/LearnerNavBar";
import { Outlet } from "react-router-dom";

export default function LearnerLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
