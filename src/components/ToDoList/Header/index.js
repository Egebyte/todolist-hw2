import {useState, useEffect} from 'react'

function Header({toDos, setToDos, inputText, setInputText}) {
	// Function for handling input text
	const inputTextHandler = (e) => {
		setInputText([e.target.name] = e.target.value);
	}
	// Functin for handling the new task input
	const toDosHandler = (e) => {
		e.preventDefault(); // Prevents the page from being refreshed
		if (inputText === '') return false; // If the input is empty return
		setToDos([...toDos, {id: toDos.length, task: inputText, complete: false}]); // Otherwise without touching the existing tasks add new task
		setInputText(''); // Reset the input field
	}
	
	return (
    <header className="header">
		<h1>todos</h1>
		{/* When the form is submitted calls the toDosHandler function */}
		<form onSubmit={toDosHandler}>
			<input 
				name='task'
				className="new-todo" 
				placeholder="What needs to be done?"
				value={inputText} // Setting the value to inputText
				onChange={inputTextHandler} // When value changes calls the inputTextHandler function
				autoFocus />
		</form>
	</header>
  )
}

export default Header