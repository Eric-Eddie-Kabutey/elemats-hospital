"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

export default function LeadershipTeam() {
  const [activeTab, setActiveTab] = useState("all");

  const teamData = {
    all: [
      {
        name: "Dr. Lamin Drammeh",
        role: "Chief Medical Director & Founder",
        image: ""
      },
      {
        name: "Dr. Ya Ida Drammeh",
        role: "Director of Clinical Operations",
        image: ""
      },
      {
        name: "Nicholas Jatta",
        role: "Head of Hospital Infrastructure",
        image: ""
      },
      {
        name: "Awa Ceesay",
        role: "Nursing Superintendent",
        image: ""
      },
      {
        name: "Musa Njie",
        role: "Client Relations Manager",
        image: ""
      },
      {
        name: "Fatou Sanneh",
        role: "Chief Financial Officer",
        image: ""
      }
    ],
    board: [
      {
        name: "Dr. Lamin Drammeh",
        role: "Chief Medical Director & Founder",
        image: ""
      },
      {
        name: "Dr. Ya Ida Drammeh",
        role: "Director of Clinical Operations",
        image: ""
      },
      {
        name: "Nicholas Jatta",
        role: "Head of Hospital Infrastructure",
        image: ""
      }
    ],
    management: [
      {
        name: "Awa Ceesay",
        role: "Nursing Superintendent",
        image: ""
      },
      {
        name: "Musa Njie",
        role: "Client Relations Manager",
        image: ""
      },
      {
        name: "Fatou Sanneh",
        role: "Chief Financial Officer",
        image: ""
      }
    ]
  };

  const currentTeam = teamData[activeTab];

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header & Tabs */}
        <div className="mb-16">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.1]">
              Leadership & Executive Management
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
              Meet the experts behind our clinical success—a diverse team of medical professionals dedicated to delivering the best healthcare for our patients.
            </p>
          </div>

          <div className="flex gap-2 mt-10">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-8 py-3 rounded-full text-sm font transition-all duration-300 bg-primary/5 ${activeTab === "all"
                  ? "bg-primary/90 hover:bg-primary text-white shadow-md"
                  : "text-primary hover:bg-primary/10"
                }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("board")}
              className={`px-8 py-3 rounded-full text-sm font transition-all duration-300 bg-primary/5 ${activeTab === "board"
                  ? "bg-primary/90 hover:bg-primary text-white shadow-md"
                  : "text-primary hover:bg-primary/10"
                }`}
            >
              Board
            </button>
            <button
              onClick={() => setActiveTab("management")}
              className={`px-8 py-3 rounded-full text-sm font transition-all duration-300 bg-primary/5 ${activeTab === "management"
                  ? "bg-primary/90 hover:bg-primary text-white shadow-md"
                  : "text-primary hover:bg-primary/10"
                }`}
            >
              Management
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-4xl overflow-hidden shadow-xs transition-all duration-500 group border border-slate-100"
            >
              {/* Image Container */}
              <div className="relative aspect-4/5 bg-slate-200 w-full overflow-hidden flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-300 group-hover:bg-slate-200 transition-colors duration-500">
                    <User size={120} strokeWidth={1} />
                  </div>
                )}
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/50 to-primary/10 transition-opacity duration-500" />
              </div>

              {/* Text Info */}
              <div className="p-8 bg-primary">
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-white">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
