import './index.css'

const focusAreas = [
  {
    title: 'Automation Systems',
    description:
      'Designing workflow-driven tools, bots, and digital systems that help businesses reduce manual work and operate more efficiently.',
  },
  {
    title: 'Payment Solutions',
    description:
      'Exploring product flows around payment confirmation, settlement logic, user delivery, and reliable digital experiences.',
  },
  {
    title: 'Bitcoin Integration',
    description:
      'Building and exploring BTC-enabled products and payment ideas that connect open monetary systems with modern web platforms.',
  },
]

const projects = [
  {
    title: 'pontmore-escrow-service',
    description:
      'Escrow service implementation in Rust, part of the Pontmore payment protocol stack for trusted, programmatic settlement.',
    language: 'Rust',
    url: 'https://github.com/mk-Denver/pontmore-escrow-service',
  },
  {
    title: 'pontmore-lightning-escrow',
    description:
      'Lightning Network-based escrow flow in JavaScript, connecting Bitcoin payment rails to digital delivery.',
    language: 'JavaScript',
    url: 'https://github.com/mk-Denver/pontmore-lightning-escrow',
  },
  {
    title: 'descriptor-POC',
    description:
      'Proof of concept exploring output descriptors, built in Rust as a foundation for wallet and key management tooling.',
    language: 'Rust',
    url: 'https://github.com/mk-Denver/descriptor-POC',
  },
  {
    title: 'pontmore/protocol',
    description:
      'The shared Pontmore protocol specification and reference implementation underpinning the escrow and settlement products.',
    language: 'Protocol',
    url: 'https://github.com/pontmore/protocol',
  },
]

const skills = [
  'AI-assisted product building',
  'Automation thinking',
  'Payment flow architecture',
  'System design',
  'Workflow design',
  'Bitcoin product exploration and building',
]

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a href="#home" className="brand">DENVER MTANGE</a>
          <nav className="navLinks">
            <a href="#about">About</a>
            <a href="#focus">Focus</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="section hero">
          <div className="container">
            <p className="eyebrow">AI-Driven Builder</p>
            <h1>Denver Mtange</h1>
            <p className="heroLead">
              Focused on automation, payment systems, and Bitcoin-enabled digital products.
            </p>
            <p className="heroText">
              I build practical systems with AI for moving money, automating workflows,
              and creating digital experiences with real utility.
            </p>

            <div className="actions">
              <a href="#work" className="btn btnPrimary">View Projects</a>
              <a href="#contact" className="btn btnSecondary">Get In Touch</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container narrow">
            <p className="label">About</p>
            <h2>Building lean products with AI.</h2>
            <p className="muted">
              I’m a student and entrepreneur from Kenya building useful digital systems
              with AI around automation, payments, and BTC integration.
            </p>
            <p className="muted">
              My work sits at the intersection of product thinking, workflow design,
              payment logic, and Bitcoin-focused digital experiences. I care about
              simple systems, real utility, and products that solve practical problems.
            </p>
          </div>
        </section>

        <section id="focus" className="section">
          <div className="container">
            <p className="label">Focus</p>
            <h2>What I focus on</h2>
            <p className="sectionIntro">
              I’m most interested in systems that reduce manual work, improve payment
              flows, and connect digital products with BTC-native utility.
            </p>

            <div className="grid">
              {focusAreas.map((item) => (
                <div className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <p className="label">Selected Work</p>
            <h2>Projects and ideas</h2>
            <p className="sectionIntro">
              A mix of platform concepts, automation systems, and Bitcoin-related
              product thinking.
            </p>

            <div className="list">
              {projects.map((project) => (
                <div className="listItem" key={project.title}>
                  <div className="listItemHead">
                    <a href={project.url}
                       target="_blank"
                       rel="noreferrer"
                       className="listItemTitle">{project.title}</a>
                    {project.language && (
                      <span className="lang">{project.language}</span>
                    )}
                  </div>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <p className="label">Capabilities</p>
            <h2>What I bring</h2>
            <div className="pillWrap">
              {skills.map((skill) => (
                <span className="pill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container narrow">
            <p className="label">Vision</p>
            <h2>Simple systems. Real utility.</h2>
            <p className="muted">
              My goal is to build practical digital products that make payments,
              automation, and Bitcoin-enabled systems more useful in everyday life.
            </p>
            <p className="muted">
              I’m interested in combining entrepreneurship, AI-assisted building, and
              strong execution to create tools that are simple, reliable, and grounded
              in real market needs.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container narrow">
            <p className="label">Contact</p>
            <h2>Let’s connect.</h2>
            <p className="muted">
              Open to collaborations, product conversations, and digital business ideas
              around automation, payments, and Bitcoin integration.
            </p>

            <div className="actions">
              <a className="btn btnSecondary" 
                 href="mailto:mtangedenver@gmail.com.com" 
                 target="_blank"
                 rel="noreferrer">Email</a>
              <a className="btn btnSecondary"
                 href="https://x.com/Btc_Stoic_"
                 target="_blank"
                 rel="noreferrer">X / Twitter</a>
              <a className="btn btnSecondary"
                href="https://www.linkedin.com/in/denver-kiravuka-276344240/"
                 target="_blank"
                 rel="noreferrer">LinkedIn</a>
              <a className="btn btnSecondary" 
                 href="https://github.com/mk-Denver"
                 target="_blank"
                 rel="noreferrer">GitHub</a>
                 <a className="btn btnSecondary" 
                 href="https://wa.me/qr/ZBQY6AOEFJBJA1"
                 target="_blank"
                 rel="noreferrer">Whatsapp</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 <span className="accent">Denver Mtange</span>. Built with Love.</p>
        </div>
      </footer>
    </div>
  )
}