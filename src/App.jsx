import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/LoginPage.jsx";
import Register from "./pages/auth/RegisterPage.jsx";
import LearnerHomePage from "./pages/homepages/LearnerHomePage.jsx";
import AdminHomePage from "./pages/homepages/AdminHomePage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import LearnerLayout from "./layouts/LearnerLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Learner Layout */}
        <Route
          path="/learner"
          element={
            <ProtectedRoute allowedRoles={["Learner"]}>
              <LearnerLayout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<LearnerHomePage />} />
          <Route path="courses" element={<CoursePage />} />
        </Route>

        {/* Admin Layout */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<AdminHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
