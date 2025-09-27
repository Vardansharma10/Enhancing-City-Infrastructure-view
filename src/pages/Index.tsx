import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { AlertPanel } from "@/components/dashboard/AlertPanel";
import { Car, Wind, Zap, MessageSquare, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  // Sample data for metrics
  const metrics = [
    {
      title: "Traffic Flow",
      value: "75%",
      change: "+5% from yesterday",
      changeType: "positive" as const,
      icon: Car,
      status: "warning" as const,
      description: "Peak hour congestion detected",
      trend: [0.3, 0.5, 0.7, 0.6, 0.8, 0.9, 0.75]
    },
    {
      title: "Air Quality Index",
      value: "42",
      change: "-8 from yesterday",
      changeType: "positive" as const,
      icon: Wind,
      status: "good" as const,
      description: "Good air quality levels",
      trend: [0.6, 0.4, 0.3, 0.4, 0.2, 0.3, 0.42]
    },
    {
      title: "Energy Consumption",
      value: "1.2MW",
      change: "+12% this month",
      changeType: "negative" as const,
      icon: Zap,
      status: "warning" as const,
      description: "Above average usage",
      trend: [0.8, 0.9, 0.95, 1.0, 1.1, 1.15, 1.2]
    },
    {
      title: "Citizen Reports",
      value: "23",
      change: "+3 today",
      changeType: "neutral" as const,
      icon: MessageSquare,
      status: "good" as const,
      description: "Active community engagement",
      trend: [0.1, 0.15, 0.12, 0.18, 0.2, 0.25, 0.23]
    }
  ];

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Smart City Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Real-time monitoring and analytics for urban infrastructure
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Last updated</p>
          <p className="text-sm font-medium">
            {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts and Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrafficChart />
        <AlertPanel />
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Population Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Active Population</span>
                <span className="font-medium">1.2M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Daily Commuters</span>
                <span className="font-medium">340K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Tourist Traffic</span>
                <span className="font-medium">45K</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Predictive Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                <p className="text-sm font-medium text-warning">Traffic Peak Prediction</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Heavy congestion expected at 5:30 PM on Highway 101
                </p>
              </div>
              <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                <p className="text-sm font-medium text-success">Weather Forecast</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Clear skies predicted, optimal conditions for outdoor activities
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Traffic Sensors</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span className="text-sm font-medium">Online</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Air Quality Monitors</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span className="text-sm font-medium">Online</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Utility Grid</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-warning"></div>
                  <span className="text-sm font-medium">Maintenance</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;