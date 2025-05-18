export default function AddMovie(props) {
  return (
    <>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="movie title"
          aria-label="add movie title"
          name="title"
          onChange={props.handleInputChange}
          value={props.title}
        />
        <input
          type="text"
          placeholder="description"
          aria-label="add movie description"
          name="description"
          onChange={props.handleInputChange}
          value={props.description}
        />
        <input
          type="text"
          placeholder="poster URL"
          aria-label="add movie poster URL"
          name="posterURL"
          onChange={props.handleInputChange}
          value={props.posterURL}
        />
        <input
          type="number"
          min="0"
          max="10"
          placeholder="rating"
          aria-label="add movie rating"
          name="rating"
          onChange={props.handleInputChange}
          value={props.rating}
        />
      </div>
      <div className="btnDiv">
        <button onClick={props.addMovie}>Add Movie</button>
        <button onClick={props.resetMovies}>Reset Movie</button>
      </div>
    </>
  );
}
