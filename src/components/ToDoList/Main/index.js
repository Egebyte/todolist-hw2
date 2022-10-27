import {useState} from 'react'
import List from '../List'
function Main({toDos, setToDos, filteredToDo}) {
  // Function to handle toggle event
  const toggleCompleteHandler = () => {
    if(toDos.some(someToDo => someToDo.complete === false)){ // If there are uncompleted tasks in the list
      setToDos(toDos.filter(toDo => toDo.complete === false ? toDo.complete = true : toDo.complete)) // Toggle only uncompleted tasks
    } else { // If all of the task are completed
      setToDos(toDos.map(toDo => toDo = {...toDo, complete: false})); // Toggle everything to uncompleted
    }
  }
  return (
    <section className='main'>
      <input className="toggle-all" type="checkbox" />
      {/* When clicked, calls the toggleCompleteHandler function */}
      <label onClick={toggleCompleteHandler} htmlFor="toggle-all">
        Mark all as complete
      </label>
      {/* Displays the imported List here and sets its props */}
      <List toDos = {toDos} setToDos = {setToDos} filteredToDo = {filteredToDo} />
    </section>
  )
}

export default Main