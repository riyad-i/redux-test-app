
import './App.css';
import Counter from './features/counter/Counter'
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <Counter/>
      <hr/>
      <ToDoList/>
    </div>
  );
}

export default App;
