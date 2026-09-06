/*
 * Midnight Launchpad design reminder: use asymmetric editorial composition, graphite depth,
 * Signal Aqua guidance, visible craft, and motion that feels like a clean system response.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Instagram,
  Mail,
  Menu,
  Monitor,
  Palette,
  Phone,
  Plus,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const STORAGE = {
  mark: "/manus-storage/creativebyte-logo-user_08669689.jpeg",
  hero: "/manus-storage/creativebyte-hero-orbit_2dfb4f31.png",
  services: "/manus-storage/creativebyte-services-v2_b5bcf4c1.png",
  portfolio: "/manus-storage/creativebyte-portfolio-v2_7b634d8d.png",
  contact: "/manus-storage/creativebyte-contact-v2_6bfc13b1.png",
  poster: "/manus-storage/creativebyte-poster_c4d187b3.webp",
};

const services = [
  {
    index: "01",
    title: "Business websites",
    description: "A clear, credible home for your business — built to explain what you do and make the next step easy.",
    icon: Monitor,
    accent: "aqua",
  },
  {
    index: "02",
    title: "Portfolio websites",
    description: "A sharper stage for artists, creators, and specialists who need their work to do the talking.",
    icon: Palette,
    accent: "amber",
  },
  {
    index: "03",
    title: "Professional websites",
    description: "A polished digital presence for consultants, firms, and teams who are ready to look the part.",
    icon: Sparkles,
    accent: "pearl",
  },
  {
    index: "04",
    title: "Custom web projects",
    description: "A made-for-you build when the brief is different, the idea is specific, or the usual template will not do.",
    icon: Zap,
    accent: "aqua",
  },
  {
    index: "05",
    title: "Digital solutions",
    description: "Thoughtful digital tools, responsive experiences, and launch-ready foundations that grow with you.",
    icon: Smartphone,
    accent: "amber",
  },
];

const process = [
  ["01", "Bring the rough brief", "Tell us what you want to be known for, who you want to reach, and what the site needs to do."],
  ["02", "Find the signal", "We shape the structure, visual direction, and content priorities so the idea feels unmistakably yours."],
  ["03", "Build the launch", "You get a responsive, modern website that is ready to share, show, and grow into."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-lockup" href="#top" onClick={closeMenu} aria-label="CreativeByte home">
            <span className="brand-mark-wrap">
              <img src={STORAGE.mark} alt="CreativeByte logo" className="brand-mark" />
            </span>
            <span className="brand-copy">
              <span className="brand-name">CreativeByte</span>
              <span className="brand-tagline">All digital works</span>
            </span>
          </a>

          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#process" onClick={closeMenu}>How it works</a>
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a className="header-cta" href="#contact">
            Start a project <ArrowUpRight size={16} strokeWidth={2.4} />
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <img src={STORAGE.hero} alt="Abstract cyan orbital light over a dark digital workspace" className="hero-image" />
          <div className="hero-vignette" />
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow"><span className="eyebrow-pulse" /> For ideas that deserve a better first impression</div>
              <h1>Got an idea?<br /><em>Let&apos;s build</em> the signal.</h1>
              <p className="hero-lede">CreativeByte creates modern websites and digital experiences for businesses, creators, and professionals who are ready to be seen clearly.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Build my website <ArrowRight size={17} /></a>
                <a className="text-link" href="#services">Explore what we do <ChevronRight size={17} /></a>
              </div>
              <div className="hero-proof-row">
                <div className="proof-item"><span className="proof-symbol">↗</span><span>Affordable builds</span></div>
                <div className="proof-item"><span className="proof-symbol">◌</span><span>Mobile-first thinking</span></div>
                <div className="proof-item"><span className="proof-symbol">✦</span><span>Built for your next step</span></div>
              </div>
            </div>

            <div className="hero-side-note" aria-hidden="true">
              <span className="side-note-line" />
              <span>creativebyte / 2026</span>
              <span>digital studio</span>
            </div>
          </div>
          <a className="scroll-cue" href="#services" aria-label="Scroll to services"><span>Scroll to explore</span><ArrowDownRight size={17} /></a>
        </section>

        <section className="signal-strip" aria-label="CreativeByte introduction">
          <div className="container signal-strip-inner">
            <span className="strip-label">01 / The brief</span>
            <p>You don&apos;t need another website that looks like everyone else. <strong>You need a digital home that makes your work easier to trust.</strong></p>
            <span className="strip-mark">CB<span>•</span></span>
          </div>
        </section>

        <section className="services-section" id="services">
          <span className="section-route route-services" aria-hidden="true"><i />01 / service signal</span>
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <div className="eyebrow"><span>What we build</span><span className="eyebrow-rule" /></div>
                <h2>Digital work with<br /><span>a point of view.</span></h2>
              </div>
              <div className="heading-aside">
                <p>From first idea to live link, we make the digital part feel less intimidating — and a lot more like you.</p>
                <a className="mini-link" href="#contact">Tell us what you&apos;re planning <ArrowUpRight size={15} /></a>
              </div>
            </div>

            <div className="services-layout">
              <div className="services-list">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <article className={`service-row accent-${service.accent}`} key={service.index}>
                      <span className="service-index">{service.index}</span>
                      <span className="service-icon"><Icon size={20} strokeWidth={1.6} /></span>
                      <div className="service-content"><h3>{service.title}</h3><p>{service.description}</p></div>
                      <span className="service-arrow"><ArrowUpRight size={18} /></span>
                    </article>
                  );
                })}
              </div>
              <div className="services-visual">
                <div className="device-stack" aria-label="Responsive device preview composition">
                  <div className="device device-desktop"><span className="device-topbar"><i /><i /><i /></span><span className="device-hero-block" /><span className="device-copy-line line-long" /><span className="device-copy-line" /><span className="device-chip-row"><i /><i /><i /></span></div>
                  <div className="device device-tablet"><span className="device-topbar"><i /><i /><i /></span><span className="device-hero-block" /><span className="device-copy-line line-long" /><span className="device-copy-line" /><span className="device-chip-row"><i /><i /></span></div>
                  <div className="device device-phone"><span className="device-speaker" /><span className="device-hero-block" /><span className="device-copy-line line-long" /><span className="device-copy-line" /><span className="device-chip-row"><i /><i /></span></div>
                </div>
                <div className="visual-caption"><span>Responsive by default</span><span>crafted / not copied</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="manifesto-section">
          <div className="container manifesto-grid">
            <div className="manifesto-number">02<span>/03</span></div>
            <div className="manifesto-copy">
              <div className="eyebrow"><span>Our point of view</span><span className="eyebrow-rule" /></div>
              <h2>Modern should feel <em>human.</em></h2>
              <p>Good digital work is not about adding more noise. It is about making the right things easier to understand, easier to remember, and easier to act on.</p>
              <div className="manifesto-list">
                <div><Check size={16} /><span>Clear structure before clever effects</span></div>
                <div><Check size={16} /><span>A visual system that sounds like you</span></div>
                <div><Check size={16} /><span>Small details that make a big first impression</span></div>
              </div>
            </div>
            <div className="manifesto-orbit" aria-hidden="true"><span className="orbit-ring ring-one" /><span className="orbit-ring ring-two" /><span className="orbit-core">CB</span><span className="orbit-node node-one" /><span className="orbit-node node-two" /></div>
          </div>
        </section>

        <section className="process-section" id="process">
          <span className="section-route route-process" aria-hidden="true"><i />02 / build sequence</span>
          <div className="container">
            <div className="section-heading process-heading">
              <div>
                <div className="eyebrow"><span>How it works</span><span className="eyebrow-rule" /></div>
                <h2>From rough idea<br /><span>to ready-to-share.</span></h2>
              </div>
              <p>Simple process. Honest conversations. A build that keeps moving.</p>
            </div>
            <div className="process-grid">
              {process.map(([number, title, description]) => (
                <article className="process-card" key={number}>
                  <div className="process-card-top"><span>{number}</span><Plus size={18} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="process-card-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <span className="section-route route-work" aria-hidden="true"><i />03 / proof of craft</span>
          <div className="container">
            <div className="work-heading-row">
              <div>
                <div className="eyebrow"><span>Selected directions</span><span className="eyebrow-rule" /></div>
                <h2>Make the work<br /><span>easy to remember.</span></h2>
              </div>
              <span className="work-note">A few ways your next<br />digital home could feel.</span>
            </div>
            <div className="work-showcase">
              <div className="work-image-frame"><img src={STORAGE.poster} alt="CreativeByte poster showing website and digital solution work" loading="lazy" /><div className="frame-corner corner-tl" /><div className="frame-corner corner-br" /></div>
              <div className="work-caption">
                <span className="work-caption-index">03 / 03</span>
                <div><h3>One studio.<br /><em>Many ways forward.</em></h3><p>Business, portfolio, professional, or something entirely custom — the right direction starts with the story you want people to see.</p></div>
                <a className="circle-link" href="#contact" aria-label="Talk to CreativeByte"><ArrowUpRight size={22} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="section-route route-contact" aria-hidden="true"><i />04 / launch signal</span>
          <div className="contact-orbit-art" aria-hidden="true"><span className="contact-orbit-ring" /><span className="contact-orbit-node" /><span className="contact-route route-a" /><span className="contact-route route-b" /></div>
          <div className="contact-overlay" />
          <div className="container contact-content">
            <div className="contact-copy">
              <div className="eyebrow"><span>Let&apos;s make it real</span><span className="eyebrow-rule" /></div>
              <h2>Bring the idea.<br /><em>We&apos;ll build the signal.</em></h2>
              <p>Tell us what you&apos;re imagining. We&apos;ll help you find the clearest next step — no jargon, no pressure.</p>
              <div className="contact-actions">
                <a className="button button-primary" href="mailto:creativebyte2026@gmail.com">Email CreativeByte <Mail size={17} /></a>
                <a className="button button-ghost" href="tel:+919884899636">Call 98848 99636 <Phone size={17} /></a>
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-detail"><span className="detail-label">Call / WhatsApp</span><div><a href="tel:+919884899636">98848 99636</a><a href="tel:+918610983190">86109 83190</a><a href="tel:+918148132731">81481 32731</a></div></div>
              <div className="contact-detail"><span className="detail-label">Email</span><a href="mailto:creativebyte2026@gmail.com">creativebyte2026@gmail.com</a></div>
              <div className="contact-detail"><span className="detail-label">Follow along</span><a href="https://www.instagram.com/creative_byte26/" target="_blank" rel="noreferrer"><Instagram size={16} /> @creative_byte26</a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand-lockup" href="#top">
            <span className="brand-mark-wrap"><img src={STORAGE.mark} alt="CreativeByte logo" className="brand-mark" /></span>
            <span className="brand-copy"><span className="brand-name">CreativeByte</span><span className="brand-tagline">All digital works</span></span>
          </a>
          <p>Affordable. Modern. Professional.<br /><span>Built for you. Built to help you grow.</span></p>
          <div className="footer-meta"><span>© 2026 CreativeByte</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></div>
        </div>
      </footer>
    </div>
  );
}
