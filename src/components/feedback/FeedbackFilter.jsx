const FeedbackFilter = ({ category, setCategory, sort, setSort }) => {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-xl shadow">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="All">All Categories</option>
          <option value="Bug">Bug</option>
          <option value="Feature">Feature</option>
          <option value="UI">UI</option>
          <option value="Improvement">Improvement</option>
        </select>
  
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="newest">Newest First</option>
          <option value="upvotes">Most Upvoted</option>
        </select>
      </div>
    );
  };
  
  export default FeedbackFilter;
  