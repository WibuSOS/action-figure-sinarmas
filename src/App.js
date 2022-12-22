import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AlamatComponent from './components/AlamatComponent';
function App() {
  return (
    <>
      <Header/>
      <div className='w-50'>
        <AlamatComponent/>
      </div>
    </>
    
  );
}

export default App;
