import './App.css';
import AddTask from './components/AddTask';
import DeleteTasks from './components/DeleteTasks';
import ListTasks from './components/ListTasks';
import StatsTasks from './components/StatsTasks';

function App() {
  return (
    <div className="container">
        <AddTask />
        <ListTasks />
        <DeleteTasks />
        <StatsTasks />
    </div>
  );
}

export default App;
