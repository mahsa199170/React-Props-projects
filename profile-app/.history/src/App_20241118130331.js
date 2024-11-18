import './App.css';
import Profile from './components/Profile';
import people from './personalInfo';

function App() {
  const g = people.map((p) => {
    return <h1>{p.name}</h1>;
  });

  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
