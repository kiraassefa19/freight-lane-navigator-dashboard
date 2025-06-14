
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CityToPortLoads from "./pages/CityToPortLoads";
import TruckFleet from "./pages/TruckFleet";
import RoutePlanning from "./pages/RouteKlanning";
import LoadTracking from "./pages/LoadTracking";
import PortSchedule from "./pages/PortSchedule";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/city-to-port-loads" element={<CityToPortLoads />} />
          <Route path="/truck-fleet" element={<TruckFleet />} />
          <Route path="/route-planning" element={<RoutePlanning />} />
          <Route path="/load-tracking" element={<LoadTracking />} />
          <Route path="/port-schedule" element={<PortSchedule />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
