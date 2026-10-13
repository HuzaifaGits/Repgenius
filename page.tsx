const services = [
  { number: "01", title: "Phone repairs", copy: "Cracked screens, tired batteries, charging issues and more.", icon: "▯", tag: "Most popular" },
  { number: "02", title: "Tablet repairs", copy: "Get your iPad or tablet back to doing what it does best.", icon: "▭", tag: "Expert care" },
  { number: "03", title: "Laptop & computer", copy: "Practical help for everyday tech problems and hardware faults.", icon: "⌘", tag: "Get it checked" },
  { number: "04", title: "Accessories & devices", copy: "Useful accessories and carefully checked used devices.", icon: "◈", tag: "Explore in store" },
];

const steps = [
  { n: "01", title: "Tell us what’s wrong", copy: "Choose your device and let us know what needs fixing." },
  { n: "02", title: "Get expert advice", copy: "Our team will assess the issue and talk you through the next steps." },
  { n: "03", title: "Get back to it", copy: "We’ll work to get your device back in your hands as soon as possible." },
];

const benefits = [
  { icon: "✳", title: "Skilled technicians", copy: "Experienced help for the devices you rely on." },
  { icon: "◷", title: "Fast, convenient service", copy: "Walk-ins welcome at our Stratford location." },
  { icon: "◇", title: "Quality-focused repairs", copy: "Careful work and clear communication throughout." },
  { icon: "♡", title: "A local team you can trust", copy: "Friendly service built around real people." },
];

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }

