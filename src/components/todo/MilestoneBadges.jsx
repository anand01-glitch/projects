function MilestoneBadges({ percent }) {
  const milestones = [25, 50, 75, 100];
  return (
    <div className="milestone-badges">
      {milestones.map((value) => (
        <div key={value} className={`milestone-chip ${percent >= value ? "active" : "inactive"}`}>
          <strong>{value}%</strong>
          <span>{value === 100 ? "Perfect" : "Milestone"}</span>
        </div>
      ))}
    </div>
  );
}

export default MilestoneBadges;
