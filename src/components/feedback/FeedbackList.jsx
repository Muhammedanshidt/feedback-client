import FeedbackCard from "./FeedbackCard";

const FeedbackList = ({ feedbacks }) => {
  if (!feedbacks.length)
    return (
      <p className="text-center text-gray-500">
        No feedback yet
      </p>
    );

  return (
    <div className="space-y-4">
      {feedbacks.map((item) => (
        <FeedbackCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
