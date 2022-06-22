import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer titulo = "hola mundo"/>
    </div>
  );
}

export default App;
