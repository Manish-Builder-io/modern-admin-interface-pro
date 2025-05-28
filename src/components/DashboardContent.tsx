
import { MetricsCards } from "@/components/MetricsCards";
import { ChartsSection } from "@/components/ChartsSection";
import { RecentActivity } from "@/components/RecentActivity";

export function DashboardContent() {
  return (
    <main className="flex-1 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto space-y-6">
        <MetricsCards />
        <ChartsSection />
        <RecentActivity />
      </div>
    </main>
  );
}
