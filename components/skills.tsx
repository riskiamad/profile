export default function Skills() {
  const specialties = [
    {
      title: "Digital Solution Crafting",
      description: "End-to-end development of scalable digital products and platforms",
    },
    {
      title: "Third Party Integration",
      description: "Seamless integration with APIs, payment gateways, and external services",
    },
    {
      title: "Software Architecture",
      description: "Designing robust, maintainable, and scalable system architectures",
    },
    {
      title: "Full-Stack Development",
      description: "Complete web and software application development",
    },
  ]

  const technologies = {
    Backend: ["Go", "PHP", "Node.js", "Python"],
    Frontend: ["Next.js", "Nuxt.js", "React", "Vue.js"],
    Frameworks: ["Laravel", "Fiber", "Echo", "Flask", "Django", "Nest.js", "Fastify"],
    "Cloud & DevOps": ["AWS", "Google Cloud", "Docker", "Kubernetes"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    Tools: ["Git", "CI/CD", "Microservices", "REST APIs"],
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">Skills & Expertise</h2>

          {/* Specialties */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Specialties</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialties.map((specialty, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">{specialty.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{specialty.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Technologies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(technologies).map(([category, techs]) => (
                <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
