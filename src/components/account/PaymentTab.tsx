import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, PlusCircle } from "lucide-react";

// Mock data types
type PaymentMethod = {
  id: number;
  cardType: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
};

interface PaymentTabProps {
  paymentMethods: PaymentMethod[];
}

const PaymentTab = ({ paymentMethods }: PaymentTabProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Manage your saved payment options.</CardDescription>
        </div>
        <Button variant="outline">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New Card
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {paymentMethods.map((card) => (
          <Card key={card.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CreditCard className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="font-semibold">{card.cardType} ending in {card.last4}</p>
                <p className="text-sm text-muted-foreground">Expires {card.expiry}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {card.isDefault && <Badge>Default</Badge>}
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default PaymentTab;
