// import logo from './logo.svg';
import './App.css';
import Quiz from './Components/Quiz';

function App() {
  return (
    <div className="App">
      <h1>USA Quiz</h1>
      <h2 style={{marginTop:"30px 0 0 0px"}}>Current Score : 0</h2>
      <Quiz/>
    </div>
  );
}

export default App;
