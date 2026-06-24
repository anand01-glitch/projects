function CelebrationOverlay({ completedCount, totalCount, onStartNew, onClose, dateTime }) {
  return (
    <div className="celebration-overlay" role="dialog" aria-modal="true">
      <div className="celebration-card">
        <div className="celebration-header">
          <h2>Congratulations!</h2>
          <p>You've completed all your tasks!</p>
        </div>
        <p className="celebration-hero">100% Complete! Amazing work!</p>
        <div className="celebration-stats">
          <div>
            <p>Completed</p>
            <strong>{completedCount}</strong>
          </div>
          <div>
            <p>Total tasks</p>
            <strong>{totalCount}</strong>
          </div>
        </div>
        <p className="celebration-meta">Completed at {dateTime}</p>
        <div className="celebration-actions">
          <button type="button" className="button button-primary" onClick={onStartNew}>
            Start new list
          </button>
          <button type="button" className="button button-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <div className="confetti-grid">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} className={`confetti-piece confetti-${index % 6}`} />
        ))}
      </div>
    </div>
  );
}

export default CelebrationOverlay;
