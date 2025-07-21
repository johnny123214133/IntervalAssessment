import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouter from "./components/AppRouter.tsx";
import DataContext from "./contexts/DataContext.tsx";


function App() {
	/*
	I designed this solution following the MVC design pattern.
	The DataContext component handles the underlying data model, including its state and spearheads the persisting of the data.
	The AppRouter and its children handle the viewing and controlling of what data passes to and from the DataContext.
	 */
	return (
		<>
			<DataContext Children={AppRouter} />
		</>

	);
}

export default App;