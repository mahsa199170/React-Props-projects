import './App.css';
import Profile from './components/Profile';
import people from './personalInfo';

function App() {
  console.log(people.name);
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
