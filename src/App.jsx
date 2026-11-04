import { useState } from "react";

const projects = [
  { number: "01", title: "Weather App", type: "REAL-TIME WEATHER", description: "A focused weather experience that turns live forecast data into a clear, useful snapshot of the day.", tech: ["React", "REST API"], github: "https://github.com/iamsachinG/Weather", demo: "https://cmwr.vercel.app/" },
  { number: "02", title: "The Leaf", type: "WEB EXPERIENCE", description: "A calm, modern web experience built around thoughtful visual design and a responsive interface.", tech: ["React", "CSS"], github: "https://github.com/iamsachinG/The-Leaf", demo: "https://iamsaching.github.io/The_Leaf/" },
  { number: "03", title: "MeowFacts", type: "API INTEGRATION", description: "A playful little app serving up random cat facts, built to explore async JavaScript and public APIs.", tech: ["JavaScript", "REST API"], github: "https://github.com/iamsachinG/MeowFacts", demo: "https://iamsaching.github.io/MeowFacts/" },
];
const skills = ["HTML & CSS", "Tailwind CSS", "JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "REST APIs", "GraphQL", "MongoDB", "MySQL", "Git & GitHub", "Postman", "Docker", "Kubernetes", "Python", "TensorFlow"];

function Arrow({ diagonal = false }) { return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>; }

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Sachin Gupta, home"><span className="brand-mark">S<span>.</span></span><span>SACHIN GUPTA<small>DEVELOPER & CREATOR</small></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span></button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Work</a><a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <Arrow diagonal /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"></span> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line"></span> MUMBAI, INDIA</div>
            <h1>Building digital<br />things with <span className="serif-accent">purpose.</span></h1>
            <p className="hero-lede">Hey, I’m Sachin — a full-stack developer and BCA student who loves turning thoughtful ideas into useful, well-crafted experiences.</p>
            <div className="hero-actions flex flex-wrap items-center gap-6"><a className="button button-dark" href="#work">Explore my work <Arrow /></a><a className="text-link" href="/Resume.pdf" target="_blank" rel="noreferrer">View résumé <Arrow diagonal /></a></div>
            <div className="hero-meta"><span>01 / 04</span><span className="meta-rule"></span><span>DESIGN-MINDED DEVELOPER</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-frame"><img src="/profile.jpg" alt="Portrait of Sachin Gupta" /><div className="frame-note">CURIOUS BY NATURE<br />CREATING BY CHOICE</div><div className="frame-index">SG — 2025</div></div>
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><span className="visual-star">✳</span>
            <div className="visual-caption"><span>✳</span> SMALL DETAILS. BIG PICTURE.</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO DISCOVER</span><i></i></a>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-label"><span>01</span> A LITTLE INTRODUCTION</div>
          <div className="intro-content"><h2>Curiosity is where<br />my best work <span className="serif-accent">begins.</span></h2><div className="intro-copy"><p>I’m Sachin Gupta, a full-stack developer and BCA student at Thakur College of Engineering and Technology in Mumbai. I enjoy building digital products that feel as considered as they are functional.</p><p>From shaping an interface to connecting the systems behind it, I like being part of the whole process — learning, experimenting, and making each project a little better.</p><a className="text-link" href="mailto:guptasachin6299@gmail.com">A bit more about me <Arrow /></a></div></div>
          <div className="stats grid grid-cols-3"><div><strong>03<span>+</span></strong><small>PROJECTS MADE</small></div><div><strong>{skills.length}<span>+</span></strong><small>TOOLS & TECHNOLOGIES</small></div><div><strong>∞</strong><small>THINGS LEFT TO LEARN</small></div></div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading"><div><div className="section-label"><span>02</span> SELECTED WORK</div><h2>Things I’ve <span className="serif-accent">made.</span></h2></div><p>A few experiments, ideas, and<br className="desktop-break" /> projects brought to life.</p></div>
          <div className="project-list">{projects.map((project) => <article className="project-row" key={project.number}><span className="project-number">{project.number}</span><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>GitHub <Arrow diagonal /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live site <Arrow diagonal /></a>}</div></article>)}</div>
        </section>

        <section className="skills section-wrap" id="skills"><div className="skills-heading"><div className="section-label"><span>03</span> MY TOOLKIT</div><h2>Tools for the<br /><span className="serif-accent">curious mind.</span></h2><p>I’m always learning something new. These are a few of the tools I reach for along the way.</p></div><div className="skill-grid">{skills.map((skill, i) => <div className="skill-item" key={skill}><span>0{i + 1}</span>{skill}<Arrow diagonal /></div>)}</div></section>

        <section className="contact section-wrap" id="contact"><div className="section-label"><span>04</span> WHAT’S NEXT?</div><div className="contact-content"><div><p className="contact-kicker">HAVE A GOOD ONE IN MIND?</p><h2>Let’s make<br />something <span className="serif-accent">matter.</span></h2></div><div className="contact-action-stack"><a className="contact-circle" href="https://wa.me/919820882829" target="_blank" rel="noreferrer" aria-label="Say hello to Sachin on WhatsApp"><span>SAY HELLO</span><b>↗</b></a><a className="whatsapp-number" href="https://wa.me/919820882829" target="_blank" rel="noreferrer">Chat on WhatsApp <Arrow diagonal /></a></div></div><div className="contact-bottom"><p>Open to internships, collaborations, and interesting conversations.</p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=guptasachin6299%40gmail.com" target="_blank" rel="noreferrer">guptasachin6299@gmail.com <Arrow diagonal /></a></div></section>
      </main>
      <footer className="site-footer"><a className="footer-brand" href="#home">S<span>.</span></a><span>DESIGNED & BUILT BY SACHIN GUPTA</span><div className="social-links"><a href="https://github.com/iamsachinG" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a><a href="https://linkedin.com/in/sachingupta6299" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a><a href="/Resume.pdf" target="_blank" rel="noreferrer">RÉSUMÉ <Arrow diagonal /></a></div><small>© {new Date().getFullYear()} — MADE WITH INTENTION</small></footer>
    </>
  );
}
export default App;
