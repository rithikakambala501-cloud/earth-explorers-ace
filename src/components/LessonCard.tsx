import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users } from "lucide-react";

interface LessonCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  completedBy: number;
  image: string;
  icon: string;
  color: string;
  onClick?: () => void;
}

export const LessonCard = ({ 
  title, 
  description, 
  duration, 
  difficulty, 
  completedBy, 
  image, 
  icon, 
  color,
  onClick 
}: LessonCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-accent text-accent-foreground";
      case "Intermediate": return "bg-secondary text-secondary-foreground";
      case "Advanced": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group relative bg-gradient-card border-0 shadow-float hover:shadow-space transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
      {/* Accent Color Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${color}`}></div>
      
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Icon Overlay */}
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-2xl shadow-lg">
            {icon}
          </div>
        </div>
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4">
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{completedBy.toLocaleString()}+ students</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-satellite-glow text-satellite-glow" />
            <span>4.9</span>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={onClick}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl transition-bounce"
        >
          Start Learning 🚀
        </Button>
      </CardContent>
    </Card>
  );
};