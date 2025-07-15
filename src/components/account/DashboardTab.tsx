import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Heart, Bell } from 'lucide-react';

// Mock data types - in a real app, these would be defined in a types file
type Order = { id: string; items: number; total: string; status: string; date: string; };
type SavedItem = { name: string; price: string; image: string; };
type Notification = { message: string; time: string; };

interface DashboardTabProps {
  recentOrders: Order[];
  savedItems: SavedItem[];
  dashboardNotifications: Notification[];
}

const DashboardTab = ({ recentOrders, savedItems, dashboardNotifications }: DashboardTabProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Recent Orders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.items} items - {order.date}</p>
                </div>
                <Badge variant={order.status === 'Delivered' ? 'success' : 'secondary'}>{order.status}</Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full">View All Orders</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Saved Items
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {savedItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="h-12 w-12 rounded-md object-cover" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.price}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">View Wishlist</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {dashboardNotifications.map((notification, index) => (
              <div key={index}>
                <p className="text-sm font-medium">{notification.message}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            ))}
            <Button variant="outline" className="w-full">View All Notifications</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardTab;
