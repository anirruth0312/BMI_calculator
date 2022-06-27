import React, { useState } from "react";
import "./Form.css";

export default function Form({ setResData }) {
  const [enteredHeight, setHeight] = useState("0");
  const [flag, setFlag] = useState(true);
  const [enteredWeight, setWeight] = useState("0");
  const [enteredUnit, setUnit] = useState("cm");
  const [enteredname, setName] = useState("John Doe");
  function nameHandler(event) {
    setName(event.target.value);
  }
  function heightHandler(event) {
    setHeight(event.target.value);
  }
  function weightHandler(event) {
    setWeight(event.target.value);
  }
  function unitHandler(event) {
    setUnit(event.target.value);
  }
  function submitHandler(event) {
    setFlag(true);
    event.preventDefault();
    const data = {
      name: enteredname,
      heightValue: enteredHeight,
      weightValue: enteredWeight,
      unit: enteredUnit,
      flagval: flag,
    };
    setResData(data);
  }
  function resetHandler() {
    window.location.reload(false);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="form-datas">
        <div className="header">
          <h2>Please Fill the following fields to find BMI</h2>
        </div>
        <div className="form-data">
          <label>Name : </label>
          <input required onChange={nameHandler} type="text" />
        </div>
        <br />
        <div className="form-data">
          <label>Age : </label>
          <input required type="number" min="1" step="1" max="120" />
        </div>
        <br />
        <div className="form-data">
          <label>Gender : </label>
          <input required name="gender" type="radio" value="female" />
          Female
          <input name="gender" type="radio" value="male" />
          Male
        </div>
        <br />
        <div className="form-data">
          <label>Choose Unit : </label>
          <select className="form-data" onChange={unitHandler}>
            <option value="cm">Cm/Kgs</option>
            <option value="inch">Inches/Pounds</option>
          </select>
        </div>
        <br />
        <div className="form-data">
          <label>Enter Height : </label>
          <input required onChange={heightHandler} type="number" />
          <br />
          <br />
          <label>Enter weight : </label>
          <input required onChange={weightHandler} type="number" min="0" />
        </div>
        <br />
        <div className="form-action">
          <input type="button" value="Reset" onClick={resetHandler}></input>
          <input type="submit" value="Submit "></input>
        </div>
        <br />
      </div>
    </form>
  );
}
