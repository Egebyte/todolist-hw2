import {useEffect, useState} from 'react'

function List({ toDos, setToDos, filteredToDo }) {
    // Function to handle delete task events
    const deleteHandler = (toDo) => {
        setToDos(toDos.filter( (el) => { return el.id !== toDo.id }))
    }
    // Function to handle complete / uncomplete task events
    const completeHandler = (toDo) => {
        setToDos(toDos.map (el => { // Maps through the complete list
            if (el.id === toDo.id) { // If a match happens between the id of parameter task and an id of the list
            return {...el, complete: !el.complete} // Changes the boolean complete to its negative but doesn't modify anything else
            }
            return el; // If it doesnt match nothing happens
        }))
    }
    // Function to handle id change events
    const idHandler = () => {
        setToDos(toDos.map((el, i)  => el = {...el, id: i}));
    }
    // useEffect is used to update to ids when the complete list length changes
    useEffect(()=>{
        idHandler();

    },[toDos.length])
    
    return (
        <ul className='todo-list'>
            {
                filteredToDo.map((toDo, i) => // Maps through to list while holding the current element and index
                    // The index is used as key value and className is set to completed if the task is completed. 
                    <li key={i} className = {toDo.complete === true ? 'completed' : ''} > 
                        <div className="view">
                            {/* When onClicked is called, calls the completeHandler function with the current task as a parameter
                                Using checked here without onChange for fixing a bug.
                                Bug : When the list length is at least n+1 and nth completed task is removed, after the list updates previously n+1th now nth task has a checked checkbox event if it is uncompleted. */}
                            <input onClick={() => {completeHandler(toDo)}} className="toggle" type="checkbox" checked = {toDo.complete}/>
                            <label>{toDo.task}</label> {/* Display the task*/}
                            {/* When clicked calls the deleteHandler function with the current task as a parameter */}
                            <button onClick={() => {deleteHandler(toDo)}} className="destroy"></button>
                        </div>
                    </li> 
                )
        }
    </ul>
  )
}

export default List