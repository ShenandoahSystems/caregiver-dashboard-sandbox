// src/components/IndicatorChart.tsx
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

interface IndicatorDatum {
  name: string;
  score: number;      // 0–100
}

export function IndicatorChart() {
  const [data, setData] = useState<IndicatorDatum[]>([]);

  useEffect(() => {
    // public/mock-data.json -> [{ "name": "Hydration", "score": 78 }, ...]
    fetch("/mock-data.json")
      .then((r) => r.json())
      .then(setData)
      .catch(() => {
        // fallback demo data
        setData([
          { name: "Hydration", score: 78 },
          { name: "Sleep", score: 64 },
          { name: "Mood", score: 85 },
          { name: "Mobility", score: 57 },
        ]);
      });
  }, []);

  return (
    <div className="w-full h-80 p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Current Indicators</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="score" fill="#6366f1" radius={[4, 4, 0, 0]}>
            <LabelList dataKey="score" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IndicatorChart;
