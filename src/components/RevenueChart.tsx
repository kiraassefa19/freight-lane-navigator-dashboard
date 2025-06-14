
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TrendingUp } from "lucide-react";

const RevenueChart = () => {
  const revenueData = [
    { month: "Jan", revenue: 45000, shipments: 98 },
    { month: "Feb", revenue: 52000, shipments: 112 },
    { month: "Mar", revenue: 48000, shipments: 103 },
    { month: "Apr", revenue: 61000, shipments: 127 },
    { month: "May", revenue: 58000, shipments: 118 },
    { month: "Jun", revenue: 67000, shipments: 135 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Revenue & Shipments
        </CardTitle>
        <CardDescription>Monthly performance overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
              <XAxis 
                dataKey="month" 
                className="text-xs"
                stroke="#6b7280"
              />
              <YAxis 
                className="text-xs"
                stroke="#6b7280"
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [
                  name === 'revenue' ? `$${value?.toLocaleString()}` : value,
                  name === 'revenue' ? 'Revenue' : 'Shipments'
                ]}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#2563eb" 
                strokeWidth={3}
                dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#2563eb', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="shipments" 
                stroke="#f97316" 
                strokeWidth={3}
                dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#f97316', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span>Shipments</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
