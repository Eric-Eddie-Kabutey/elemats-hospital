import { ArrowRight } from "lucide-react";

const CareerForm = () => {
  return (
    <section className="w-full section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column: Text */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
                Become An Insider
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed font-light">
                Thinking about joining us in the future? Elemats Insiders stay connected, get an inside look at our culture, and are the first to know about new opportunities to be part of our growing team.
              </p>
            </div>

            {/* Blank space where illustration would go */}
            <div className="hidden lg:block h-64"></div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* First Name */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">First Name</label>
                <input
                  type="text"
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder=""
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Last Name</label>
                <input
                  type="text"
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder=""
                />
              </div>

              {/* Educational Qualification */}
              <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Educational Qualification*</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder=""
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Email*</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder=""
                />
              </div>

              {/* Your Phone */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Your Phone*</label>
                <input
                  type="tel"
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder=""
                />
              </div>

              {/* Tell us briefly about yourself */}
              <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Tell us briefly about yourself</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900 resize-none"
                  placeholder=""
                />
              </div>

              {/* Submit Button */}
              <div className="group col-span-1 md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 text-white px-8 py-3.5 rounded-full text-sm font-normal bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20 transition-all"
                >
                  Submit Your Application
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform inline-block ml-2" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerForm;
