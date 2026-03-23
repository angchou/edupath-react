import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute({ allowedRoles, children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const decoded = jwtDecode(token);
  let roles = decoded.roles || [];

  roles = roles.map((r) => r.replace("ROLE_", ""));
  console.log(roles);

  const isAllowed = roles.some((r) => allowedRoles.includes(r));

  return isAllowed ? children : <Navigate to="/unauthorized" />;
}
