import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip, 
  Legend
} from "recharts";
import { RechartsDevtools } from '@recharts/devtools';

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer>
        <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Species" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="MarineSpecies"
        fill="#4C8CE4"
        activeBar={{ fill: "#4C8CE4", stroke: "#355872" }}
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="WildlifeSpecies"
        fill="#408A71"
        activeBar={{ fill: "#408A71", stroke: "#237227" }}
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="BirdsSpecies"
        fill="#AACDDC"
        activeBar={{ fill: "#AACDDC", stroke: "#134E8E" }}
        radius={[10, 10, 0, 0]}
      />
      <RechartsDevtools />
    </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
