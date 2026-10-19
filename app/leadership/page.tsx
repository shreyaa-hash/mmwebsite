"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import ParticlesBackground from "@/components/particles-background"
import ScrollProgress from "@/components/scroll-progress"

type Leader = {
  id: string
  name: string
  role: string
  img: string
  tagline: string
  description: string
  year?: string
}

type Member = {
  id: string
  name: string
  role: string
  img: string
  year: string
  branch: string
  quote: string
  work: string
  description: string
}

const facultyLeaders: Leader[] = [
  {
    id: "raju",
    name: "Dr. Raju",
    role: "Head of Department, (CSE-AIML)",
    img: "/Dr. Raju.webp",
    tagline: "Guiding excellence, inspiring innovation every day.",
    description:
      "As the Head of Department, Dr. Raju provides visionary leadership and constant encouragement to the entire club. His guidance ensures that every initiative aligns with academic excellence and practical relevance. With his unwavering support, the club continues to thrive as a platform for learning, innovation, and growth.",
  },
  {
    id: "aarushi",
    name: "Ms. Aarushi Thusu",
    role: "Faculty Coordinator, Machine Magnets Club",
    img: "/Ms.aarushi.jpg",
    tagline:
      "Empowering minds, nurturing meaningful change.",
    description:
      "Ms. Aarushi plays a pivotal role as the Club Coordinator, bridging the gap between faculty and students. Her mentorship and active involvement foster an environment of creativity, collaboration, and accountability. Under her supervision, the club functions with clarity, purpose, and passion.",
  },
  {
    id: "sonia",
    name: "Dr. Sonia Arora",
    role: "Faculty Mentor, Machine Magnets Club",
    img: "/Dr.sonia.jpg",
    tagline: "Knowledge shared, innovation inspired, minds empowered.",
    description: "Dr. Sonia brings a wealth of experience and insight to the club’s mentoring team. Her focus on continuous learning and intellectual curiosity encourages members to think beyond boundaries and pursue innovation with confidence and integrity.",
  },
  {
    id: "shweta",
    name: "Ms. Shweta",
    role: "Faculty Mentor, Machine Magnets Club",
    img: "/Ms.shweta.jpg",
    tagline: "Mentorship that inspires confidence and growth.",
    description: "As a dedicated mentor, Ms. Shweta consistently motivates students to reach their fullest potential. Her approachable nature and thoughtful guidance help members refine their skills, overcome challenges, and transform ideas into impactful outcomes.",
  },
  {
    id: "saurabh",
    name: "Mr. Saurabh Namdev",
    role: "Faculty Mentor, Machine Magnets Club",
    img: "/Mr.saurabh.jpg",
    tagline: "Guiding through wisdom, leading with purpose.",
    description: "Mr. Saurabh’s mentorship embodies balance and clarity. With his practical guidance and supportive approach, he helps students channel their creativity into structured, result-oriented efforts, ensuring that each project reflects both professionalism and passion.",
  },
]

const studentLeaders: Leader[] = [
  {
    id: "ayush",
    name: "Ayush Jaiswal",
    role: "President, Machine Magnets Club",
    img: "/ayush.jpg",
    tagline: "Leading with vision, inspiring with action.",
    description: "As President, Ayush embodies leadership, responsibility, and strategic foresight. He guides the club’s direction, ensuring every initiative aligns with its goals. His calm yet confident demeanor motivates members to perform their best, fostering a culture of unity and innovation.",
    year: "4th Year",
  },
  {
    id: "shreya",
    name: "Shreya Gupta",
    role: "Vice-President, Machine Magnets Club",
    img: "/Shreya_Gupta.jpg",
    tagline: "Inspiring growth through unity and vision.",
    description: "As Vice President, Shreya brings enthusiasm and foresight to the club. Her leadership encourages inclusivity and innovation, ensuring every member’s voice is heard and valued. By bridging ideas with action, she helps transform plans into impactful outcomes.",
    year: "3rd Year",
  },
  {
    id: "anjul",
    name: "Anjul Choudhary",
    role: "Vice-President, Machine Magnets Club",
    img: "/anjul.jpg",
    tagline: "Leading with logic, empowering through action.",
    description: "As Vice President, Anjul is a pillar of strategic thinking and execution. His leadership blends clarity, confidence, and collaboration, ensuring every initiative moves forward with purpose. With a calm and solution-oriented approach, he motivates the team and keeps the club’s operations steady and goal-driven.",
    year: "3rd Year",
  },
]

