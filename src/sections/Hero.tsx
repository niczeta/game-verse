import { Button } from "../form-components/Button";
import { Gamepad, ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const handleScrollToFeatured = () => {
    const featuredSection = document.getElementById("featured-games");
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"></div>

      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-4xl mx-auto"
        style={{ marginTop: "-120px" }}
      >
        <div className="mb-4 inline-block px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-cyan-400/40 animate-fade-in">
          <span className="text-xs sm:text-sm font-medium text-cyan-300 flex items-center gap-2">
            <Gamepad size={16} className="text-cyan-300" />
            Welcome to the next generation of gaming
          </span>
        </div>
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold animate-titlepop tracking-tight mb-3 leading-tight whitespace-nowrap"
          style={{
            color: "#fff",
            textShadow:
              "0 0 20px rgba(31, 225, 255, 0.8), 0 0 40px rgba(96, 239, 255, 0.5), 0 4px 20px rgba(0,0,0,0.9)",
          }}
        >
          Welcome to{" "}
          <span
            className="block sm:inline"
            style={{
              color: "#FACC15",
              textShadow:
                "0 0 30px rgba(250, 204, 21, 0.9), 0 0 60px rgba(255, 215, 0, 0.6), 0 4px 20px rgba(0,0,0,0.9)",
            }}
          >
            GameVerse
          </span>
        </h1>
        <p className="mb-8 text-sm sm:text-base lg:text-lg text-gray-200 animate-fade-in2 max-w-2xl mx-auto font-medium drop-shadow-lg leading-relaxed">
          Discover thousands of games across all platforms at{" "}
          <span className="text-yellow-400 font-bold">unbeatable prices</span>.
        </p>
        {/* Bottoni: larghezza ridotta SOLO su mobile */}
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in3 w-full sm:w-auto">
          <Button
            text="Shop Now"
            variant="outline"
            color="cyan"
            size="small"
            className="max-w-[160px] w-full mx-auto sm:max-w-none sm:w-auto"
            onClick={handleScrollToFeatured}
          />
          <Button
            text="Explore Games"
            variant="outline"
            color="yellow"
            size="small"
            className="max-w-[160px] w-full mx-auto sm:max-w-none sm:w-auto"
            onClick={handleScrollToFeatured}
          />
        </div>
      </div>
      {/* Scroll Indicator */}
      <button
        onClick={handleScrollToFeatured}
        className="absolute z-20 left-1/2 -translate-x-1/2 animate-bounce hover:opacity-80 transition cursor-pointer focus:outline-none"
        style={{ bottom: "16%" }}
        aria-label="Scroll to featured games"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-base sm:text-lg text-cyan-200 font-bold tracking-wide drop-shadow-lg whitespace-nowrap">
            Scroll to explore
          </span>
          <ChevronDown className="text-cyan-400 w-9 h-9 sm:w-12 sm:h-12 animate-pulse drop-shadow-2xl" />
        </div>
      </button>
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn2 {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn3 {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes titlepop {
            0% { letter-spacing: 10px; opacity: 0; transform: translateY(-20px);}
            100% { letter-spacing: 2px; opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(.4,2,.7,.9) 0.2s both; }
          .animate-fade-in2 { animation: fadeIn2 0.8s cubic-bezier(.4,2,.7,.9) 0.4s both; }
          .animate-fade-in3 { animation: fadeIn3 0.8s cubic-bezier(.4,2,.7,.9) 0.6s both; }
          .animate-titlepop { animation: titlepop 1.2s cubic-bezier(.4,2,.7,.9) 0s both; }
        `}
      </style>
    </section>
  );
};
