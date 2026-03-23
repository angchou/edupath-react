import { useNavigate, useLocation } from "react-router-dom";
import { CircleUserRound, Bell } from "lucide-react";

export default function AdminNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { id: "home", label: "Home", path: "/admin/home" },
    { id: "courses", label: "Courses", path: "/admin/courses" },
    { id: "employees", label: "Employees", path: "/admin/employees" },
    { id: "customers", label: "Customers", path: "/admin/customers" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-500 to-blue-400 flex items-center justify-between px-6 py-3 shadow-md">
      <label className="text-white text-2xl font-bold ml-20 hover:scale-110 transition">
        EduPath
      </label>

      <div className="text-lg flex gap-5 text-white">
        {items.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`
                px-6 py-1 rounded-3xl
                transition duration-300
                border border-transparent
                ${
                  isActive
                    ? "bg-white text-indigo-500 shadow"
                    : "hover:border-white"
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="text-white flex mr-20 gap-10 items-center">
        <Bell className="w-8 h-8 cursor-pointer transition hover:rotate-12 hover:scale-110" />
        <CircleUserRound className="w-8 h-8 cursor-pointer transition hover:scale-110" />
      </div>
    </nav>
  );
}
