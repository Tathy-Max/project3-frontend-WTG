import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/index";
import { Signup } from "./pages/HomePage/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { HomeUser } from "./pages/HomeUser/index";
import { ErrorPage } from "./pages/ErrorPage";
import { HomeAdmin } from "./pages/HomeAdmin/index";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Store } from "./pages/Store/index";
import { EditTrip } from "./pages/HomeAdmin/EditTrip";
import { EditUser } from "./pages/HomeAdmin/EditUser";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/store" element={<Store />} />
          <Route
            path="/user"
            element={<ProtectedRoute component={HomeUser} />}
          />
          <Route
            path="/admin"
            element={<ProtectedRoute component={HomeAdmin} />}
          />
          <Route path="/admin/:id" element={<EditTrip />} />
          <Route path="/admin/user" element={<EditUser />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
