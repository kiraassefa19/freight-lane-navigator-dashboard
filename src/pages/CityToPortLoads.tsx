
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ship, Truck, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CityToPortLoads = () => {
  const loads = [
    {
      id: "CTP-001",
      origin: "Los Angeles",
      destination: "Port of Long Beach",
      status: "In Transit",
      eta: "2:30 PM",
      driver: "John Smith",
      truck: "TRK-205"
    },
    {
      id: "CTP-002", 
      origin: "San Francisco",
      destination: "Port of Oakland",
      status: "Loading",
      eta: "4:15 PM",
      driver: "Maria Garcia",
      truck: "TRK-108"
    },
    {
      id: "CTP-003",
      origin: "Sacramento",
      destination: "Port of Stockton",
      status: "Dispatched",
      eta: "6:00 PM", 
      driver: "David Johnson",
      truck: "TRK-312"
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">City to Port Loads</h1>
              <p className="text-gray-600">Manage and track freight moving from cities to port terminals</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Loads</CardTitle>
                  <Ship className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+3 from yesterday</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">In Transit</CardTitle>
                  <Truck className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-muted-foreground">Currently moving</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Transit Time</CardTitle>
                  <Clock className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.2h</div>
                  <p className="text-xs text-muted-foreground">15min improvement</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Current City to Port Loads</CardTitle>
                <CardDescription>Real-time tracking of freight shipments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {loads.map((load) => (
                    <div key={load.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Ship className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{load.id}</h3>
                          <p className="text-sm text-gray-600 flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {load.origin} → {load.destination}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={load.status === "In Transit" ? "default" : load.status === "Loading" ? "secondary" : "outline"}
                        >
                          {load.status}
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">ETA: {load.eta}</p>
                        <p className="text-xs text-gray-500">{load.driver} • {load.truck}</p>
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

export default CityToPortLoads;
