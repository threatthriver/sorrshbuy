
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Notification } from "@/hooks/useNotifications";

interface NotificationBannerProps {
  notifications: Notification[];
  onDismiss: (id: string) => void;
}

const NotificationBanner = ({ notifications, onDismiss }: NotificationBannerProps) => {
  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return CheckCircle;
      case "error":
        return AlertCircle;
      case "warning":
        return AlertCircle;
      default:
        return Info;
    }
  };

  const getStyles = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return "bg-success/10 border-success/20 text-success-foreground";
      case "error":
        return "bg-destructive/10 border-destructive/20 text-destructive-foreground";
      case "warning":
        return "bg-warning/10 border-warning/20 text-warning-foreground";
      default:
        return "bg-primary/10 border-primary/20 text-primary-foreground";
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => {
        const Icon = getIcon(notification.type);
        return (
          <div
            key={notification.id}
            className={cn(
              "flex items-start gap-3 p-4 rounded-lg border shadow-lg animate-slide-in-right",
              getStyles(notification.type)
            )}
          >
            <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium">{notification.message}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 -mt-1 -mr-1"
              onClick={() => onDismiss(notification.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        );
      })}
    </div>
  );
};



export default NotificationBanner;
