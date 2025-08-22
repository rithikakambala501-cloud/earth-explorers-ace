import { Button } from "@/components/ui/button";
import satelliteMascot from "@/assets/satellite-mascot.png";
import earthHero from "@/assets/earth-hero.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={earthHero} 
          alt="Earth from space showing beautiful ocean colors"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      {/* Floating Stars Animation */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-satellite-glow rounded-full animate-pulse-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 animate-slide-up">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent-foreground text-sm font-medium">
              🚀 NASA PACE Mission Explorer
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Ocean
            <span className="block text-transparent bg-gradient-ocean bg-clip-text">
              Superheroes!
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
            Join our friendly satellite on an amazing journey to explore tiny ocean creatures 
            that help keep our planet healthy. Real NASA data made super fun!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            import { useRouter } from "next/navigation";

export const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="...">
      {/* ... */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-white shadow-glow text-lg px-8 py-6 rounded-2xl transition-bounce hover:scale-105"
          onClick={() => router.push("/explore")}
        >
          🌊 Start Exploring
        </Button>
        
        <Button 
          variant="outline" 
          size="lg"
          className="border-white/30 text-black hover:bg-white/10 text-lg px-8 py-6 rounded-2xl transition-bounce"
          onClick={() => router.push("/lessons")}
        >
          📚 View Lessons
        </Button>
      </div>
      {/* ... */}
    </section>
  );
};

            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-green/10 text-lg px-8 py-6 rounded-2xl transition-bounce"
            >
              📚 View Lessons
            </Button>
          </div>
        </div>

        {/* Right Content - Mascot */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src={satelliteMascot}
              alt="Friendly satellite mascot"
              className="w-64 lg:w-80 animate-float drop-shadow-2xl"
            />
            
            {/* Speech Bubble */}
            <div className="absolute -top-8 -left-8 lg:-left-16">
              <div className="bg-white rounded-2xl px-6 py-3 shadow-float relative animate-bounce-in">
                <p className="text-primary font-semibold">
                  Hi! I&apos;m Orbit! 👋
                </p>
                <div className="absolute bottom-0 left-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
