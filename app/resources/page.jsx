import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";

export default function ResourcesPage() {
  return (
    <main>
      <Navbar />
      <InnerPageHero 
        title="Resources" 
        description="Explore our clinical library, patient education guides, and the latest dental industry news."
      />
      <div className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group bg-white rounded-4xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gray-100 rounded-3xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Medical Insight</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Patient Guide {i}</h3>
                <p className="text-slate-500 mb-6 font-medium">Coming soon: Comprehensive insights into clinical dental practices and home-care protocols.</p>
                <div className="h-px w-12 bg-emerald-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
