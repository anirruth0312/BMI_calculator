import React, { useState } from "react";
import Form from "./Form";
import "./Card.css";
import Result from "./Result";

function Card(props) {
  const [resData, setResData] = useState("");

  return (
    <div>
      <div className="card">
        <br />
        <Form setResData={setResData} />
      </div>
      <Result resData={resData} />
    </div>
  );
}
export default Card;
