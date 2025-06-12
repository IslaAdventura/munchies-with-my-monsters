import React from "react";
import "./FormattedTime.css";

export default function FormattedTime(date) {
  let hours = date.getHours() % 12 || 12;
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let amPm = date.getHours() < 12 ? "am" : "pm";

  return `${hours}:${minutes} ${amPm}`;
}
