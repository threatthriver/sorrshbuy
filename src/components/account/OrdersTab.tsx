import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data types
type Order = {
  id: string;
  items: number;
  total: string;
  status: string;
  date: string;
};

interface OrdersTabProps {
  recentOrders: Order[];
}

const OrdersTab = ({ recentOrders }: OrdersTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Orders</CardTitle>
        <CardDescription>View your order history and track current shipments.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentOrders.map((order) => (
          <Card key={order.id}>
            <CardContent className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div className="flex-1">
                <p className="font-semibold text-primary">{order.id}</p>
                <p className="text-sm text-muted-foreground">{order.items} items - Placed on {order.date}</p>
                <p className="font-bold text-lg mt-1">{order.total}</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <Badge variant={
                  order.status === 'Delivered' ? 'success' :
                  order.status === 'Shipped' ? 'default' :
                  'secondary'
                } className="w-full sm:w-auto justify-center">{order.status}</Badge>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row sm:justify-end gap-2">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">Track Order</Button>
              <Button variant="ghost" size="sm" className="w-full sm:w-auto">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default OrdersTab;
