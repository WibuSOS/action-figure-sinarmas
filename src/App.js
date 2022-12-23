import './App.css';
import Header from './components/Header';

function App(props) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {props.children}
      </main>
    </div>
  );
}

export default App;
