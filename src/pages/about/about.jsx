import SectionHeading from "../../components/SectionHeading";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <SectionHeading
          title="About NovaFlow"
          subtitle="A thoughtful React experience built on strong design principles"
        />
        <p className="about-text">
          NovaFlow is designed to help teams ship interfaces with confidence using accessible
          components, responsive layouts, and clean visuals.
        </p>
      </section>

      <section className="section-block process-section">
        <SectionHeading title="Our process" subtitle="From idea to launch with clarity" />
        <div className="process-grid">
          <article className="process-card">
            <span>1</span>
            <h3>Define structure</h3>
            <p>Organize content around user goals with strong, readable sections and components.</p>
          </article>
          <article className="process-card">
            <span>2</span>
            <h3>Design polished UI</h3>
            <p>Use contrast, spacing, and motion to keep interfaces modern and intuitive.</p>
          </article>
          <article className="process-card">
            <span>3</span>
            <h3>Ship responsive pages</h3>
            <p>Build mobile-first and scale layouts seamlessly across screens.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default About;
