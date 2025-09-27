import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Info, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  title: string;
  description: string;
  type: "critical" | "warning" | "info";
  timestamp: string;
  location: string;
}

const alerts: Alert[] = [
  {
    id: "1",
    title: "High Traffic Congestion",
    description: "Severe traffic detected on Main St & 5th Ave intersection",
    type: "critical",
    timestamp: "2 min ago",
    location: "Downtown District"
  },
  {
    id: "2", 
    title: "Air Quality Alert",
    description: "PM2.5 levels above normal threshold in Industrial Zone",
    type: "warning",
    timestamp: "15 min ago",
    location: "Industrial Zone"
  },
  {
    id: "3",
    title: "Utility Maintenance Complete",
    description: "Power grid maintenance completed successfully",
    type: "info",
    timestamp: "1 hour ago", 
    location: "North Sector"
  }
];

export function AlertPanel() {
  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "info":
        return <Info className="w-4 h-4 text-primary" />;
    }
  };

  const getAlertBadge = (type: Alert["type"]) => {
    const styles = {
      critical: "bg-destructive/10 text-destructive border-destructive/20",
      warning: "bg-warning/10 text-warning border-warning/20",
      info: "bg-primary/10 text-primary border-primary/20"
    };

    return (
      <Badge variant="outline" className={cn("text-xs", styles[type])}>
        {type.toUpperCase()}
      </Badge>
    );
  };

  return (
    <Card className="bg-gradient-card border-0 shadow-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Active Alerts</CardTitle>
        <Badge variant="secondary">{alerts.length} Active</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
          >
            {getAlertIcon(alert.type)}
            
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-foreground">{alert.title}</h4>
                {getAlertBadge(alert.type)}
              </div>
              
              <p className="text-xs text-muted-foreground">{alert.description}</p>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {alert.timestamp}
                </span>
                <span>{alert.location}</span>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="text-xs">
              View
            </Button>
          </div>
        ))}
        
        <Button variant="outline" className="w-full mt-4">
          View All Alerts
        </Button>
      </CardContent>
    </Card>
  );
}