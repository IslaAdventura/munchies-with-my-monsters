import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="Column1">
          <span className="WeatherEmoji">🌩️</span>{" "}
          <span className="Temperature">80℉</span>{" "}
          <div className="WeatherCondition">Dark and Stormy</div>
        </div>
        <div className="Column2">
          <FormattedDate />
          <FormattedTime />
        </div>
      </div>
    </div>
  );
}
