
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Truck, Clock, MapPin } from "lucide-react";

const CityToPortLoads = () => {
  const loads = [
    {
      id: "CTP-001",
      origin: "Downtown Warehouse",
      destination: "Port of Long Beach",
      truck: "TRK-45A",
      driver: "Mike Johnson",
      status: "In Transit",
      progress: 65,
      eta: "2:30 PM",
      cargo: "Electronics",
      weight: "12.5 tons"
    },
    {
      id: "CTP-002", 
      origin: "Industrial District",
      destination: "Port of Los Angeles",
      truck: "TRK-23B",
      driver: "Sarah Wilson",
      status: "Loading",
      progress: 15,
      eta: "4:45 PM",
      cargo: "Textiles",
      weight: "8.2 tons"
    },
    {
      id: "CTP-003",
      origin: "City Center",
      destination: "Port of Long Beach", 
      truck: "TRK-67C",
      driver: "Carlos Rodriguez",
      status: "Delivered",
      progress: 100,
      eta: "Completed",
      cargo: "Machinery",
      weight: "15.8 tons"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Transit": return "bg-blue-500";
      case "Loading": return "bg-yellow-500";
      case "Delivered": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-5 w-5" />
          City to Port Loads
        </CardTitle>
        <CardDescription>Active freight movements to port terminals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {loads.map((load) => (
            <div key={load.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-medium">{load.id}</span>
                  <Badge className={getStatusColor(load.status)}>
                    {load.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="h-3 w-3" />
                  {load.eta}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">From</p>
                  <p className="font-medium">{load.origin}</p>
                </div>
                <div>
                  <p className="text-gray-500">To</p>
                  <p className="font-medium">{load.destination}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Truck</p>
                  <p className="font-medium">{load.truck}</p>
                </div>
                <div>
                  <p className="text-gray-500">Cargo</p>
                  <p className="font-medium">{load.cargo}</p>
                </div>
                <div>
                  <p className="text-gray-500">Weight</p>
                  <p className="font-medium">{load.weight}</p>
                </div>
              </div>

              {load.status !== "Delivered" && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{load.progress}%</span>
                  </div>
                  <Progress value={load.progress} className="h-2" />
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CityToPortLoads;
