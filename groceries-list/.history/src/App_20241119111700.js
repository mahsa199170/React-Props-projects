import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;