"use client";
/* Displays a pieshart showing disk usage, and the numerical free space/used space */

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import InfoProps from "../module/sysInfoProps";

Chart.register(CategoryScale);

export default function Disk({ size, free, label }: InfoProps) {
  /* data doesn't need to be reactive */
  const data = {
    labels: ["Free Space"],
    datasets: [
      {
        data: [free, size],
        backgroundColor: ["rgba(0, 0, 180, 1)", "rgba(200, 0, 60, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 12,
          },
        },
      },
    },
  };
  return (
    <div>
      <h4 className="mb-2">
        {label} Free Space: {free} GB
      </h4>
      <div>
        <Pie data={data} options={options} className="h-36" />
      </div>
    </div>
  );
}
