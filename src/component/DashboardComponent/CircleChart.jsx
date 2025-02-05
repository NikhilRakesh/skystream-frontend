/* eslint-disable react/prop-types */
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const CircleChart = ({value}) => {

  let newValue = value/10


  return (
    <div className="w-24">
      <CircularProgressbar maxValue={1024} value={newValue} text={`${newValue}`} />
    </div>
  );
};

export default CircleChart;
