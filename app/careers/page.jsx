import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <InnerPageHero 
        title="Careers" 
        description="Join a clinical team dedicated to professional excellence and compassionate patient care."
      />
      <div className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group bg-white rounded-4xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                   <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-widest">Full-time</span>
                   <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Wellness City</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Dental Associate {i}</h3>
                <p className="text-slate-500 mb-8 font-medium italic">Professional recruitment starting soon. We are looking for high-caliber medical practitioners.</p>
                <button className="flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-normal hover:bg-emerald-600 transition-all shadow-lg group">
                   Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
