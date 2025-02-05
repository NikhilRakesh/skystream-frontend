import GaugeChart from "react-gauge-chart";

// eslint-disable-next-line react/prop-types
const Gauage = ({ percent }) => {
  let newPercent;
  newPercent = percent / 100;


  const chartStyle = {
    width: 100,
    height: 40,
    margin: 0,
  };

  return (
    <GaugeChart
      style={chartStyle}
      nrOfLevels={1}
      colors={["#0A5EB1", "#48A4FF", "#6AB2FB"]}
      percent={newPercent}
      marginInPercent={0.01}
      arcWidth={0.4}
      textColor={"#1C1F37"}
      needleColor={"#1C1F37"}
      needleBaseColor={"#1C1F37"}
      cornerRadius={0}
      animateDuration={1000}
    />
  );
};

export default Gauage;
