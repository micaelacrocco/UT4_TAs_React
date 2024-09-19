import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card 
        title="Tarea 1"
        description="Descripción de la tarea 1"
        person="Pepe"
        startDate="2021-09-01"
        endDate="2021-09-30"
      />
      <Card
        title="Tarea 2"
        description="Descripción de la tarea 2"
        person="Juan"
        startDate="2021-10-01"
        endDate="2021-10-30"
      />
      <Card
        title="Tarea 3"
        description="Descripción de la tarea 3"
        person="Ana"
        startDate="2021-11-01"
        endDate="2021-11-30"
      />
    </div>
  );
}

export default App;
