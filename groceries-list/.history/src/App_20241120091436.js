import { useState } from 'react';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const [countItems, setcountItems] = useState(0);

  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: 'One half pound bag of Cocoa Covered Almonds Unsalted',
    },
    {
      id: 2,
      checked: false,
      item: 'Item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'Item 3',
    },
  ]);

  // const itemsNumber = (numberofItems) => {
  //   setcountItems(numberofItems);
  // };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content itemsNumber={itemsNumber} />
      <Footer countItems={countItems} />
    </div>
  );
}

export default App;
