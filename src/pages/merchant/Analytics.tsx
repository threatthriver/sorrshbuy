import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <Card>
        <CardHeader>
          <CardTitle>Sales Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Analytics charts and data will be here.</p>
          {/* Placeholder for charts */}
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
