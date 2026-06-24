function FeatureCard({ icon, title, description }) {
  return (
    <article className="feature-card">
      <div className="icon-shell">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default FeatureCard;
