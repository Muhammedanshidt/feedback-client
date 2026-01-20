import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

export default function FeedbackPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.clear();   
      navigate("/login");   
    },
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">
          Feedback Board
        </h1>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-semibold transition"
          onClick={() => logout()}
        >
          Log out
        </button>
      </div>

      <FeedbackForm />
      <FeedbackList />
    </div>
  );
}
