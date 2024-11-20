import { useState } from 'react';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const [countItems, setcountItems] = useState(0);

  const itemsNumber = (numberofItems) => {
    setcountItems(numberofItems);
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content itemsNumber={itemsNumber} />
      <Footer countItems={countItems} />
    </div>
  );
}

export default App;
