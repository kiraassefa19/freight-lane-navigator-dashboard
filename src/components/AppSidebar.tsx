
import { 
  Truck, 
  Package, 
  MapPin, 
  Route, 
  Users, 
  BarChart3, 
  Settings, 
  Ship,
  Navigation,
  Clock,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "City to Port Loads",
    url: "/city-to-port-loads",
    icon: Ship,
  },
  {
    title: "Truck Fleet",
    url: "/truck-fleet",
    icon: Truck,
  },
  {
    title: "Route Planning",
    url: "/route-planning",
    icon: Route,
  },
  {
    title: "Load Tracking",
    url: "/load-tracking",
    icon: Navigation,
  },
  {
    title: "Port Schedule",
    url: "/port-schedule",
    icon: Clock,
  },
];

const managementItems = [
  {
    title: "Drivers",
    url: "#",
    icon: Users,
  },
  {
    title: "Shipments",
    url: "#",
    icon: Package,
  },
  {
    title: "Locations",
    url: "#",
    icon: MapPin,
  },
  {
    title: "Documents",
    url: "#",
    icon: FileText,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center space-x-2 px-2 py-1">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FL</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">FreightLane</h1>
            <p className="text-xs text-sidebar-foreground/70">City to Port Logistics</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Operations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
