const FeedbackCard = ({ data }) => {
    return (
      <div className="bg-white p-5 rounded-xl shadow flex justify-between items-start gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {data.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            {data.description}
          </p>
  
          <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-600">
            {data.category}
          </span>
        </div>
  
        <div className="flex flex-col items-center text-indigo-600 font-semibold">
          <span>{data.upvotes}</span>
          <span className="text-xs">▲</span>
        </div>
      </div>
    );
  };
  
  export default FeedbackCard;
  