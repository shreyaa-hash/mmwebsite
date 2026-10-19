"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import ParticlesBackground from "@/components/particles-background"
import ScrollProgress from "@/components/scroll-progress"
import FilmReelCarousel from "@/components/film-reel-carousel"

type Event = {
  id: string
  title: string
  date: string
  tagline: string
  description: string
  images: string[]
  winners?: string
  winnersDetails?: Array<{ place: "1st" | "2nd" | "3rd"; team: string; snapshot: string }>
  speakers?: Array<{ name: string; designation: string; photo: string }>
  speakerHighlight?: string // brief highlight of the speech (second description)
}

const pastEvents: Event[] = [
  {
    id: "udbhav",
    title: "🚀 Udbhav: The Rise of Machine Magnets",
    date: "📅 September 2024",
    tagline:
      "Successfully launched our AI/ML community with great enthusiasm! This inaugural event brought together passionate students and faculty to kickstart our journey into the world of artificial intelligence and machine learning.",
    description:
      "Udbhav marked the official launch of the Machine Magnets club. The event celebrated innovation, introducing the club’s mission and vision while featuring guest sessions by industry professionals. It emphasized AI, ML, and career development insights through engaging interactions and networking.",
    images: [
      "Udbhav/IMG_4870.JPG",
      "Udbhav/IMG_4877.JPG",
      "Udbhav/IMG_4883.JPG",
      "Udbhav/IMG_4885.JPG",
      "Udbhav/IMG_4887.JPG",
      "Udbhav/IMG_4888.JPG",
      "Udbhav/IMG_4898.JPG",
      "Udbhav/IMG_4909.JPG",
      "Udbhav/IMG_4924.JPG",
      "Udbhav/IMG_4933.JPG",
      "Udbhav/IMG_4944.JPG",
      "Udbhav/IMG_4989.JPG",
      "Udbhav/IMG_4994.JPG",
       ],
    speakers: [
      {
        name: "Mr. Monish Salhotra",
        designation: "Sr. Director, Global Business Development, Compunnel Inc.",
        photo: "/Mr. Monish Salhotra.JPG",
      },
      {
        name: "Mr. Akhil Garg",
        designation: "Lead Engineer, EPAM Systems",
        photo: "/Mr. Akhil Garg.JPG",
      },
    ],
    speakerHighlight:
      "Mr. Monish Salhotra discussed leadership, innovation, and global business strategies. Mr. Akhil Garg shared experiences in automation systems and smart technologies.",
  },
  {
    id: "farewell",
    title: "🎓 Farewell 2025 - Echoes of a Journey",
    date: "📅 December 2024",
    tagline:
      "A heartfelt farewell for our graduating members! We celebrated their contributions and achievements while wishing them success in their future endeavors in the field of AI/ML.",
    description: "The Machine Magnets club of the AIML Department organized a heartfelt Farewell 2025 to bid adieu to the final-year students. The event celebrated their journey, achievements, and contributions, creating a memorable evening filled with joy, gratitude, and nostalgia. It featured engaging performances, fun activities, and warm speeches from faculty and juniors, making it a perfect send-off to wish the graduates success in their future endeavors.",
    images: [
      "/Farewell/IMG_3667.JPG",
      "/Farewell/IMG_3749.JPG",
      "/Farewell/IMG_3752.JPG",
      "/Farewell/IMG_3753.JPG",
      "/Farewell/IMG_3756.JPG",
      "/Farewell/IMG_3771.JPG",
      "/Farewell/IMG_4035.JPG",
    ]
  },
  {
    id: "prompt",
    title: "🎯 Prompt PlayOffs",
    date: "📅 January 2025",
    tagline:
      "A thrilling prompt engineering competition where participants showcased their creativity and technical skills.",
    description:
      "Prompt Playoff was a two-day technical and creative contest centered on Artificial Intelligence and prompt engineering. It included keynote sessions from industry experts, interactive discussions, and hands-on competition rounds focusing on crafting effective prompts for AI systems.Two competition rounds: Basic and Creative Prompting. Interactive sessions on AI in entrepreneurship and space research. Enhanced participants’ innovation, teamwork, and presentation skills.",
    winners: "Winners: Team Alpha, Team Beta, Team Gamma",
    winnersDetails: [
      {
        place: "1st",
        team: "Team Lumos",
        snapshot: "/Prompt Play Off/First.jpg",
      },
      {
        place: "2nd",
        team: "Team 404 Founders",
        snapshot: "/Prompt Play Off/Second.jpg",
      },
      {
        place: "3rd",
        team: "Team Syntax Squad",
        snapshot: "/Prompt Play Off/Third.jpg",
      },
    ],
    images: [
      "Prompt Play Off/IMG_5142.JPG",
      "Prompt Play Off/IMG_5178.JPG",
      "Prompt Play Off/IMG_5179.JPG",
      "Prompt Play Off/IMG_5190.JPG",
      "Prompt Play Off/IMG_5192.JPG",
      "Prompt Play Off/IMG_5244.JPG",
      "Prompt Play Off/IMG_5323.JPG",
      "Prompt Play Off/IMG_5333.JPG",
      "Prompt Play Off/IMG_5335.JPG",
      "Prompt Play Off/WhatsApp Image 2025-10-28 at 11.05.49 PM.jpeg",
      "Prompt Play Off/WhatsApp Image 2025-10-28 at 11.05.50 PM.jpeg",
      "Prompt Play Off/WhatsApp Image 2025-10-28 at 11.05.53 PM.jpeg",
      "Prompt Play Off/WhatsApp Image 2025-10-28 at 11.05.54 PM.jpeg",
      "Prompt Play Off/WhatsApp Image 2025-10-28 at 11.05.56 PM.jpeg",
      "Prompt Play Off/WhatsApp Image 2025-10-28 at 11.05.59 PM.jpeg",
      "Prompt Play Off/WhatsApp Image 2025-10-28 at 11.06.01 PM.jpeg",
      "Prompt Play Off/WhatsApp Image 2025-10-28 at 11.06.02 PM.jpeg",
      "Prompt Play Off/WhatsApp Image 2025-10-28 at 11.06.03 PM.jpeg"
     ],
    speakers: [
      {
        name: "Mr. Manas Chopra",
        designation: "Founder, Geekroom",
        photo: "/Mr. Manas Chopra.JPG",
      },
      {
        name: "Mr. Abhishek Kumar Singh",
        designation: "Scientist, ISRO",
        photo: "/Mr. Abhishek.webp",
      },
    ],
    speakerHighlight:
      "Mr. Manas Chopra delivered an engaging talk on entrepreneurship and AI innovation. Mr. Abhishek Kumar Singh spoke about AI applications in space exploration and his professional journey.",
  },
  {
    id: "prompt-playoff-2",
    title: "🎯 Prompt Playoff 2.0",
    date: "📅 August 21, 2026",
    tagline:
      "Our signature annual event returned for its second edition, attracting more than 300 registrations.",
    description:
      "Prompt Playoff 2.0 continued Machine Magnets’ signature annual event, bringing together 300+ registrants for a celebration of creativity, problem-solving, and prompt engineering.",
    images: [
      "/PromptPlayOff2.O/IMG_20260821_143132026_HDR.jpg",
      "/PromptPlayOff2.O/IMG_20260821_143441420_HDR.jpg",
      "/PromptPlayOff2.O/IMG_20260821_150750162_HDR.jpg",
      "/PromptPlayOff2.O/IMG_20260821_150753721_HDR.jpg",
      "/PromptPlayOff2.O/IMG_20260821_150758145_HDR.jpg",
    ],
  },
  {
    id: "game-a-code",
    title: "🎮 Game a Code",
    date: "📅 April 3, 2026",
    tagline: "A coding event conducted by Machine Magnets during the tech fest.",
    description:
      "Game a Code brought a coding challenge to the tech fest, giving participants a chance to put their programming and problem-solving skills into action.",
    images: ["/Game%20A%20Code%20.jpeg"],
  },
  {
    id: "tatva",
    title: "🚀 Tech-Tatva",
    date: "📅 October 2025",
    tagline:
      "The event aimed to foster innovation, creativity, and awareness among students about the practical applications of Artificial Intelligence and Machine Learning in today’s world.",
    description:
      "TECH-TATVA was an interactive tech talk focused on Artificial Intelligence and Machine Learning applications. The event aimed to enhance students’ understanding of AI and entrepreneurship through real-world insights. It featured expert talks, a Q&A session, and certificate distribution.Insightful talks on AI, startups, and data science tools. Highly engaging student interaction. Strong participation and motivation for future workshops.",
    images: [
      "Tech Tatva/DSC08902.jpg",
      "Tech Tatva/DSC08904.jpg",
      "Tech Tatva/DSC08906.jpg",
      "Tech Tatva/DSC08907.jpg",
      "Tech Tatva/DSC09062.jpg",
      "Tech Tatva/DSC09071.jpg",
      "Tech Tatva/DSC09081.jpg",
      "Tech Tatva/DSC09083.jpg",
      "Tech Tatva/DSC09085.jpg",
      "Tech Tatva/DSC09088.jpg",
      "Tech Tatva/DSC09089.jpg",
      "Tech Tatva/DSC09093.jpg",
      "Tech Tatva/DSC09094.jpg",
      "Tech Tatva/DSC09097.jpg",
      "Tech Tatva/DSC09100.jpg",
      "Tech Tatva/DSC09102.jpg",
      "Tech Tatva/DSC09105.jpg",
      "Tech Tatva/DSC09107.jpg",
      "Tech Tatva/DSC09109.jpg",
      "Tech Tatva/DSC09112.jpg"
     ],
    speakers: [
      {
        name: "Mr. Sonu Prakash",
        designation: "Founder & CEO, Appwars Technologies Pvt. Ltd.",
        photo: "/Mr. Sonu Prakash.jpeg",
      },
      {
        name: "Mr. Aman Kumar",
        designation: "Data Scientist, Appwars Technologies Pvt. Ltd.",
        photo: "/Mr. Aman Kumar.jpeg",
      },
    ],
    speakerHighlight:
      "Mr. Sonu Prakash shared his entrepreneurial journey and insights on AI startups. Mr. Aman Kumar explained real-world AI/ML projects and data science techniques.",
  },
]

