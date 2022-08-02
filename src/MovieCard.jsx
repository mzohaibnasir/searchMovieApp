import React from "react";

const MovieCard = ({ movie }) => {
	return (
		<div className="movie">
			{/* 
			(props) ------- props.movie1
			destructuring prop = ({movie1}) ----movie1.Year*/}

			<div>
				<p>{movie.Year}</p>
				{/* {console.log(movie.Year)} */}
			</div>
			<div>
				<img
					src={
						movie.Poster !== "N/A"
							? movie.Poster
							: "https://via.placeholder.com/400"
					}
					alt={movie.Title}
				/>
			</div>
			<div>
				<span>{movie.Type}</span>
				<h3>{movie.Title}</h3>
			</div>
		</div>
	);
};

export default MovieCard;
