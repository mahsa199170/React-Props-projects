import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const itemsNumber = (numberofItems) => {
    console.log(numberofItems);
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content itemsNumber={itemsNumber} />
      <Footer />
    </div>
  );
}

export default App;
