import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { curveCardinal } from "d3-shape";
const data = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Thu",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Sun",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
const cardinal = curveCardinal.tension(0.2);

export default function ChartBox() {
  return (
    <AreaChart
      width={750}
      height={300}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#183059"
        fill="#8884d8"
        style={{
            // background:`linear-gradient(190.67deg, rgba(24, 48, 89, 0.16) 7.93%, rgba(209, 214, 222, 0) 68.88%)`
        }}
        fillOpacity={0.1}
      />
      <Area
        type={cardinal}
        dataKey="uv"
        stroke="#183059"
        fill="#183059"
        fillOpacity={0.1}
      />
    </AreaChart>
  );
}
