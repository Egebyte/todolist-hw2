import './App.css';
import './components/ToDoList/styles.css'
import ToDoList from './components/ToDoList';
import Info from './components/ToDoList/Info';
function App() {
  return (
    <div className="App">
      {/* Displays the imported ToDoList and Info here */}
      <ToDoList />
      <Info />
    </div>
  );
}

export default App;
