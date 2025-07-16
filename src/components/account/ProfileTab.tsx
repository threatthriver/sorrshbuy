import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Camera, Save } from "lucide-react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const profileSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().refine(phone => /^(\+\d{1,3}[- ]?)?\d{10}$/.test(phone), 'Invalid phone number'),
  bio: z.string().max(200, 'Bio must be 200 characters or less').optional(),
  avatar: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface ProfileTabProps {
  profile: ProfileFormData;
  handleProfileChange: (data: ProfileFormData) => void;
}

const ProfileTab = ({ profile, handleProfileChange }: ProfileTabProps) => {
  const [saving, setSaving] = useState(false);
  
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: profile,
  });

  const onSubmit = (data: ProfileFormData) => {
    setSaving(true);
    console.log('Profile data submitted:', data);
    // Simulate API call
    setTimeout(() => {
      handleProfileChange(data);
      setSaving(false);
      // Here you might want to show a toast notification for success
    }, 1000);
  };
  
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription className="mt-1.5">Update your personal details and profile picture</CardDescription>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="h-20 w-20 border-2 border-primary/20 ring-2 ring-background">
                  {profile.avatar ? (
                    <AvatarImage src={profile.avatar} alt={profile.firstName} />
                  ) : (
                    <AvatarFallback className="text-lg bg-gradient-to-br from-primary/80 to-secondary/80 text-primary-foreground">
                      {getInitials(profile.firstName, profile.lastName)}
                    </AvatarFallback>
                  )}
                </Avatar>
                <Button type="button" variant="outline" size="sm" className="h-9 gap-1">
                  <Camera className="h-4 w-4" />
                  <span>Change</span>
                </Button>
              </div>
            </div>
            <Separator className="mt-4" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField name="firstName" control={form.control} render={({ field }) => (<FormItem><FormLabel>First Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
              <FormField name="lastName" control={form.control} render={({ field }) => (<FormItem><FormLabel>Last Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            </div>
            <FormField name="email" control={form.control} render={({ field }) => (<FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField name="phone" control={form.control} render={({ field }) => (<FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField name="bio" control={form.control} render={({ field }) => (<FormItem><FormLabel>Bio</FormLabel><FormControl><Textarea rows={4} className="resize-none" placeholder="Tell us a little about yourself..." {...field} /></FormControl><FormMessage /></FormItem>)} />
          </CardContent>
          <CardFooter>
            <Button type="button" variant="outline" className="mr-2" onClick={() => form.reset(profile)}>Cancel</Button>
            <Button type="submit" disabled={saving} className="px-6">
              {saving ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </span>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default ProfileTab;
