import AdminNavBar from "../components/Navbar/AdminNavBar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <AdminNavBar />
      <Outlet />
    </>
  );
}
