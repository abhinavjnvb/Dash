import React from "react";
import Plot from "react-plotly.js";
function Graph() {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3, 4, 19, 23],
          y: [2, 6, 3, 8, 5, 2],
          type: "pie",
          mode: "lines+markers",
          marker: { color: "red" },
        },
        { type: "line", x: [1, 2, 3], y: [2, 5, 3] },
      ]}
      config={{ responsive: true }}
      layout={{
        autosize: false,
        width: 920,
        // height: 500,
        title: "Graph",
      }}
    />
  );
}

export default Graph;
