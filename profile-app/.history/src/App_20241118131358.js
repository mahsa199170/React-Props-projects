import './App.css';
import Profile from './components/Profile';
import { people } from './personalInfo';

function App() {
  const personInfo = people.map((p) => {
    return <h1>{p.name}</h1>;
  });

  return (
    <div className="App">
      {people.map((person) => {
        const { id, name, age, gender, occupation } = person;
        return (
          <div key={id}>
            <Profile
              name={name}
              age={age}
              occupation={occupation}
              gender={gender}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
