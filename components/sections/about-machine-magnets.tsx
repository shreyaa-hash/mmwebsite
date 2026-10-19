export default function AboutMachineMagnets() {
  return (
    <div className="rounded-xl border-2 border-primary/20 bg-card text-card-foreground p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-gradient-red text-balance text-2xl md:text-3xl font-bold mb-3 border-l-8 border-primary pl-4">
        About Machine Magnets
      </h2>
      <p className="leading-relaxed text-muted-foreground text-justify">
        Established in September 2024, Machine Magnets is the official Tech Club of NIET, founded with the vision of inspiring innovation, collaboration, and technical excellence among students. The club serves as a dynamic platform that bridges the gap between classroom learning and practical application, enabling students to explore emerging technologies and develop solutions to real-world challenges. Through hands-on workshops, hackathons, seminars, and interactive sessions, Machine Magnets actively promotes student engagement and cultivates an environment where creativity and curiosity thrive.

        Led by a dedicated team of student innovators and guided by experienced faculty mentors, the club focuses on domains such as artificial intelligence, machine learning, web and app development, blockchain, and open-source contributions. Machine Magnets not only empowers students to enhance their technical and leadership skills but also encourages them to think beyond conventional boundaries. With a commitment to continuous learning and growth, the club aims to build a community of passionate technologists ready to shape the future through innovation and collaboration.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border-2 border-primary/30 p-4 bg-gradient-to-br from-accent/30 to-transparent hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-gradient-red">150+</div>
          <div className="text-sm text-muted-foreground">Active Members</div>
        </div>
        <div className="rounded-lg border-2 border-primary/30 p-4 bg-gradient-to-br from-accent/30 to-transparent hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-gradient-red">Events</div>
          <div className="text-sm text-muted-foreground">Hosted for our community</div>
        </div>
        <div className="rounded-lg border-2 border-primary/30 p-4 bg-gradient-to-br from-accent/30 to-transparent hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-gradient-red">18</div>
          <div className="text-sm text-muted-foreground">Core Team Members</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border-2 border-primary/30 p-4 bg-gradient-to-br from-accent/30 to-transparent">
          <h3 className="text-gradient-red font-semibold mb-1">Mission</h3>
          <p className="text-sm text-muted-foreground text-justify">
            Empower students with practical AI/ML skills via real-world applications.
          </p>
        </div>
        <div className="rounded-lg border-2 border-primary/30 p-4 bg-gradient-to-br from-accent/30 to-transparent">
          <h3 className="text-gradient-red font-semibold mb-1">Innovation</h3>
          <p className="text-sm text-muted-foreground text-justify">
            Encourage creative approaches to technical challenges and projects.
          </p>
        </div>
        <div className="rounded-lg border-2 border-primary/30 p-4 bg-gradient-to-br from-accent/30 to-transparent">
          <h3 className="text-gradient-red font-semibold mb-1">Community</h3>
          <p className="text-sm text-muted-foreground text-justify">
            Build a supportive environment for knowledge sharing and growth.
          </p>
        </div>
      </div>
    </div>
  )
}
