import logo from './logo.svg';
import './App.css';
import { 
  ItemCardCollection 
} from './ui-components';
import { DataStore } from '@aws-amplify/datastore';
import { ArrivalMessage } from './models';

const models = await DataStore.query(ArrivalMessage);
console.log(models);

function App() {
  return (
    <div className="App">
      <h1>G2 to ATG Imported Message Finder</h1>
      <input></input>
      <button>Search</button>
      <ItemCardCollection />
    </div>
  );
}

export default App;
