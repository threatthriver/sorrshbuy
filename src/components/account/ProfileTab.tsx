import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Mock data types
type Profile = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
};

interface ProfileTabProps {
  profile: Profile;
  handleProfileChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ProfileTab = ({ profile, handleProfileChange }: ProfileTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" value={profile.firstName} onChange={handleProfileChange} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" value={profile.lastName} onChange={handleProfileChange} />
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={profile.email} onChange={handleProfileChange} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" value={profile.phone} onChange={handleProfileChange} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" value={profile.bio} onChange={handleProfileChange} rows={4} />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileTab;
