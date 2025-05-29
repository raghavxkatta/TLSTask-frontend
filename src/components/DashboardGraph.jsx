import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// Sample data: hours spent per day on the website
const sampleData = [
  { date: '2025-05-23', hours: 1.2 },
  { date: '2025-05-24', hours: 2.5 },
  { date: '2025-05-25', hours: 3.1 },
  { date: '2025-05-26', hours: 2.8 },
  { date: '2025-05-27', hours: 4.0 },
  { date: '2025-05-28', hours: 3.6 },
  { date: '2025-05-29', hours: 5.2 },
];

/**
 * DashboardGraph component renders a line chart of hours spent on the website.
 * @param {Array<{date: string, hours: number}>} props.data - Array of data points
 */
export default function DashboardGraph({ data = sampleData }) {
  return (
    <div className="w-full ml-5 h-80 p-4 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-xl font-semibold mb-4">Time Spent on Website</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value) => `${value} hrs`} />
          <Legend />
          <Line
            type="monotone"
            dataKey="hours"
            name="Hours"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
