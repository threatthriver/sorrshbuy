import {
  File,
  MoreHorizontal,
  ListFilter,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

type OrderStatus = "Fulfilled" | "Pending" | "Canceled";

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  status: OrderStatus;
  date: string;
  amount: number;
}

const orders: Order[] = [
  { id: "ORD-001", customerName: "Liam Johnson", customerEmail: "liam@example.com", status: "Fulfilled", date: "2023-11-23", amount: 250.00 },
  { id: "ORD-002", customerName: "Olivia Smith", customerEmail: "olivia@example.com", status: "Pending", date: "2023-11-22", amount: 150.75 },
  { id: "ORD-003", customerName: "Noah Williams", customerEmail: "noah@example.com", status: "Fulfilled", date: "2023-11-21", amount: 350.00 },
  { id: "ORD-004", customerName: "Emma Brown", customerEmail: "emma@example.com", status: "Canceled", date: "2023-11-20", amount: 450.50 },
  { id: "ORD-005", customerName: "Ava Jones", customerEmail: "ava@example.com", status: "Fulfilled", date: "2023-11-19", amount: 550.00 },
  { id: "ORD-006", customerName: "Lucas Garcia", customerEmail: "lucas@example.com", status: "Pending", date: "2023-11-18", amount: 50.25 },
];

const getStatusBadgeVariant = (status: OrderStatus) => {
  switch (status) {
    case 'Fulfilled': return 'default';
    case 'Pending': return 'secondary';
    case 'Canceled': return 'destructive';
    default: return 'outline';
  }
};

const Orders = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">
            Manage your customer orders.
          </p>
        </div>
        <div className="flex items-center gap-2">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Fulfilled
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Canceled</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
        </div>
      </div>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden sm:table-cell">Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div className="font-medium">{order.customerName}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {order.customerEmail}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(order.status)}>{order.status}</Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{order.date}</TableCell>
                  <TableCell className="text-right">${order.amount.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Order Details</DropdownMenuItem>
                        <DropdownMenuItem>View Customer Profile</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Cancel Order
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-{orders.length}</strong> of <strong>{orders.length}</strong> orders
          </div>
          <Pagination className="ml-auto">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Orders;
