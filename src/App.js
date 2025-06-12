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
          <h3>At Your Service</h3>
          <div className="row">
            <div className="col-8 d-flex align-content-start flex-wrap">
              <FoodReimbursement />
            </div>
            <div className="col-4 d-flex align-content-end flex-wrap">
              <Weather />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
