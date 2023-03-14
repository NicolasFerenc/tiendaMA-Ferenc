import './App.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return(
    <div>
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos a Tienda Mis Autopartes"/>
    </div>
  );
};

export default App;