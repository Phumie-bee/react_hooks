import MovieList from "./MovieList";
// a function that displays the structure of each movie

export default function MovieCard(props) {
  return (
    <>
      <div className="container">
        <div className="imgContainer">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="detailsDiv">
          <h2>{props.title}</h2>
          <p className="rating">{props.rating}/10</p>
          <p> {props.description}</p>
        </div>
      </div>
    </>
  );
}
