import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFeedback } from "../api/feedback.api";
import { useState } from "react";

export default function FeedbackForm() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Bug",
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries(["feedback"]);
      setForm({ title: "", description: "", category: "Bug" });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-6 space-y-3"
    >
      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        required
      />

      <select
        className="w-full border p-2 rounded"
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      >
        <option>Bug</option>
        <option>Feature</option>
        <option>UI</option>
        <option>Improvement</option>
      </select>

      <button
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit Feedback
      </button>
    </form>
  );
}
