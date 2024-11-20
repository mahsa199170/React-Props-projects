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

  const handlecheck = (id) => {
    const listItems = items.map((item) =>
      id === item.id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => id !== item.id);
    setItems(updatedItems);
    localStorage.setItem('shoppingList', JSON.stringify(updatedItems));
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content
        items={items}
        setItems={setItems}
        handleDelete={handleDelete}
        handlecheck={handlecheck}
      />
      <Footer countItems={countItems} />
    </div>
  );
}

export default App;