const coreTeam: Record<string, Member[]> = {
  "Event Co-ordination Team": [
    {
      id: "himadri",
      name: "Himadri Agrawal",
      role: "Event Head",
      img: "/Himadri.jpeg",
      year: "2nd Year",
      branch: "Bio-Tech",
      quote: "Turning ideas into experiences that inspire.",
      work: "Process Optimization & Quality Control",
      description: "As Event Head, Himadri brings creativity and coordination together. Himadri ensures every event is well-planned, engaging, and impactful, helping turn the club’s vision into memorable experiences for every participant.",
    },
  ],
  "Research Team": [
    {
      id: "prgati",
      name: "Prgati",
      role: "Research & Outreach Lead",
      img: "/prgati.jpeg",
      year: "Not specified",
      branch: "Not specified",
      quote: "Connecting research, ideas, and collaboration.",
      work: "Research & Outreach",
      description: "As Research & Outreach Lead, Prgati guides research initiatives and helps build connections with the wider community, bringing ideas and collaboration together.",
    },
  ],
  "Technical Team": [
    {
      id: "utkarsh",
      name: "Utkarsh Singh",
      role: "Technical Lead",
      img: "/utkarsh.jpg",
      year: "2nd Year",
      branch: "CSE-AIML TWINING",
      quote: "Exploring ideas with purpose and passion.",
      work: "Technical Infrastructure & Development",
      description: "As Technical Lead, Utkarsh guides the team’s technical work and helps turn ideas into practical, reliable solutions.",
    },
    {
      id: "adarsh-dubey",
      name: "Adarsh Dubey",
      role: "Technical Coordinator",
      img: "/AdarshDubey.jpeg",
      year: "Not specified",
      branch: "Not specified",
      quote: "Coordinating technical ideas into working solutions.",
      work: "Technical Coordination",
      description: "As Technical Coordinator, Adarsh supports the team in organizing technical work and turning ideas into practical solutions.",
    },
    {
      id: "anshika-chaurasia",
      name: "Anshika Chaurasia",
      role: "Technical Coordinator",
      img: "/AnshikaChaurasia.jpeg",
      year: "Not specified",
      branch: "Not specified",
      quote: "Bringing structure and creativity to technical projects.",
      work: "Technical Coordination",
      description: "As Technical Coordinator, Anshika helps organize technical projects and supports the team in delivering thoughtful, effective solutions.",
    },
  ],
  "Social Media Team": [
    {
      id: "arush-mishra",
      name: "Arush Mishra",
      role: "Social Media Head",
      img: "/arushmishra.jpeg",
      year: "Not specified",
      branch: "Not specified",
      quote: "Shaping the club’s voice across social platforms.",
      work: "Social Media Strategy & Content Planning",
      description: "As Social Media Head, Arush leads the club’s social media presence and helps plan content that communicates its work and initiatives.",
    },
  ],
  "Outreach Team": [
    {
      id: "prgati",
      name: "Prgati",
      role: "Research & Outreach Lead",
      img: "/prgati.jpeg",
      year: "Not specified",
      branch: "Not specified",
      quote: "Connecting research, ideas, and collaboration.",
      work: "Research & Outreach",
      description: "As Research & Outreach Lead, Prgati guides research initiatives and helps build connections with the wider community, bringing ideas and collaboration together.",
    },
    {
      id: "anjul",
      name: "Anjul Choudhary",
      role: "Member",
      img: "/anjul.jpg",
      year: "3rd Year",
      branch: "CSE-AIML",
      quote: "Every connection strengthens the community.",
      work: "External Partnerships & Community Engagement",
      description: "Anjul supports outreach initiatives with enthusiasm and sincerity. His approachability and dedication help expand the club’s network, making collaboration and engagement smoother and more effective.",
    }
  ],
  "Content Team": [
    {
      id: "shreya-pathak",
      name: "Shreya Pathak",
      role: "Content Lead",
      img: "/shreyapathak.jpeg",
      year: "Not specified",
      branch: "Not specified",
      quote: "Turning ideas into clear, engaging content.",
      work: "Content Creation & Documentation",
      description: "As Content Lead, Shreya guides the club’s written presence and helps ensure content for events, announcements, and documentation is clear, engaging, and consistent.",
    }
  ],
  "Head Coordinators": [
    {
      id: "dishank",
      name: "Dishank",
      role: "Head Coordinator",
      img: "/dishank.jpg",
      year: "2nd Year",
      branch: "CSE-AIML",
      quote: "Coordinating people and plans with purpose.",
      work: "Club-wide Coordination",
      description: "As Head Coordinator, Dishank helps coordinate club-wide activities and keep teams aligned.",
    },
    {
      id: "aryann",
      name: "Aryann",
      role: "Head Coordinator",
      img: "/aryan.jpg",
      year: "2nd Year",
      branch: "CSE-AIML",
      quote: "Bringing teams together to make plans happen.",
      work: "Club-wide Coordination",
      description: "As Head Coordinator, Aryann helps coordinate club-wide activities and keep teams aligned.",
    },
    {
      id: "prakhar",
      name: "Prakhar Praveen",
      role: "Head Mentor",
      img: "/prakhar.jpg",
      year: "4th Year",
      branch: "CSE-AIML",
      quote: "Guiding teams with experience and purpose.",
      work: "Club-wide Mentorship",
      description: "As Head Mentor, Prakhar supports the coordinators and guides club-wide activities with experience and purpose.",
    },
  ],
}

