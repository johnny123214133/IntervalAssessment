import NavBar from "../NavBar/NavBar.tsx";
import { useState, useContext } from "react";
import {CurrentFormContext} from "../../contexts/DataContext.tsx";

export default function CustomerForm() {
	const [currentForm, setCurrentForm] = useContext(CurrentFormContext)

	return (
		<>
			<NavBar />
			<h3>Submittable Form</h3>
			<p>Build a submittable form mapping the values in currentForm</p>
			<p>Submit Button at the bottom</p>
			<p>alert on submission</p>


		</>

	)
}