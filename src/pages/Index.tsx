
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, Package, DollarSign, Clock, MapPin, Users, TrendingUp, AlertTriangle, CheckCircle, Navigation } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import ShipmentsList from "@/components/ShipmentsList";
import FleetOverview from "@/components/FleetOverview";
import RevenueChart from "@/components/RevenueChart";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const kpiData = [
    {
      title: "Total Revenue",
      value: "$234,750",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Active Shipments",
      value: "127",
      change: "+8.2%",
      icon: Package,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Fleet Utilization",
      value: "84%",
      change: "+5.1%",
      icon: Truck,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "On-Time Delivery",
      value: "96.2%",
      change: "+2.8%",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
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
                  {kpi.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="shipments">Shipments</TabsTrigger>
            <TabsTrigger value="fleet">Fleet</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart />
              <FleetOverview />
            </div>
            
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-12 bg-blue-600 hover:bg-blue-700">
                    <Package className="h-4 w-4 mr-2" />
                    New Shipment
                  </Button>
                  <Button variant="outline" className="h-12">
                    <Truck className="h-4 w-4 mr-2" />
                    Assign Driver
                  </Button>
                  <Button variant="outline" className="h-12">
                    <MapPin className="h-4 w-4 mr-2" />
                    Track Route
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipments">
            <ShipmentsList />
          </TabsContent>

          <TabsContent value="fleet">
            <FleetOverview detailed />
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart />
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Key operational statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Fuel Efficiency</span>
                      <span>7.2 MPG</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Driver Performance</span>
                      <span>94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Customer Satisfaction</span>
                      <span>4.8/5</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
