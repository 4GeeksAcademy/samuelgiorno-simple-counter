// src/component/SecondsCounter.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const SecondsCounter = (props) => {
  const seconds = props.seconds;

  // Calcular cada dígito
  const six = Math.floor(seconds / 100000) % 10;
  const five = Math.floor(seconds / 10000) % 10;
  const four = Math.floor(seconds / 1000) % 10;
  const three = Math.floor(seconds / 100) % 10;
  const two = Math.floor(seconds / 10) % 10;
  const one = Math.floor(seconds / 1) % 10;

  return (
    <div className="big-counter d-flex justify-content-center align-items-center">
      <div className="digit bg-dark text-white m-2 p-4 rounded">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="digit bg-dark text-white m-2 p-4 rounded">{six}</div>
      <div className="digit bg-dark text-white m-2 p-4 rounded">{five}</div>
      <div className="digit bg-dark text-white m-2 p-4 rounded">{four}</div>
      <div className="digit bg-dark text-white m-2 p-4 rounded">{three}</div>
      <div className="digit bg-dark text-white m-2 p-4 rounded">{two}</div>
      <div className="digit bg-dark text-white m-2 p-4 rounded">{one}</div>
    </div>
  );
};

export default SecondsCounter;
