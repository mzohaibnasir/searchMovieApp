import { useState, useEffect } from "react";
const PersonComponent = (props) => {
	return (
		<>
			<h1>Name: John-----{props.name}</h1>
			<h2>{props.lastName}</h2>
			<h3>{props.age}</h3>
		</>
	);
};

// React fragment is just an empty div
const App = () => {
	// const API_KEY = "742dacfb096053b6237f191f4d301895";
	// const API_URL =
	// 	"https://api.themoviedb.org/3/movie/550?api_key=742dacfb096053b6237f191f4d301895";
	const [counter, setCounter] = useState(0); //function with use prefix are called hook //[name,setter fn]= useState(initial value)
	const name = "JOHN";
	// class -> className
	//javsscript inside {}

	useEffect(() => alert("count changed"), [counter]); //this code happens as soon as this component renders
	//when dependency array is empty, this mean code is only happen on initial load
	return (
		<div className="App">
			{/* <h1>Hello World</h1>
			<PersonComponent name={"Zohaib"} lastName={"Nasir"} age={23} />
			<PersonComponent name="Zohaib2" lastName="Nasir2" age={23} /> */}

			{/* State in react is a plain JS objectused by react to represnt a piece of information	about component's current situation
			It is completely managed by component itself 
			-first import useState hook	 */}
			<button onClick={() => setCounter((prevCount) => prevCount - 1)}>
				-
			</button>
			{/* callback fn: afunction that don;t have name,it just waits for somekind of command */}
			<h1>{counter}</h1>
			<button onClick={() => setCounter((prevCount) => prevCount + 1)}>
				+
			</button>
		</div>
	);
};

export default App;
