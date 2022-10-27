import { useState, useEffect, Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
// Main display area which will be send to App.js
function ToDoList() {
  // useStates area
  const [toDos, setToDos] = useState([]); // Sets the state of the list
  const [inputText, setInputText] = useState(''); // Sets the state of the input text
  const [filter, setFilter] = useState('All'); // Sets the state of filter with the default value of 'All'
  const [filtered, setFiltered] = useState([]); // Sets the state of the filtered list

  // Function to handle filter
  const filterHandler = () => {
    switch (filter) { // Depending on the filter take the below actions
      case 'Completed': // If the filter is 'Completed'
        setFiltered(toDos.filter(toDo => toDo.complete === true)); // Filter out any uncompleted events
        break;
      case 'Active': // If the filter is 'Active'
        setFiltered(toDos.filter(toDo => toDo.complete === false)); // Filter out any completed events
        break;
      default: // If not both
        setFiltered(toDos); // Set filtered list to original list
        break;
    }
  }
  
  // useEffect is used to update the list whenever a change occurs in the list or the filter
  useEffect(() => {
    filterHandler();
  }, [toDos, filter]);

  return (
    <section className='todoapp'>
      {/* Displays the imported Header, Main and the Footer here and sets their props */}
      <Header toDos={toDos} setToDos={setToDos} inputText={inputText} setInputText={setInputText} />
      <Main toDos={toDos} setToDos={setToDos} filter={filter} setFilter={setFilter} filteredToDo={filtered} />
      <Footer toDos={toDos} setToDos={setToDos} filter={filter} setFilter={setFilter} />
    </section>
  )
}

export default ToDoList
