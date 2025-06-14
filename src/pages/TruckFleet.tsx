
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Fuel, Wrench, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TruckFleet = () => {
  const trucks = [
    {
      id: "TRK-205",
      driver: "John Smith",
      status: "In Transit",
      location: "Highway 101",
      fuel: 75,
      maintenance: "Good"
    },
    {
      id: "TRK-108", 
      driver: "Maria Garcia",
      status: "Loading",
      location: "San Francisco Port",
      fuel: 90,
      maintenance: "Good"
    },
    {
      id: "TRK-312",
      driver: "David Johnson", 
      status: "Available",
      location: "Sacramento Depot",
      fuel: 45,
      maintenance: "Due Soon"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <DashboardHeader />
          <main className="container mx-auto px-4 py-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Truck Fleet</h1>
              <p className="text-gray-600">Monitor and manage your freight truck fleet</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Trucks</CardTitle>
                  <Truck className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-xs text-muted-foreground">Fleet size</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">38</div>
                  <p className="text-xs text-muted-foreground">Currently operational</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Maintenance</CardTitle>
                  <Wrench className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">In maintenance</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Fuel Efficiency</CardTitle>
                  <Fuel className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7.2</div>
                  <p className="text-xs text-muted-foreground">MPG average</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Fleet Status</CardTitle>
                <CardDescription>Real-time status of your truck fleet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trucks.map((truck) => (
                    <div key={truck.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Truck className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{truck.id}</h3>
                          <p className="text-sm text-gray-600">Driver: {truck.driver}</p>
                          <p className="text-sm text-gray-500">{truck.location}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <Badge 
                          variant={truck.status === "In Transit" ? "default" : truck.status === "Loading" ? "secondary" : "outline"}
                        >
                          {truck.status}
                        </Badge>
                        <p className="text-sm">Fuel: {truck.fuel}%</p>
                        <p className={`text-xs ${truck.maintenance === "Good" ? "text-green-600" : "text-orange-600"}`}>
                          {truck.maintenance}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default TruckFleet;
