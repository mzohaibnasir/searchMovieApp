import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import Header from "./Header"

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=aad47bfb";

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		// console.log(data.Search);
		setMovies(data.Search);

		// console.log(movies[1]);
	};
	useEffect(() => {
		searchMovies("batman");
	}, []);

	return (
		<div className="container">
		<Header/>

			{/* <h1>{movie1.Year}</h1> */}
			<div className="search">
				<input
					placeholder="Search for movies"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
				/>
				<img
					src={SearchIcon}
					alt="search"
					onClick={() => {
						searchMovies(searchTerm);
					}}
				/>
			</div>
			{movies?.length > 0 ? (
				<div className="Container">
					{movies.map((movie) => (
						<MovieCard movie={movie} />
					))}
				</div>
			) : (
				<div className="empty">
					<h2>"Not Found"</h2>
				</div>
			)}
		</div> //app
	);
};
// iouoiuiououoiufsdfParenthesis are used in an arrow function to return an object.

export default App;
