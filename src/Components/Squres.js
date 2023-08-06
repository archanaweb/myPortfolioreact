import { useState } from "react";
import React from "react";
const Squres = ({ value, onClick }) => {
  return (
    <>
      <div className="squres" onClick={onClick}>
        <h2>{value}</h2>
      </div>
    </>
  );
};

export default Squres;