const upcomingEvents = [
  {
    title: "ML MasterChef: Build a Model",
    description: "Train a machine learning model and put your data science skills to the test.",
  },
  {
    title: "AI Quiz Blitz",
    description: "Challenge yourself with a fast-paced quiz on artificial intelligence and technology.",
  },
  {
    title: "ML Meme War Competition",
    description: "Create clever, original memes inspired by machine learning and tech culture.",
  },
  {
    title: "Tech Treasure Hunt (AI Edition)",
    description: "Follow AI-themed clues, solve puzzles, and race to uncover the next checkpoint.",
  },
  {
    title: "AI Project Expo",
    description: "Explore student-built AI projects, prototypes, and practical innovations.",
  },
  {
    title: "Industry Expert Talk Series",
    description: "Hear industry professionals share insights on technology, careers, and innovation.",
  },
  {
    title: "Hackathon 2025",
    description: "Collaborate in teams to design and build creative solutions to real-world challenges.",
  },
  {
    title: "Tech Hunt — Think. Code. Build. Deploy.",
    description:
      "A three-hour team competition featuring tech quiz and debugging, a strategy-based auction, coding and AI-prompt challenges, and a mini-project teams build and deploy live.",
  },
  {
    title: "Thinkathon — Think First. Build Smarter.",
    description:
      "Teams first solve a real-world problem without AI, then use AI to build an MVP before pitching and defending their solution and explaining their AI use.",
  },
]

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedEvent(null)
    }
    if (selectedEvent) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selectedEvent])

  return (
    <>
      {!selectedEvent && <ParticlesBackground />}
      <ScrollProgress />

      <div className="relative z-10">
        <Header />
        <Navigation />

        <main className="container mx-auto px-4 py-8 space-y-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient-red">Our Events</h1>

          {/* Past Events */}
          <section className="rounded-xl border bg-card p-6 md:p-8 shadow-lg animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            <h2 className="text-gradient-red text-3xl font-bold mb-1 border-l-8 border-primary pl-4">Past Events</h2>
            <p className="text-center text-sm md:text-base tracking-wider uppercase text-primary/90 mb-6">
              Celebrating Success
            </p>

            <div className="space-y-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="mm-card-glow rounded-2xl p-6 border-l-8 border-primary hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <h3 className="text-gradient-red text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-primary font-semibold mb-3">{event.date}</p>
                  <p className="text-muted-foreground mb-4 text-justify">{event.tagline}</p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {event.images.slice(0, 3).map((img, idx) => (
                      <img
                        key={idx}
                        src={img || "/placeholder.svg"}
                        alt={`${event.title} preview ${idx + 1}`}
                        className="hidden md:block w-20 h-14 object-cover rounded-lg border-2 border-primary/30"
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="gradient-red text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
                  >
                    See More
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="rounded-xl border bg-card p-6 md:p-8 shadow-lg animate-in fade-in-50 slide-in-from-bottom-4 duration-700 [animation-delay:200ms]">
            <h2 className="text-gradient-red text-3xl font-bold mb-1 border-l-8 border-primary pl-4">
              Upcoming Events
            </h2>
            <p className="text-center text-sm md:text-base tracking-wider uppercase text-primary/90 mb-6">
              What's Next
            </p>

            <div className="border-l-8 border-primary rounded-2xl p-6 bg-gradient-to-r from-accent/20 to-transparent">
              <h3 className="text-gradient-red text-xl font-bold mb-4">🎯 Exciting Lineup Ahead</h3>
              <p className="text-muted-foreground mb-4">
                We have an amazing lineup of events planned for the upcoming months. Join us for hands-on workshops,
                competitions, and networking opportunities!
              </p>
              <ul className="space-y-3">
                {upcomingEvents.map((event) => (
                  <li
                    key={event.title}
                    className="flex items-start gap-3 py-3 border-b border-border last:border-0 hover:pl-4 transition-all"
                  >
                    <span className="text-primary text-lg" aria-hidden="true">▶</span>
                    <div>
                      <p className="text-gradient-red font-semibold">{event.title}</p>
                      {event.description && (
                        <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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

      {/* Event Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4"
          onClick={() => setSelectedEvent(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mm-modal-surface rounded-3xl p-6 md:p-8 w-[90vw] max-w-6xl h-[90dvh] max-h-[90dvh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/80 transition-colors"
            >
              ×
            </button>

            <div className="flex h-full flex-col md:flex-row gap-6 min-h-0">
              {/* Left: text content, scrollable */}
              <div className="basis-full md:basis-[56%] min-h-0 overflow-y-auto pr-1 overscroll-contain touch-pan-y">
                {/* Header */}
                <div className="pb-4">
                  <h3 className="text-gradient-red text-2xl font-bold mb-2">{selectedEvent.title}</h3>
                  <p className="text-primary font-semibold mb-2">{selectedEvent.date}</p>
                  <p className="text-muted-foreground text-justify">{selectedEvent.description}</p>
                </div>

                {selectedEvent.speakers && selectedEvent.speakers.length > 0 && (
                  <div className="py-4">
                    <h4 className="text-primary font-bold mb-3">Speakers</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedEvent.speakers.map((s) => (
                        <div key={s.name} className="mm-card-glow rounded-xl p-3 border border-primary/30">
                          <div className="flex items-center gap-3">
                            <img
                              src={s.photo || "/placeholder.svg?height=80&width=80&query=speaker%20photo"}
                              alt={`${s.name} photo`}
                              className="h-16 w-16 rounded-lg object-cover border-2 border-primary/60"
                            />
                            <div>
                              <p className="font-semibold">{s.name}</p>
                              <p className="text-sm text-muted-foreground">{s.designation}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedEvent.speakers && selectedEvent.speakers.length > 0 && selectedEvent.speakerHighlight && (
                  <div className="py-2">
                    <h5 className="font-semibold text-foreground mb-1">Highlights</h5>
                    <p className="text-muted-foreground text-justify">{selectedEvent.speakerHighlight}</p>
                  </div>
                )}

                {selectedEvent.winners && <p className="text-primary font-semibold mt-4">{selectedEvent.winners}</p>}

                {/* Winners grid remains after winners summary */}
                {selectedEvent.winnersDetails && (
                  <div className="py-4">
                    <h4 className="text-primary font-bold mb-3">Winners</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedEvent.winnersDetails.map((w) => (
                        <div key={w.team} className="mm-card-glow rounded-xl p-3">
                          <div className="inline-flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded-full border border-primary text-primary text-xs font-semibold bg-background">
                              {w.place}
                            </span>
                            <span className="text-sm font-medium">{w.team}</span>
                          </div>
                          <img
                            src={
                              w.snapshot ||
                              "/placeholder.svg?height=120&width=200&query=winners%20snapshot" ||
                              "/placeholder.svg" ||
                              "/placeholder.svg" ||
                              "/placeholder.svg"
                            }
                            alt={`${w.team} ${w.place} snapshot`}
                            className="w-full h-28 object-cover rounded-lg border border-primary/20"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right: film reel carousel */}
              <div className="basis-full md:basis-[44%] h-[24vh] md:h-[85%] mt-8 md:mt-10">
                <FilmReelCarousel images={selectedEvent.images} speed={40} itemHeightRem={15} itemAspect={16 / 9} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
