"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    {
      name: "Open",
      value: open,
      color: "red",
    },
    {
      name: "In Progress",
      value: inProgress,
      color: "purple",
    },
    {
      name: "Closed",
      value: closed,
      color: "green",
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="value"
          className="bg-[--accent-9]"
          activeBar={<Rectangle stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IssueChart;
