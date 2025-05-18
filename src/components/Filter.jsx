// a function that displays the filter inputs

export default function Filter({ onRatingChange, onTitleChange }) {
  return (
    <div className="filterDiv">
      <label>Filter by title:</label>
      <input
        title="title"
        type="text"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <label> Filter by ratings:</label>
      <input
        type="number"
        title="Filter by Rating"
        min="0"
        max="10"
        onClick={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
}
