import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Trash2 } from "lucide-react";

// Mock data types
type Notification = {
  id: number;
  message: string;
  time: string;
  read: boolean;
};

interface NotificationsTabProps {
  notifications: Notification[];
  handleMarkAsRead: (id: number) => void;
  handleDeleteNotification: (id: number) => void;
  handleMarkAllAsRead: () => void;
  handleClearAll: () => void;
}

const NotificationsTab = ({ 
  notifications, 
  handleMarkAsRead, 
  handleDeleteNotification, 
  handleMarkAllAsRead, 
  handleClearAll 
}: NotificationsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage your account notifications.</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleMarkAllAsRead}>Mark all as read</Button>
            <Button variant="destructive" size="sm" onClick={handleClearAll}>Clear all</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {notifications.length > 0 ? (
          notifications.map((n) => (
            <div key={n.id} className={`flex items-center justify-between p-4 border-b last:border-b-0 ${!n.read ? 'bg-primary/5' : ''}`}>
              <div>
                <p className={`font-medium ${!n.read ? 'text-foreground' : 'text-muted-foreground'}`}>{n.message}</p>
                <p className="text-sm text-muted-foreground">{n.time}</p>
              </div>
              <div className="flex items-center gap-2">
                {!n.read && (
                  <Button variant="ghost" size="sm" onClick={() => handleMarkAsRead(n.id)}>
                    Mark as read
                  </Button>
                )}
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDeleteNotification(n.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <Bell className="h-12 w-12 mx-auto mb-4" />
            <p>You have no new notifications.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationsTab;
