import { HeroSection } from "@/components/HeroSection";
import { LessonsGrid } from "@/components/LessonsGrid";
import { InteractiveDataViz } from "@/components/InteractiveDataViz";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Interactive Data Visualization */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary mb-4">
              🛰️ Real NASA Data
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Explore Live
              <span className="block text-transparent bg-gradient-space bg-clip-text">
                Ocean Data!
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our satellites are discovering right now! This real NASA PACE data 
              shows us amazing things about ocean life around the world.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <InteractiveDataViz />
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <LessonsGrid />

      {/* Footer Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Become an
            <span className="block text-transparent bg-gradient-ocean bg-clip-text">
              Ocean Explorer?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students already exploring our amazing oceans with real NASA satellite data!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-glow transition-bounce hover:scale-105">
              🚀 Start Your Journey
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-semibold transition-bounce">
              👨‍🏫 Teacher Resources
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
