import "./App.css";
import FoodReimbursement from "./FoodReimbursement";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <FormattedDate />
          <FormattedTime />
          <Weather />
          <FoodReimbursement />
          <p>HAPPY HAUNTING</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            KEEP THIS LINK FOR REACT.JS HELP FOR RIGHT NOW
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
