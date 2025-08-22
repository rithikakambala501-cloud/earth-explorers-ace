import { LessonCard } from "./LessonCard";
import planktonHeroes from "@/assets/plankton-heroes.png";

const lessonsData = [
  {
    title: "Meet the Plankton Heroes",
    description: "Discover the tiny superheroes living in our oceans! Learn how these microscopic creatures help keep our planet healthy and why they're so important.",
    duration: "15 min",
    difficulty: "Beginner" as const,
    completedBy: 12500,
    image: planktonHeroes,
    icon: "🦠",
    color: "bg-accent"
  },
  {
    title: "Satellites See Colors",
    description: "Find out how satellites in space can see different colors in the ocean and what those colors tell us about ocean health and life.",
    duration: "20 min", 
    difficulty: "Beginner" as const,
    completedBy: 9800,
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
    icon: "🛰️",
    color: "bg-secondary"
  },
  {
    title: "Ocean Food Chain Adventure",
    description: "Journey through the amazing ocean food chain! See how tiny plankton feed bigger fish and how everything is connected in the sea.",
    duration: "25 min",
    difficulty: "Intermediate" as const,  
    completedBy: 8200,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    icon: "🐟",
    color: "bg-primary"
  },
  {
    title: "Atmosphere & Ocean Friends",
    description: "Explore how the air above and water below work together! Learn about the invisible connections between our atmosphere and oceans.",
    duration: "18 min",
    difficulty: "Intermediate" as const,
    completedBy: 7100,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", 
    icon: "🌤️",
    color: "bg-space-medium"
  },
  {
    title: "Climate Change Detective",
    description: "Become a climate detective! Use satellite data to understand how our oceans are changing and what we can do to help protect them.",
    duration: "30 min",
    difficulty: "Advanced" as const,
    completedBy: 5900,
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop",
    icon: "🔍", 
    color: "bg-destructive"
  },
  {
    title: "Be an Ocean Guardian",
    description: "Learn how YOU can help protect our oceans! Discover simple actions that make a big difference for ocean health and marine life.",
    duration: "12 min",
    difficulty: "Beginner" as const,
    completedBy: 15200,
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
    icon: "🛡️",
    color: "bg-accent"
  }
];

export const LessonsGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-secondary mb-4">
            📚 Learning Adventures
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your
            <span className="block text-transparent bg-gradient-ocean bg-clip-text">
              Ocean Mission!
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each lesson is a fun adventure that teaches you amazing facts about our oceans using real NASA satellite data. 
            Pick one that looks interesting and start exploring!
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {lessonsData.map((lesson, index) => (
            <div 
              key={lesson.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <LessonCard 
                {...lesson}
                onClick={() => {
                  console.log(`Starting lesson: ${lesson.title}`);
                  // TODO: Navigate to lesson page
                }}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to become an Ocean Explorer? 🌊
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full">
              <span className="text-2xl">🏆</span>
              <span className="font-medium">Earn badges as you learn!</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full">
              <span className="text-2xl">👥</span>
              <span className="font-medium">Join 50,000+ young explorers!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};