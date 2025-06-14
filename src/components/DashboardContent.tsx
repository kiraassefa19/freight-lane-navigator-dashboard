
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Truck, Ship, Package, Clock, MapPin, TrendingUp } from "lucide-react";
import CityToPortLoads from "@/components/CityToPortLoads";
import PortOperations from "@/components/PortOperations";

const DashboardContent = () => {
  const kpiData = [
    {
      title: "Active City-Port Routes",
      value: "24",
      change: "+3 from yesterday",
      icon: Truck,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Port-Bound Loads",
      value: "156",
      change: "+12% this week",
      icon: Ship,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "In Transit to Port",
      value: "87",
      change: "Real-time tracking",
      icon: Package,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "Avg Transit Time",
      value: "4.2h",
      change: "-15min improved",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-6 space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {kpi.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
              <p className={`text-xs ${kpi.color} flex items-center mt-1`}>
                <TrendingUp className="h-3 w-3 mr-1" />
                {kpi.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CityToPortLoads />
        <PortOperations />
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-12 bg-blue-600 hover:bg-blue-700">
              <Package className="h-4 w-4 mr-2" />
              New Port Load
            </Button>
            <Button variant="outline" className="h-12">
              <Truck className="h-4 w-4 mr-2" />
              Assign Truck
            </Button>
            <Button variant="outline" className="h-12">
              <Ship className="h-4 w-4 mr-2" />
              Port Schedule
            </Button>
            <Button variant="outline" className="h-12">
              <MapPin className="h-4 w-4 mr-2" />
              Track Route
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default DashboardContent;
