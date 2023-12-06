import logo from './logo.svg';
import './App.css';
import Brother from './components/Brother';
import Neice from './components/Neice';
import Nephew from './components/Nephew';
import Sister from './components/Sister';

function App() {
  return (
    <div className="App">
      <Brother/>
      <Neice/>
      <Nephew/>
      <Sister/>
    </div>
  );
}

export default App;
