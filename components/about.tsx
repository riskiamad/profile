export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed text-justify">
                I&#39;m a passionate Software Engineer with extensive experience in building scalable digital solutions. My
                expertise spans across full-stack development, software architecture, and seamless third-party
                integrations.
              </p>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed text-justify">
                I specialize in creating robust applications for various domains including marketplace platforms,
                e-commerce solutions, live streaming services, and Islamic digital solutions.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                With a strong foundation in modern technologies and cloud platforms, I help businesses transform their
                ideas into powerful digital experiences.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Core Domains</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Marketplace & E-commerce</li>
                  <li>• Telecommunication </li>
                  <li>• Live Score & Streaming</li>
                  <li>• Payment Gateway Integration</li>
                  <li>• Sharia Digital Solutions</li>
                  <li>• Investor Relations Systems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Location</h3>
                <p className="text-slate-600">Indonesia (Remote Available)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
