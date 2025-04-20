import './App.css';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

function App() {
  return (
    <div className="container">
      <img src="/cake-6591719_640.jpg" alt="Synttärikuva" className="hero-img" />
      <h1>Vieraskirja</h1>
      <h2>Terveiset synttärisankarille</h2>
      <MessageForm />
      <h2>Aikaisemmat terveiset</h2>
      <MessageList />
    </div>
  );
}

export default App;

//npm run dev 
