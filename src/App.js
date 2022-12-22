
import './App.css';
import ItemList from './components/item_list/ItemList';
import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <Header/>
      <main><ItemList /></main>
    </div>
  );
}

export default App;
