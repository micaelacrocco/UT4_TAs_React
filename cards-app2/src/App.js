import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card>
        <h2>Tarea 1</h2>
        <p>Descripción de la tarea 1</p>
        <p>Pepe</p>
        <p>2021-09-01</p>
        <p>2021-09-30</p>
      </Card>
      <Card>
        <h2>Tarea 2</h2>
        <p>Descripción de la tarea 2</p>
        <p>Juan</p>
        <p>2021-10-01</p>
        <p>2021-10-30</p>
      </Card>
      <Card>
        <h2>Tarea 3</h2>
        <p>Descripción de la tarea 3</p>
        <p>Ana</p>
        <p>2021-11-01</p>
        <p>2021-11-30</p>
      </Card>
    </div>
  );
}

export default App;
