import { Navigate, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/auth.api";

export default function ProtectedRoute() {
  const { isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
