"use client"

import React from "react"

type Head = {
  id: string
  name: string
  role: string
  img: string
  bio: string
}

const heads: Head[] = [
  {
    id: "h1",
    name: "Dr. Om Prakash Agarwal",
    role: "Managing Director, Noida Institute of Engineering & Technology (NIET), Greater Noida",
    img: "/Dr. Om Prakash Agarwal.webp",
    bio: "Success is not a one-shot process. It is the result of a continuous improvement after each failure.The fear of failure needs to be captured in order for a person to learn from his failure too. It is an invaluable opportunity to rectify errors and move forward. Failure in working for a good cause is better than success in working for a wrong cause.Over the years now, NIET has built quite a special position in the private higher education sector. With its distinctive culture, it provides a clear student-centered environment in which to explore existing technical knowledge, and gain new learning at the leading edges of technology development.",
  },
  {
    id: "h2",
    name: "Dr. Neema Agarwal",
    role: "Additional Managing Director, Noida Institute of Engineering & Technology (NIET), Greater Noida",
    img: "/Dr. Neema Agarwal.webp",
    bio: "Education is the most powerful weapon which you can use to change the world.In the course of the last 20 years, many technical and management institutes have sprung up all over the country. Graduates passing out every year are highly optimistic that technical courses ensure a rewarding career.Students regularly undergo personality development and grooming sessions that lead to both extrinsic and intrinsic confidence boosting and prepares them for the corporate world.We appreciate your interest and want you to know that we are here to bring you a leading edge technical education.",
  },
   {
    id: "h3",
    name: "Dr. Vinod M. Kapse",
    role: "Director, Noida Institute of Engineering & Technology (NIET), Greater Noida",
    img: "/Dr. Vinod M Kapse.webp",
    bio: "Ever since its inception in 2001, our endeavour at NIET has been to provide excellent quality of education and training to young minds aspiring to become engineers, managers, pharmacists, and technocrats.In order to achieve this goal, we have established an infrastructure that conforms to the bests in the world.Our faculty members are highly talented and qualified. Additionally, we invite the finest minds from the industry and academia as guest lecturers. With the help of a very supportive staff, we ensure a healthy learning atmosphere for our students.We motivate our students to dream big and guarantee that right spirit and necessary talent are inculcated in the students to help them realize their objectives.I wish you the very best as you choose to become a part of this exciting and vibrant learning community.",
  },
  {
    id: "h4",
    name: "Dr. Anil K. Ahlawat",
    role: "Director Academics, Noida Institute of Engineering & Technology (NIET), Greater Noida",
    img: "/Dr. Anil K Ahlawat.png",
    bio: "The best gift one can give to their student is an education of the highest quality. As we move into a globalised and competitive global environment, students must be equipped with 21st Century Skills and exceptional intellectual and academic creativity, enabling them to reach the pinnacle of leadership while addressing complex global challenges. In order to make our students future-ready, we aim to provide an education that is of the highest calibre, focusing on the development of these essential skills and abilities.I am always determined to maintain the academic standards of NIET to develop an environment where students can bring out the best in themselves and achieve their career heights. I am eager to set the aspirants on the path to success.",
  },
  {
    id: "h5",
    name: "Dr. Arun Kumar Tripathi",
    role: "Dean, School of Computer Science in Emerging Technologies, Noida Institute of Engineering & Technology (NIET), Greater Noida",
    img: "/Dr. Arun Kumar Tripathi.webp",
    bio: "The best gift one can give to their student is an education of the highest quality. As we move into a globalised and competitive global environment, students must be equipped with 21st Century Skills and exceptional intellectual and academic creativity, enabling them to reach the pinnacle of leadership while addressing complex global challenges. In order to make our students future-ready, we aim to provide an education that is of the highest calibre, focusing on the development of these essential skills and abilities.I am always determined to maintain the academic standards of NIET to develop an environment where students can bring out the best in themselves and achieve their career heights. I am eager to set the aspirants on the path to success.",
  },
]

export default function AboutNIET() {
  const [openHead, setOpenHead] = React.useState<Head | null>(null)

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenHead(null)
    }
    if (openHead) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [openHead])

  return (
    <div className="rounded-xl border-2 border-primary/20 bg-card text-card-foreground p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-gradient-red text-balance text-2xl md:text-3xl font-bold mb-3 border-l-8 border-primary pl-4">
        About NIET
      </h2>
      <p className="leading-relaxed text-muted-foreground text-justify">
        Noida Institute of Engineering & Technology (NIET) Greater Noida is one of the premier Engineering and
        Management institutes of India's National Capital Region (NCR). It was established by eminent visionaries,
        responsible for setting up City Educational & Welfare Society of Meerut, with a vision to provide value driven
        education of global dimensions. The institute is managed by City Educational and Welfare Society, which runs
        several prestigious educational and health organizations, viz.Noida Institute of Engineering & Technology (NIET)
        Greater Noida, City Vocational Public School(CVPS), Pyramid Finishing School, Dayanand Nursing Home, Chandra
        Sen Charitable Hospital & Om Diagnostic Center.
      </p>
      <p className="leading-relaxed text-muted-foreground mt-3 text-justify">
        With strong support from faculty and leadership, students are encouraged to explore new ideas, develop
        future-ready skills, and create meaningful impact.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4">
        {heads.map((h) => (
          <button
            key={h.id}
            onClick={() => setOpenHead(h)}
            className="relative mm-card-glow rounded-2xl p-3 md:p-4 text-left hover:scale-105 md:hover:scale-105 transition-all"
            aria-label={`View ${h.name} details`}
          >
            <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full border border-primary/40 bg-background/80 text-primary text-[10px] font-semibold shadow-sm">
              View
            </span>
            <img
              src={h.img || "/placeholder.svg"}
              alt={h.name}
              className="w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 object-cover rounded-lg border-4 border-primary/20 mb-3 mx-auto"
            />
            <div className="font-semibold text-gradient-red text-center">{h.name}</div>
            <div className="text-sm text-muted-foreground text-center">{h.role}</div>
          </button>
        ))}
      </div>

      {openHead && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
          onClick={() => setOpenHead(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mm-modal-surface rounded-3xl p-6 md:p-8 w-[92vw] max-w-4xl h-[90dvh] max-h-[90dvh] relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenHead(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/80 transition-colors"
              aria-label="Close"
            >
              ×
            </button>

            <div className="flex h-full flex-col md:flex-row gap-6 md:gap-8 min-h-0">
              {/* Left */}
              <div className="md:w-[36%] flex-shrink-0">
                <img
                  src={openHead.img || "/placeholder.svg"}
                  alt={openHead.name}
                  className="w-32 h-44 sm:w-36 sm:h-52 md:w-40 md:h-56 object-cover rounded-lg mb-4 border-4 border-primary/20"
                />
                <div className="">
                  <div className="text-xl font-bold text-gradient-red mb-1">{openHead.name}</div>
                  <div className="text-primary/90">{openHead.role}</div>
                </div>
              </div>

              {/* Right */}
              <div className="md:w-[64%] min-h-0 h-full">
                <div className="bg-accent/30 rounded-2xl p-5 md:p-6 border border-primary/20 h-full min-h-0 overflow-y-auto overscroll-contain touch-pan-y no-scrollbar">
                  <p className="text-muted-foreground leading-relaxed text-sm text-justify">{openHead.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
