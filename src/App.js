import logo from './images/profile.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Kadir Colak profile image" />
        <p>
          Merhaba, ben <code>Kadir</code>
        </p>
        <a
          className="App-link"
          href="https://kadircolak.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web siteme git
        </a>
      </header>
    </div>
  );
}

export default App;
