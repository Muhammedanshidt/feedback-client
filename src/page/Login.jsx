import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/auth.api";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const { mutate, isLoading, error } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => navigate("/feedback"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-80 space-y-3"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        <input
          className="border p-2 w-full rounded"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <input
          type="password"
          className="border p-2 w-full rounded"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          required
        />

        {error && (
          <p className="text-red-500 text-sm">
            Invalid credentials
          </p>
        )}

        <button
          disabled={isLoading}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>

        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link className="text-blue-600" to="/signup">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
