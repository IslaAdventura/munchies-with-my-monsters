import "./App.css";
import FoodReimbursement from "./FoodReimbursement";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
          <FoodReimbursement />
        </header>
      </div>
    </div>
  );
}

export default App;
