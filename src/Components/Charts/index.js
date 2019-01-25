import React from 'react';
import ScatterChart from "./ScatterChart";
import PieCharts from "./PieCharts";

const Charts = (props) => {
  return (
    <div>
      <PieCharts />
      <ScatterChart />
    </div>
  );
};

export default Charts;