
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ship, Clock, Package, AlertTriangle } from "lucide-react";

const PortOperations = () => {
  const portSchedule = [
    {
      port: "Port of Long Beach",
      terminal: "Terminal A",
      expectedArrivals: 8,
      currentLoad: "85%",
      nextSlot: "1:15 PM",
      status: "Normal",
      waitTime: "15 min"
    },
    {
      port: "Port of Los Angeles", 
      terminal: "Terminal C",
      expectedArrivals: 12,
      currentLoad: "92%",
      nextSlot: "2:45 PM",
      status: "Busy",
      waitTime: "35 min"
    },
    {
      port: "Port of Long Beach",
      terminal: "Terminal B",
      expectedArrivals: 5,
      currentLoad: "68%", 
      nextSlot: "12:30 PM",
      status: "Available",
      waitTime: "5 min"
    }
  ];

  const alerts = [
    {
      type: "Delay",
      message: "Terminal A experiencing 20min delays due to high volume",
      time: "10 min ago"
    },
    {
      type: "Update",
      message: "New time slot available at Terminal B - 12:30 PM",
      time: "25 min ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Normal": return "bg-green-500";
      case "Busy": return "bg-yellow-500";
      case "Available": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ship className="h-5 w-5" />
            Port Terminal Status
          </CardTitle>
          <CardDescription>Real-time port capacity and scheduling</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {portSchedule.map((port, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{port.port}</h4>
                    <p className="text-sm text-gray-500">{port.terminal}</p>
                  </div>
                  <Badge className={getStatusColor(port.status)}>
                    {port.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Expected Arrivals</p>
                    <p className="font-medium">{port.expectedArrivals} trucks</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Current Load</p>
                    <p className="font-medium">{port.currentLoad}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Next Available</p>
                    <p className="font-medium">{port.nextSlot}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Wait Time</p>
                    <p className="font-medium">{port.waitTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Port Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      {alert.type}
                    </Badge>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <p className="text-sm">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortOperations;
