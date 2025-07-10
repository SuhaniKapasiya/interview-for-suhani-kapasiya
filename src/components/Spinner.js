import React from "react";
import "./Spinner.css";

const Spinner = ({ size = 50, className = "" }) => (
  <div
    className={`flex items-center justify-center ${className}`}
    style={{ minHeight: size }}
  >
    <div className="loader" style={{ width: size, height: size }} />
  </div>
);

export default Spinner;
