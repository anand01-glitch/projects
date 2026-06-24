function StateMessage({ type, title, description, actionLabel, onAction }) {
  return (
    <section className={`state-message state-${type}`}>
      <div className="state-icon">{type === "loading" ? "⏳" : type === "error" ? "⚠️" : "✨"}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {actionLabel && (
          <button type="button" className="button button-secondary" onClick={onAction}>
            {actionLabel}
          </button>
        )}
      </div>
    </section>
  );
}

export default StateMessage;
