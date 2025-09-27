import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  description?: string;
  status?: "good" | "warning" | "critical";
  trend?: number[];
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  description,
  status = "good",
  trend = []
}: MetricCardProps) {
  const statusColors = {
    good: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20", 
    critical: "bg-destructive/10 text-destructive border-destructive/20"
  };

  const changeColors = {
    positive: "text-success",
    negative: "text-destructive", 
    neutral: "text-muted-foreground"
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-glass transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="flex items-center gap-2">
          {status && (
            <Badge variant="outline" className={cn("text-xs", statusColors[status])}>
              {status.toUpperCase()}
            </Badge>
          )}
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="w-4 h-4 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div className="text-2xl font-bold text-foreground">{value}</div>
          
          <div className="flex items-center justify-between">
            <span className={cn("text-xs font-medium", changeColors[changeType])}>
              {changeType === "positive" ? "↗" : changeType === "negative" ? "↘" : "→"} {change}
            </span>
            
            {trend.length > 0 && (
              <div className="flex items-end gap-1 h-8">
                {trend.map((point, index) => (
                  <div
                    key={index}
                    className="w-1 bg-primary/30 rounded-t"
                    style={{ height: `${Math.max(4, point * 100)}%` }}
                  />
                ))}
              </div>
            )}
          </div>
          
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}