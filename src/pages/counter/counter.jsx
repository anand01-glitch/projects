import { useState } from "react";
import Button from "../../components/Button";
import SectionHeading from "../../components/SectionHeading";
import StateMessage from "../../components/StateMessage";

function Counter() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("ready");

  const handleIncrement = () => {
    setStatus("ready");
    setCount((value) => Math.min(10, value + 1));
  };

  const handleDecrement = () => {
    setStatus("ready");
    setCount((value) => Math.max(0, value - 1));
  };

  return (
    <div className="counter-page">
      <section className="section-block counter-section">
        <SectionHeading title="Interactive counter" subtitle="A clean example of a polished UI state." />

        <div className="counter-panel">
          <div className="counter-card">
            <p className="small-label">Live demo</p>
            <div className="counter-value">{count}</div>
            <div className="counter-actions">
              <Button onClick={handleDecrement} variant="secondary">
                Decrease
              </Button>
              <Button onClick={handleIncrement}>Increase</Button>
            </div>
          </div>

          <aside className="counter-sidebar">
            {status === "loading" && (
              <StateMessage
                type="loading"
                title="Loading state"
                description="Simulating a loading UI for dynamic content and async flows."
              />
            )}
            {status === "error" && (
              <StateMessage
                type="error"
                title="Action failed"
                description="Network or validation states can show helpful guidance here."
                actionLabel="Retry"
                onAction={() => setStatus("ready")}
              />
            )}
            {status === "ready" && count === 0 && (
              <StateMessage
                type="empty"
                title="No activity yet"
                description="Start by pressing increase to see how states adapt across the interface."
              />
            )}
            {status === "ready" && count > 0 && (
              <div className="counter-info-card">
                <h3>State details</h3>
                <p>Every interaction is designed to feel responsive and consistent, even on small screens.</p>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Counter;
