
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Truck, Fuel, Settings, CheckCircle, AlertTriangle, Clock } from "lucide-react";

interface FleetOverviewProps {
  detailed?: boolean;
}

const FleetOverview = ({ detailed = false }: FleetOverviewProps) => {
  const fleetData = [
    {
      id: "TRK-001",
      driver: "John Martinez",
      status: "Active",
      location: "Phoenix, AZ",
      fuelLevel: 75,
      mileage: "234,567",
      maintenance: "Good"
    },
    {
      id: "TRK-002",
      driver: "Available",
      status: "Available",
      location: "Los Angeles, CA",
      fuelLevel: 90,
      mileage: "187,432",
      maintenance: "Good"
    },
    {
      id: "TRK-003",
      driver: "Mike Wilson",
      status: "Loading",
      location: "Chicago, IL",
      fuelLevel: 60,
      mileage: "298,123",
      maintenance: "Due"
    },
    {
      id: "TRK-004",
      driver: "Available",
      status: "Maintenance",
      location: "Depot",
      fuelLevel: 45,
      mileage: "345,678",
      maintenance: "In Progress"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Loading":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case "Maintenance":
        return <Settings className="h-4 w-4 text-red-600" />;
      default:
        return <Truck className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Available":
        return "bg-blue-100 text-blue-800";
      case "Loading":
        return "bg-yellow-100 text-yellow-800";
      case "Maintenance":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getMaintenanceColor = (maintenance: string) => {
    switch (maintenance) {
      case "Good":
        return "text-green-600";
      case "Due":
        return "text-yellow-600";
      case "In Progress":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  if (!detailed) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            Fleet Status
          </CardTitle>
          <CardDescription>Real-time fleet monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-sm text-gray-600">Active</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">3</div>
                <div className="text-sm text-gray-600">Loading</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">2</div>
                <div className="text-sm text-gray-600">Maintenance</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-5 w-5" />
          Fleet Management
        </CardTitle>
        <CardDescription>Detailed fleet information and status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {fleetData.map((truck) => (
            <div key={truck.id} className="p-4 border rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {getStatusIcon(truck.status)}
                  <div>
                    <h3 className="font-semibold">{truck.id}</h3>
                    <p className="text-sm text-gray-600">{truck.driver}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(truck.status)}>
                  {truck.status}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Location:</span>
                  <p className="font-medium">{truck.location}</p>
                </div>
                <div>
                  <span className="text-gray-500">Mileage:</span>
                  <p className="font-medium">{truck.mileage} mi</p>
                </div>
                <div>
                  <span className="text-gray-500">Maintenance:</span>
                  <p className={`font-medium ${getMaintenanceColor(truck.maintenance)}`}>
                    {truck.maintenance}
                  </p>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="flex items-center gap-1">
                    <Fuel className="h-3 w-3" />
                    Fuel Level
                  </span>
                  <span>{truck.fuelLevel}%</span>
                </div>
                <Progress value={truck.fuelLevel} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FleetOverview;
