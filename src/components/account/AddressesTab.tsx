import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, PlusCircle } from "lucide-react";

// Mock data types
type Address = {
  id: number;
  type: string;
  name: string;
  address: string;
  isDefault: boolean;
};

interface AddressesTabProps {
  addresses: Address[];
}

const AddressesTab = ({ addresses }: AddressesTabProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <CardTitle>My Addresses</CardTitle>
          <CardDescription>Manage your shipping addresses.</CardDescription>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New Address
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <Card key={addr.id} className="p-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {addr.type}
                </p>
                {addr.isDefault && <Badge>Default</Badge>}
              </div>
              <div className="text-sm text-muted-foreground">
                <p>{addr.name}</p>
                <p>{addr.address}</p>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default AddressesTab;
