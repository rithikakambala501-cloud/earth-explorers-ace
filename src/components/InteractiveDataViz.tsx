import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Waves, Microscope, Satellite, Sparkles } from "lucide-react";

// Mock NASA PACE data structure
const mockDataPoints = [
  { location: "Pacific Ocean", planktonCount: 850, oxygenLevel: 92, date: "2024-01-15" },
  { location: "Atlantic Ocean", planktonCount: 720, oxygenLevel: 89, date: "2024-01-15" },
  { location: "Indian Ocean", planktonCount: 650, oxygenLevel: 87, date: "2024-01-15" },
  { location: "Arctic Ocean", planktonCount: 420, oxygenLevel: 85, date: "2024-01-15" },
];

export const InteractiveDataViz = () => {
  const [selectedLocation, setSelectedLocation] = useState(mockDataPoints[0]);
  const [showFunFact, setShowFunFact] = useState(false);

  const getFunFact = (location: string) => {
    const facts = {
      "Pacific Ocean": "The Pacific has the most diverse plankton in the world! 🌈",
      "Atlantic Ocean": "Atlantic plankton help create the oxygen you breathe! 💨",
      "Indian Ocean": "These tiny heroes can be seen from space! 🛰️",
      "Arctic Ocean": "Arctic plankton are super tough cold-weather heroes! 🧊"
    };
    return facts[location as keyof typeof facts] || "Plankton are amazing!";
  };

  const getHealthLevel = (count: number) => {
    if (count > 800) return { label: "Super Healthy! 🌟", color: "bg-accent text-accent-foreground" };
    if (count > 600) return { label: "Healthy 💚", color: "bg-secondary text-secondary-foreground" };
    return { label: "Needs Help 🤔", color: "bg-destructive/20 text-destructive" };
  };

  return (
    <Card className="bg-gradient-card border-0 shadow-space overflow-hidden">
      <CardHeader className="bg-gradient-ocean text-white">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Satellite className="w-6 h-6" />
          Live Ocean Data from Space! 🛰️
        </CardTitle>
        <CardDescription className="text-white/90">
          Real NASA PACE satellite data made simple and fun for explorers like you!
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6">
        {/* Location Selector */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Waves className="w-5 h-5 text-secondary" />
            Choose Your Ocean to Explore:
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {mockDataPoints.map((point) => (
              <Button
                key={point.location}
                variant={selectedLocation.location === point.location ? "default" : "outline"}
                className={`p-4 h-auto transition-bounce ${
                  selectedLocation.location === point.location 
                    ? "bg-primary text-white shadow-glow" 
                    : "hover:bg-muted"
                }`}
                onClick={() => {
                  setSelectedLocation(point);
                  setShowFunFact(false);
                }}
              >
                <div className="text-center">
                  <div className="text-lg mb-1">{point.location.split(" ")[0]} 🌊</div>
                  <div className="text-xs opacity-75">{point.location}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Data Visualization */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Plankton Count */}
          <div className="bg-white rounded-2xl p-6 shadow-float">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Microscope className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Plankton Heroes Count</h4>
                <p className="text-sm text-muted-foreground">Tiny ocean superheroes detected!</p>
              </div>
            </div>
            
            {/* Visual Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Count: {selectedLocation.planktonCount}</span>
                <span>Max: 1000</span>
              </div>
              <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                <div 
                  className="h-full bg-gradient-ocean transition-all duration-1000 ease-out rounded-full"
                  style={{ width: `${(selectedLocation.planktonCount / 1000) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <Badge className={getHealthLevel(selectedLocation.planktonCount).color}>
              {getHealthLevel(selectedLocation.planktonCount).label}
            </Badge>
          </div>

          {/* Oxygen Level */}
          <div className="bg-white rounded-2xl p-6 shadow-float">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Ocean Oxygen Level</h4>
                <p className="text-sm text-muted-foreground">How much oxygen is in the water?</p>
              </div>
            </div>
            
            {/* Circular Progress */}
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-muted stroke-current"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-secondary stroke-current transition-all duration-1000 ease-out"
                    strokeWidth="3"
                    strokeDasharray={`${selectedLocation.oxygenLevel}, 100`}
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">{selectedLocation.oxygenLevel}%</span>
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm text-muted-foreground">
              Perfect for ocean life! 🐠
            </p>
          </div>
        </div>

        {/* Fun Fact Section */}
        <div className="text-center">
          <Button
            onClick={() => setShowFunFact(!showFunFact)}
            className="bg-accent hover:bg-accent/90 text-white rounded-xl px-8 py-3 transition-bounce hover:scale-105"
          >
            {showFunFact ? "Hide" : "Show"} Fun Fact! 🤔
          </Button>
          
          {showFunFact && (
            <div className="mt-4 p-4 bg-accent/10 rounded-2xl animate-slide-up">
              <p className="text-lg font-medium text-accent">
                {getFunFact(selectedLocation.location)}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};