import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield, Gift, FileText, Key, Lock, Download } from "lucide-react";

const SettingsTab = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
            </div>
            <Switch />
          </div>
          <Button variant="outline" className="w-full">
            <Key className="h-4 w-4 mr-2" />
            Change Password
          </Button>
          <Button variant="outline" className="w-full">
            <Lock className="h-4 w-4 mr-2" />
            Manage Login Sessions
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Rewards & Loyalty
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">1,247</div>
            <p className="text-sm text-muted-foreground">Points Available</p>
          </div>
          <Button className="w-full">Redeem Points</Button>
          <Button variant="outline" className="w-full">View Rewards Catalog</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Data & Privacy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Download My Data
          </Button>
          <Button variant="outline" className="w-full">
            <FileText className="h-4 w-4 mr-2" />
            Privacy Settings
          </Button>
          <Button variant="destructive" className="w-full">
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsTab;
