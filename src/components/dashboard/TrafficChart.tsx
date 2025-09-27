import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const trafficData = [
  { time: "00:00", volume: 15, speed: 65 },
  { time: "04:00", volume: 8, speed: 70 },
  { time: "08:00", volume: 85, speed: 25 },
  { time: "12:00", volume: 70, speed: 35 },
  { time: "16:00", volume: 95, speed: 20 },
  { time: "20:00", volume: 60, speed: 45 },
  { time: "23:59", volume: 25, speed: 60 },
];

export function TrafficChart() {
  return (
    <Card className="bg-gradient-card border-0 shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Traffic Flow Analysis</CardTitle>
        <p className="text-sm text-muted-foreground">Real-time traffic volume and average speed</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--card-foreground))"
                }}
              />
              <Line 
                type="monotone" 
                dataKey="volume" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                name="Traffic Volume (%)"
              />
              <Line 
                type="monotone" 
                dataKey="speed" 
                stroke="hsl(var(--accent))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                name="Avg Speed (mph)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}