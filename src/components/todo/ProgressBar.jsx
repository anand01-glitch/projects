function ProgressBar({ percent }) {
  return (
    <section className="progress-card">
      <div className="progress-header">
        <div>
          <p className="eyebrow">Progress</p>
          <h3>Completion rate</h3>
        </div>
        <strong>{percent}%</strong>
      </div>
      <div className="progress-track" aria-label={`Completion progress ${percent} percent`}>
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
      <p className="progress-note">Your progress updates immediately as tasks change.</p>
    </section>
  );
}

export default ProgressBar;
