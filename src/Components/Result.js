import React from "react";
import "./Result.css";
function Result(props) {
  const res = props.resData;
  let bmi = 0;
  let bmi_status = "";
  let h = res.heightValue;
  let w = res.weightValue;
  console.log(res);
  const flag = res.flagval;
  if (res.unit === "inch") {
    bmi = Math.round((w / (h * h)) * 703 * 1000);
    bmi = bmi / 1000;
  } else if (res.unit === "cm") {
    bmi = Math.round((w / (h * h)) * 10000) * 1000;
    bmi = bmi / 1000;
  }
  //computing bmistatus
  if (bmi >= 30) bmi_status = "Obese";
  else if (bmi >= 25) bmi_status = "OverWeight";
  else if (bmi >= 18.5) bmi_status = "Normal Weight";
  else bmi_status = "UnderWeight";

  return (
    <div class="res-area">
      {flag === true && (
        <div>
          <h2>
            BMI is {bmi}
            <br />
            Weight Status : {bmi_status}
          </h2>
        </div>
      )}
    </div>
  );
}
export default Result;
