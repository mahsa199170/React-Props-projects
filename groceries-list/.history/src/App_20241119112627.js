import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const itemsNumber = () => {
    console.log('number of items');
  };
  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
