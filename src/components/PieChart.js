import React from "react";
import Plot from "react-plotly.js";
function PieChart() {
  return (
    <Plot
      data={[
        {
          values: [19, 26, 55],
          labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
          type: "pie",
        },
      ]}
      config={{ responsive: true }}
      layout={{
        height: 400,
        width: 500,
      }}
    />
  );
}

export default PieChart;
