import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchFeedback, toggleVote } from "../api/feedback.api";
import { useState } from "react";

export default function FeedbackList() {
  const queryClient = useQueryClient();
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("newest");

  const { data = [], isLoading } = useQuery({
    queryKey: ["feedback", { category, sort }],
    queryFn: fetchFeedback,
  });

  const voteMutation = useMutation({
    mutationFn: toggleVote,
    onSuccess: () => {
      queryClient.invalidateQueries(["feedback"]);
    },
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {/* Filter & Sort */}
      <div className="flex gap-3 mb-4">
        <select
          className="border p-2 rounded"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option>Bug</option>
          <option>Feature</option>
          <option>UI</option>
          <option>Improvement</option>
        </select>

        <select
          className="border p-2 rounded"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="upvotes">Most Upvoted</option>
        </select>
      </div>

      {/* Feedback Cards */}
      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded shadow"
          >
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-xs mt-1 text-blue-600">
              {item.category}
            </p>

            <button
              onClick={() => voteMutation.mutate(item._id)}
              className={`mt-3 px-3 py-1 rounded border ${
                item.hasUpvoted
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              👍 {item.upvotes}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
