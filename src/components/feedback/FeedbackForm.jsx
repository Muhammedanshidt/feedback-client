import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFeedback } from "../../features/feedback/feedback.service";
import { feedbackKeys } from "../../features/feedback/feedback.queryKeys";

const FeedbackForm = () => {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Bug",
  });

  const mutation = useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      // Invalidate and refetch feedbacks
      queryClient.invalidateQueries({ queryKey: feedbackKeys.all });
      setForm({ title: "", description: "", category: "Bug" });
    },
    onError: (error) => {
      console.error("Error creating feedback:", error);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        Submit Feedback
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          placeholder="Title"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <textarea
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          placeholder="Description"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <select
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="w-full border px-4 py-2 rounded-lg"
        >
          <option>Bug</option>
          <option>Feature</option>
          <option>UI</option>
          <option>Improvement</option>
        </select>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
