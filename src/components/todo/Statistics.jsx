function Statistics({ total, completed, pending, percent }) {
  return (
    <section className="stats-card-grid">
      <div className="stats-card">
        <p>Total Tasks</p>
        <strong>{total}</strong>
      </div>
      <div className="stats-card">
        <p>Completed</p>
        <strong>{completed}</strong>
      </div>
      <div className="stats-card">
        <p>Pending</p>
        <strong>{pending}</strong>
      </div>
      <div className="stats-card stats-card-accent">
        <p>Completion</p>
        <strong>{percent}%</strong>
      </div>
    </section>
  );
}

export default Statistics;
