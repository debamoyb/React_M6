// import logo from './logo.svg';
import './App.css';
import AudioPlayer from './Components/AudioPlayer';
import { AudioProvider } from './Components/AudioContext';

function App() {
  return (
    <AudioProvider>
      <div className="App">
        <AudioPlayer />
      </div>
    </AudioProvider>
  );
}

export default App;