export default function LeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null)
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (selectedLeader) setSelectedLeader(null)
        if (selectedMember) setSelectedMember(null)
      }
    }
    if (selectedLeader || selectedMember) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selectedLeader, selectedMember])

  return (
    <>
      {!selectedLeader && !selectedMember && <ParticlesBackground />}
      <ScrollProgress />

      <div className="relative z-10">
        <Header />
        <Navigation />

        <main className="container mx-auto px-4 py-8 space-y-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient-red">Our Leadership</h1>

          {/* Faculty Leadership */}
          <section className="rounded-xl border bg-card p-6 md:p-8 shadow-lg md:animate-in md:fade-in-50 md:slide-in-from-bottom-4 md:duration-700">
            <h2 className="text-gradient-red text-3xl font-bold mb-1 border-l-8 border-primary pl-4">
              Faculty Leadership
            </h2>
            <p className="text-center text-sm md:text-base uppercase font-semibold tracking-[0.25em] text-primary/90 mb-6">
              Guiding Excellence
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 2xl:gap-8">
              {facultyLeaders.map((leader) => (
                <div
                  key={leader.id}
                  onClick={() => setSelectedLeader(leader)}
                  className="relative basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 border-2 border-primary rounded-2xl p-3 sm:p-4 md:p-6 bg-gradient-to-br from-card to-accent/10 hover:shadow-xl md:hover:scale-105 transition-all duration-300 cursor-pointer group"
                  aria-label={`View ${leader.name} details`}
                >
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full border border-primary/40 bg-background/80 text-primary text-[10px] font-semibold shadow-sm">
                    View
                  </span>
                  <img
                    src={leader.img || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 object-cover rounded-lg mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary/50 transition-colors"
                  />
                  <h3 className="text-gradient-red text-lg sm:text-xl font-bold text-center">{leader.name}</h3>
                  <p className="text-muted-foreground text-center mb-3">{leader.role}</p>
                  <p className="text-sm italic text-center relative px-4">{leader.tagline}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Student Leadership */}
          <section className="rounded-xl border bg-card p-6 md:p-8 shadow-lg md:animate-in md:fade-in-50 md:slide-in-from-bottom-4 md:duration-700 [animation-delay:200ms]">
            <h2 className="text-gradient-red text-3xl font-bold mb-1 border-l-8 border-primary pl-4">
              Student Leadership
            </h2>
            <p className="text-center text-sm md:text-base uppercase font-semibold tracking-[0.25em] text-primary/90 mb-6">
              Leading the Future
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6 2xl:gap-8">
              {studentLeaders.map((leader) => (
                <div
                  key={leader.id}
                  onClick={() => setSelectedLeader(leader)}
                  className="relative basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 border-2 border-primary rounded-2xl p-3 sm:p-2 md:p-6 bg-gradient-to-br from-card to-accent/10 hover:shadow-xl md:hover:scale-105 transition-all duration-300 cursor-pointer group"
                  aria-label={`View ${leader.name} details`}
                >
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full border border-primary/40 bg-background/80 text-primary text-[10px] font-semibold shadow-sm">
                    View
                  </span>
                  <img
                    src={leader.img || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 object-cover rounded-lg mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary/50 transition-colors"
                  />
                  <h3 className="text-gradient-red text-lg sm:text-base font-bold text-center">{leader.name}</h3>
                  <p className="text-muted-foreground text-center mb-1">{leader.role}</p>
                  <p className="text-sm text-primary text-center mb-3">{leader.year}</p>
                  <p className="text-sm italic text-center relative px-4">{leader.tagline}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Team */}
          <section className="rounded-xl border bg-card p-6 md:p-8 shadow-lg md:animate-in md:fade-in-50 md:slide-in-from-bottom-4 md:duration-700 [animation-delay:400ms]">
            <h2 className="text-gradient-red text-3xl font-bold mb-6 border-l-8 border-primary pl-4">Core Team</h2>

            {Object.entries(coreTeam).map(([teamName, members]) => (
              <div key={teamName} className="mb-10">
                <div className="flex justify-center mb-5">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary bg-white text-primary font-semibold shadow-sm">
                    {teamName}
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 2xl:gap-8">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      onClick={() => setSelectedMember(member)}
                      className="relative mm-card-glow basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 rounded-2xl p-4 hover:shadow-xl md:hover:scale-105 transition-all duration-300 cursor-pointer text-center group"
                      aria-label={`View ${member.name} details`}
                    >
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full border border-primary/40 bg-background/80 text-primary text-[10px] font-semibold shadow-sm">
                        View
                      </span>
                      <img
                        src={member.img || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 object-cover rounded-lg mx-auto mb-3 border-4 border-primary"
                      />
                      <h4 className="text-gradient-red font-bold text-base sm:text-lg">{member.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                      <p className="text-sm italic text-center relative px-4">{member.quote}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Contact */}
          <section className="gradient-red text-white rounded-xl p-8 text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href="mailto:machine-magnets@niet.co.in"
                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold hover:bg-white/30 transition-all hover:scale-105 border-2 border-white/30"
              >
                Email Us
              </a>
              <a
                href="https://www.instagram.com/machinemagnets"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold hover:bg-white/30 transition-all hover:scale-105 border-2 border-white/30"
              >
                Instagram
              </a>
              <a
                href="https://chat.whatsapp.com/F6PwUIO6qU3EFi1HGbCBus"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold hover:bg-white/30 transition-all hover:scale-105 border-2 border-white/30"
              >
                Join WhatsApp
              </a>
            </div>
            <p className="mt-6 opacity-90">
              Empowering the next generation of AI/ML innovators
              <br />© 2025 Machine Magnets Club, NIET
            </p>
          </section>
        </main>
      </div>

      {/* Leader Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4"
          onClick={() => setSelectedLeader(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mm-modal-surface rounded-3xl p-6 md:p-8 w-[90vw] max-w-4xl h-[90dvh] max-h-[90dvh] relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/80 transition-colors"
              aria-label="Close"
            >
              ×
            </button>

            {/* Landscape layout: left (image + name + role), right (scrollable description) */}
            <div className="flex h-full flex-col md:flex-row gap-6 md:gap-8 min-h-0">
              {/* Left */}
              <div className="md:w-[36%] flex-shrink-0">
                <img
                  src={selectedLeader.img || "/placeholder.svg"}
                  alt={selectedLeader.name}
                  className="w-32 h-44 sm:w-36 sm:h-52 md:w-40 md:h-56 object-cover rounded-lg mb-4 border-4 border-primary"
                />
                <h3 className="text-gradient-red text-2xl font-bold mb-1">{selectedLeader.name}</h3>
                <p className="text-muted-foreground">{selectedLeader.role}</p>
              </div>

              {/* Right */}
              <div className="md:w-[64%] min-h-0 h-full">
                <div className="bg-accent/30 rounded-2xl p-5 md:p-6 border border-primary/20 h-full min-h-0 overflow-y-auto overscroll-contain touch-pan-y no-scrollbar">
                  <p className="text-sm leading-relaxed text-justify">{selectedLeader.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Member Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4"
          onClick={() => setSelectedMember(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mm-modal-surface rounded-3xl p-6 md:p-8 w-[92vw] max-w-5xl h-[90dvh] max-h-[90dvh] relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/80 transition-colors z-10"
              aria-label="Close"
            >
              ×
            </button>

            <div className="h-full min-h-0 overflow-y-auto overscroll-contain touch-pan-y no-scrollbar pt-2">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Left */}
                <div className="md:w-[38%] flex-shrink-0">
                  <img
                    src={selectedMember.img || "/placeholder.svg"}
                    alt={selectedMember.name}
                    className="w-32 h-44 sm:w-36 sm:h-52 md:w-40 md:h-56 object-cover rounded-lg mb-4 border-4 border-primary"
                  />
                  <h3 className="text-gradient-red text-2xl font-bold mb-1">{selectedMember.name}</h3>
                  <p className="text-muted-foreground mb-4">{selectedMember.role}</p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-accent/30 rounded-xl p-3 border border-primary/20">
                      <p className="text-xs text-primary font-semibold uppercase mb-1">Year</p>
                      <p className="font-medium text-sm">{selectedMember.year}</p>
                    </div>
                    <div className="bg-accent/30 rounded-xl p-3 border border-primary/20">
                      <p className="text-xs text-primary font-semibold uppercase mb-1">Branch</p>
                      <p className="font-medium text-sm">{selectedMember.branch}</p>
                    </div>
                    <div className="bg-accent/30 rounded-xl p-3 border border-primary/20 col-span-2">
                      <p className="text-xs text-primary font-semibold uppercase mb-1">Work in Club</p>
                      <p className="font-medium text-sm">{selectedMember.work}</p>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="md:w-[62%]">
                  <div className="bg-accent/30 rounded-2xl p-5 md:p-6 border border-primary/20">
                    <h4 className="text-primary font-bold mb-3">About</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                      {selectedMember.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
