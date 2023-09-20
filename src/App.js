import logo from './logo.svg';
import './App.css';
import CurrenciesList from './components/ListOfRates';
import Convert from './components/ConvertCurrency';

function App() {
  return (
    <div className="App">
      <CurrenciesList/>
      <Convert/>
    </div>
  );
}

export default App;
