import logo from './logo.svg';
import './App.css';
import Frase from './components/Frase';
import SeuNome from './components/SeuNome';

function App() {

  const name = 'magno gomes'
  const newName = name.toUpperCase()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{newName}</p>
        <h3>
          Componente Principal
        </h3>
        <Frase/>
        <SeuNome 
        nome='Magno'
        idade='37'
        profissao='Estudante Softex'
        />
      </header>
    </div>
  );
}

export default App;
