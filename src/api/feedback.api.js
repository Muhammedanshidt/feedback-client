import api from "./axios";

/* FETCH FEEDBACK */
export const fetchFeedback = async ({ queryKey }) => {
  const [_key, { category, sort }] = queryKey;

  const params = {};
  if (category) params.category = category;
  if (sort) params.sort = sort;

  const res = await api.get("/feedback", { params });
  return res.data;
};

/* CREATE FEEDBACK */
export const createFeedback = async (data) => {
  const res = await api.post("/feedback", data);
  return res.data;
};

/* TOGGLE VOTE */
export const toggleVote = async (id) => {
  const res = await api.patch(`/feedback/${id}/vote`);
  return res.data;
};
