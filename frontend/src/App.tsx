import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouter from "./components/AppRouter.tsx";
import DataContext from "./contexts/DataContext.tsx";


function App() {
	// const handleSupportClick = () => {
	// 	console.log('Opening REDO Customer Support...');
	// 	alert('Welcome to REDO Customer Support! 🎉');
	// };

	return (
		<>
			<DataContext Children={AppRouter} />
		</>

		// <div className="app-container">
		//   <button onClick={handleSupportClick} className="support-button">
		//     REDO Customer Support
		//   </button>
		// </div>
	);
}

export default App;