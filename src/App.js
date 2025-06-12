import "./App.css";
import FoodReimbursement from "./FoodReimbursement";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>Ghouls Trip Creepy Assistant</h2>
          <p>🖤✨🦇🦇🦇🦇🦇🦇🦇🦇🦇🦇🦇✨🖤</p>
          <h3>At Your Service</h3>
          <Weather />
          <FoodReimbursement />
        </header>
      </div>
    </div>
  );
}

export default App;
