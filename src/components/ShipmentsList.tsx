
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Package, Clock, Truck, Eye } from "lucide-react";

const ShipmentsList = () => {
  const shipments = [
    {
      id: "SH-2024-001",
      origin: "Los Angeles, CA",
      destination: "Phoenix, AZ",
      status: "In Transit",
      driver: "John Martinez",
      truck: "TRK-001",
      eta: "2 hours",
      cargo: "Electronics",
      priority: "High"
    },
    {
      id: "SH-2024-002",
      origin: "Seattle, WA",
      destination: "Portland, OR",
      status: "Delivered",
      driver: "Sarah Johnson",
      truck: "TRK-005",
      eta: "Complete",
      cargo: "Food Products",
      priority: "Medium"
    },
    {
      id: "SH-2024-003",
      origin: "Chicago, IL",
      destination: "Detroit, MI",
      status: "Loading",
      driver: "Mike Wilson",
      truck: "TRK-003",
      eta: "4 hours",
      cargo: "Manufacturing Parts",
      priority: "Low"
    },
    {
      id: "SH-2024-004",
      origin: "Houston, TX",
      destination: "Dallas, TX",
      status: "Delayed",
      driver: "Lisa Chen",
      truck: "TRK-007",
      eta: "6 hours",
      cargo: "Medical Supplies",
      priority: "High"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Transit":
        return "bg-blue-100 text-blue-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Loading":
        return "bg-yellow-100 text-yellow-800";
      case "Delayed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Active Shipments
        </CardTitle>
        <CardDescription>
          Track and manage all your shipments in real-time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {shipments.map((shipment) => (
            <div key={shipment.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{shipment.id}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {shipment.origin} → {shipment.destination}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge className={getPriorityColor(shipment.priority)}>
                    {shipment.priority}
                  </Badge>
                  <Badge className={getStatusColor(shipment.status)}>
                    {shipment.status}
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Driver:</span>
                  <p className="font-medium">{shipment.driver}</p>
                </div>
                <div>
                  <span className="text-gray-500">Truck:</span>
                  <p className="font-medium">{shipment.truck}</p>
                </div>
                <div>
                  <span className="text-gray-500">Cargo:</span>
                  <p className="font-medium">{shipment.cargo}</p>
                </div>
                <div>
                  <span className="text-gray-500">ETA:</span>
                  <p className="font-medium flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {shipment.eta}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end mt-3">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ShipmentsList;
