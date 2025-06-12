import React from "react";
import "./FoodReimbursement.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function FoodReimbursement() {
  return (
    <div className="FoodReimbursement">
      <h2>
        <FormattedDate />
        <FormattedTime />
      </h2>
      whatcha eating?
    </div>
  );
}
