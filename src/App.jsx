import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import FeedbackPage from "./page/Feedback";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route path="/feedback" element={<FeedbackPage />} />
        </Route>

        {/* Default */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
