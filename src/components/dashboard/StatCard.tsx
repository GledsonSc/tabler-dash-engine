import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  color?: "primary" | "success" | "warning" | "destructive" | "info";
}

export const StatCard = ({ title, value, icon: Icon, trend, color = "primary" }: StatCardProps) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    destructive: "bg-destructive/10 text-destructive",
    info: "bg-info/10 text-info",
  };

  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-foreground mb-2">{value}</h3>
          {trend && (
            <p className={`text-xs font-medium ${trend.isPositive ? "text-success" : "text-destructive"}`}>
              {trend.isPositive ? "↑" : "↓"} {trend.value}
            </p>
          )}
        </div>
        <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
