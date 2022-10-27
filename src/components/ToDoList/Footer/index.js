import {useState, useEffect} from 'react'

function Footer({toDos, setToDos, filter, setFilter}) {
	// Function for handling clear event. It filters out any task that has a complete key to match true value 
	const clearHandler = () => {
		setToDos(toDos.filter(el => el.complete === false));
	}
	// Function for setting the filter
	const filterHandler = (clickedFilter) => {
		setFilter(clickedFilter);
	}

	return (
    <footer className='footer'>
        <span className="todo-count">
			{/* Displays how many uncompleted tasks are left */}
			<strong>{toDos.length} </strong>
			items left
		</span>

        <ul className="filters">
			<li>
				{/* Sets the filter --------------------------------------- If the filter is same with this button sets is className to selected */}
				<a onClick = {() => filterHandler('All', this)} href="#/"  className={filter === 'All' ? 'selected' : ''} >All</a>
			</li>
			<li>
				<a onClick = {() => filterHandler('Active', this)} href="#/" className={filter === 'Active' ? 'selected' : ''} >Active</a>
			</li>
			<li>
				<a onClick = {() => filterHandler('Completed', this)} href="#/" className={filter === 'Completed' ? 'selected' : ''} >Completed</a>
			</li>
		</ul>
		{/* Clears the completed tasks -- If there is no completed task hides this button */}
		<button onClick={clearHandler} className={toDos.some(someToDo => someToDo.complete === true) ? 'clear-completed' : 'hidden'}>
			Clear completed
		</button>   
    </footer>
  )
}

export default Footer