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
  score: number;
}

export default function IndicatorChart() {
  const [data, setData] = useState<IndicatorDatum[]>([]);

  useEffect(() => {
    fetch("/mock-data.json")
      .then((r) => r.json())
      .then((json: IndicatorDatum[]) => setData(json))
      .catch(() =>
        setData([
          { name: "Hydration", score: 78 },
          { name: "Sleep", score: 64 },
          { name: "Mood", score: 85 },
          { name: "Mobility", score: 57 },
        ]),
      );
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto h-80 bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-semibold mb-2">Current Indicators</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
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
