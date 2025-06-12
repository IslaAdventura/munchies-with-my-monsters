import react from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <span className="WeatherEmoji">🌩️</span>{" "}
          <span className="Temperature">80℉</span>{" "}
          <span className="WeatherCondition">Dark and Stormy</span>
        </div>
        <div className="col-6">
          <FormattedDate />
          <FormattedTime />
        </div>
      </div>
    </div>
  );
}
