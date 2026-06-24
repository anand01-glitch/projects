function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <p className="section-label">{title}</p>
      <h2>{subtitle}</h2>
    </div>
  );
}

export default SectionHeading;