export default function Home() {
  return (
    <main>
      <div className="announcement"><span className="announcement-dot" /> Your local tech repair specialists <span className="announcement-sep">·</span> Stratford, London</div>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Repair Genius home">
          <span className="brand-mark"><span>R</span><i>G</i></span>
          <span className="brand-name">REPAIR<span>GENIUS</span><small>DEVICE REPAIR SPECIALISTS</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Repairs & services <span className="nav-chevron">⌄</span></a>
          <a href="#why-us">Why Repair Genius</a>
          <a href="#location">Find us</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#book">Book a repair <Arrow /></a>
        <a className="mobile-book" href="#book">Book now <Arrow /></a>
      </header>

      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> YOUR TECH. BACK IN ACTION.</div>
          <h1>Good tech deserves<br /><em>great care.</em></h1>
          <p className="hero-description">From cracked screens to battery troubles, get expert device repairs from a friendly team that puts your tech first.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#book">Book a repair <Arrow /></a>
            <a className="text-link" href="#services">Explore our services <span>↓</span></a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack"><span>RG</span><span>✓</span><span>★</span></div>
            <div><div className="stars">★★★★★ <span>5-star service</span></div><p>Trusted by our local community</p></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image" role="img" aria-label="Technician carefully repairing a smartphone">
            <div className="image-overlay" />
            <div className="image-label"><span className="pulse" /> EXPERT REPAIRS, PERSONAL SERVICE</div>
          </div>
          <div className="floating-card repair-card">
            <span className="floating-icon">✓</span><div><strong>Here to help</strong><small>Repairs made simpler</small></div>
          </div>
          <div className="floating-card location-card">
            <span className="location-icon">⌖</span><div><strong>Stratford, London</strong><small>Walk-ins welcome</small></div>
          </div>
          <div className="hero-sticker"><span>REPAIR</span><b>WITH<br />CARE.</b><i>✳</i></div>
        </div>
        <div className="hero-bottom"><span>01 / DEVICE REPAIR</span><span>DEPENDABLE SERVICE. NO FUSS.</span><a href="#services">SCROLL TO EXPLORE ↓</a></div>
      </section>

      <section className="service-strip" aria-label="Service highlights">
        <div><span className="strip-icon">✳</span><strong>Phones, tablets & more</strong></div>
        <div><span className="strip-icon">◷</span><strong>Convenient local service</strong></div>
        <div><span className="strip-icon">✓</span><strong>Friendly expert support</strong></div>
        <div><span className="strip-icon">⌖</span><strong>Based in Stratford, London</strong></div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="eyebrow-line" /> HOW WE CAN HELP</div><h2>Let’s get your<br /><em>tech sorted.</em></h2></div>
          <div className="section-intro"><p>Everyday tech problems can throw your day off. We’re here with practical repair services and helpful advice to get you moving again.</p><a className="text-link" href="#book">Find the right service <span>→</span></a></div>
        </div>
        <div className="service-grid">
          {services.map((service) => <a className="service-card" href="#book" key={service.number}>
            <div className="service-card-top"><span className="service-number">{service.number} / SERVICE</span><span className="service-tag">{service.tag}</span></div>
            <div className="service-illustration"><span className="device-glyph">{service.icon}</span><span className="illustration-spark">✳</span><span className="illustration-circle" /></div>
            <div className="service-card-bottom"><div><h3>{service.title}</h3><p>{service.copy}</p></div><span className="circle-arrow"><Arrow /></span></div>
          </a>)}
        </div>
      </section>

      <section className="why-section" id="why-us">
        <div className="why-visual">
          <div className="why-photo" role="img" aria-label="Close-up of professional electronics repair work" />
          <div className="why-note"><span>THE REPAIR GENIUS WAY</span><b>Careful hands.<br /><em>Clear answers.</em></b><i>✳</i></div>
        </div>
        <div className="why-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> A LITTLE MORE HUMAN</div>
          <h2>Repairs with<br />people <em>in mind.</em></h2>
          <p className="why-lead">Your phone, tablet or laptop is part of your everyday life. We treat it that way.</p>
          <p className="why-body">Since 2003, Repair Genius has helped customers keep their consumer electronics working. Our focus is simple: helpful service, careful repairs and advice you can understand.</p>
          <div className="benefit-grid">{benefits.map((b) => <div className="benefit" key={b.title}><span>{b.icon}</span><div><strong>{b.title}</strong><p>{b.copy}</p></div></div>)}</div>
          <a className="button button-outline" href="#contact">Meet your local repair team <Arrow /></a>
        </div>
      </section>

      <section className="process-section">
        <div className="process-heading"><div className="eyebrow"><span className="eyebrow-line" /> EASY AS 1, 2, 3</div><h2>Less tech stress.<br /><em>More getting on.</em></h2><p>Getting help shouldn’t be complicated. Here’s how to get started.</p></div>
        <div className="steps">{steps.map((step) => <div className="step" key={step.n}><div className="step-number">{step.n}<span>↗</span></div><h3>{step.title}</h3><p>{step.copy}</p></div>)}</div>
      </section>

      <section className="review-section">
        <div className="review-mark">“</div>
        <div className="review-content"><div className="eyebrow"><span className="eyebrow-line" /> GOOD WORDS, GOOD WORK</div><h2>Service that feels<br /><em>like it should.</em></h2><p>We believe a good repair starts with a good conversation. Visit us for straightforward advice and a team that’s ready to help.</p><div className="review-rating"><span className="stars">★★★★★</span><span>Rated 5 stars on our current website</span></div><small className="review-disclaimer">Review rating shown as presented on the existing Repair Genius website. Connect verified review data before launch.</small></div>
        <div className="review-side"><div className="review-card"><div className="review-card-stars">★★★★★</div><p>“Fast, friendly and helpful service. The team took the time to explain the options and what was best for my device.”</p><div className="review-person"><span>RG</span><div><strong>Repair Genius customer</strong><small>Customer feedback preview</small></div></div></div><span className="review-side-note">GOOD SERVICE IS ALWAYS PERSONAL. <b>✳</b></span></div>
      </section>

      <section className="location-section" id="location">
        <div className="location-copy"><div className="eyebrow"><span className="eyebrow-line" /> COME SAY HELLO</div><h2>Local help.<br /><em>Right around<br />the corner.</em></h2><p>Find us at Stratford Shopping Centre. Walk in, tell us what’s going on with your device, and we’ll help you figure out the next step.</p><div className="address-block"><span className="address-pin">⌖</span><div><strong>Repair Genius — Stratford</strong><p>Unit 34, Stratford Market Village<br />70–73 The Mall, Stratford, London<br />E15 1XQ</p></div></div><div className="location-actions"><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Repair+Genius+Stratford+London" target="_blank" rel="noreferrer">Get directions <Arrow /></a><a className="text-link" href="tel:+442085349988">Call us <span>→</span></a></div></div>
        <div className="map-panel"><div className="map-grid" /><div className="map-road road-one" /><div className="map-road road-two" /><div className="map-road road-three" /><div className="map-block block-one" /><div className="map-block block-two" /><div className="map-block block-three" /><div className="map-block block-four" /><div className="map-pin"><span>RG</span><i /></div><div className="map-label"><span>YOU’LL FIND US HERE</span><strong>Stratford, London</strong><small>Unit 34 · Stratford Market Village</small></div><div className="map-bottom">51.5416° N &nbsp; 0.0034° W <span>LOCAL. FRIENDLY. READY TO HELP.</span></div></div>
      </section>

      <section className="book-section" id="book">
        <div className="book-shape shape-one" /><div className="book-shape shape-two" />
        <div className="book-copy"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> LET’S FIX THAT</div><h2>Ready to get<br />back <em>in action?</em></h2><p>Tell us a little about your device and what’s going on. Our team will help you work out the next step.</p><div className="book-contact"><span>Prefer to speak to someone?</span><a href="tel:+442085349988">020 8534 9988 <Arrow /></a></div></div>
        <form className="booking-form" action="mailto:sales@repairgenius.co.uk" method="post" encType="text/plain">
          <div className="form-heading"><span>START YOUR REPAIR ENQUIRY</span><span>01 — 03</span></div>
          <label>Your name<input name="name" placeholder="How should we address you?" required /></label>
          <div className="form-row"><label>Contact number<input name="phone" type="tel" placeholder="Your phone number" required /></label><label>Device type<select name="device" defaultValue="" required><option value="" disabled>Select device</option><option>Mobile phone</option><option>Tablet</option><option>Laptop / computer</option><option>Other device</option></select></label></div>
          <label>What needs fixing?<textarea name="issue" placeholder="Tell us briefly what’s happening..." rows={3} required /></label>
          <button className="button button-dark form-submit" type="submit">Send repair enquiry <Arrow /></button>
          <small className="form-note">Demo enquiry form. Connect a secure form endpoint before production use.</small>
        </form>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-main"><div className="footer-brand-col"><a className="brand brand-footer" href="#"><span className="brand-mark"><span>R</span><i>G</i></span><span className="brand-name">REPAIR<span>GENIUS</span><small>DEVICE REPAIR SPECIALISTS</small></span></a><p>Fast repairs, quality-focused service and a local team that cares about your tech.</p><div className="footer-socials"><a href="https://www.instagram.com/" aria-label="Instagram">ig</a><a href="https://www.facebook.com/" aria-label="Facebook">f</a></div></div>
          <div className="footer-col"><strong>Explore</strong><a href="#services">Repairs & services</a><a href="#why-us">Why Repair Genius</a><a href="#location">Find our store</a><a href="#book">Book a repair</a></div>
          <div className="footer-col"><strong>Get in touch</strong><a href="tel:+442085349988">020 8534 9988</a><a href="tel:+447832370515">07832 370515</a><a href="mailto:sales@repairgenius.co.uk">sales@repairgenius.co.uk</a><span>Stratford, London · E15 1XQ</span></div>
          <div className="footer-hours"><strong>Come by</strong><p><span>Mon – Sat</span><b>9:00 – 18:30</b></p><p><span>Sunday</span><b>11:00 – 17:00</b></p><small>Opening hours sourced from the existing website. Confirm before launch.</small></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Repair Genius. All rights reserved.</span><span>AEG Technologies LTD T/A Repair Genius</span><div><a href="https://repairgenius.co.uk/">Current website</a><a href="#contact">Contact</a></div></div>
      </footer>
    </main>
  );
}
