import IndicatorChart from "./components/IndicatorChart";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Caregiver Dashboard – Sandbox</h1>
      <IndicatorChart />     {/* nothing fancy */}
    </div>
  );
}
