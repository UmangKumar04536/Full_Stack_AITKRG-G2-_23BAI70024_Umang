import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import CounterDisplay from "../components/CounterDisplay";

const WaterTracker = () => {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("waterCount")) || 0;
  });

  const [goal, setGoal] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Save count
  useEffect(() => {
    localStorage.setItem("waterCount", count);
  }, [count]);

  // Fetch health tip
  useEffect(() => {
    const fetchTip = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setTip(data.slip.advice);
        setError(null);
      } catch (err) {
        setError("Failed to fetch health tip.");
      } finally {
        setLoading(false);
      }
    };

    fetchTip();
  }, []);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <Navbar />

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          width: "300px",
          margin: "40px auto",
          textAlign: "center",
        }}
      >
        <h2>💧 Water Tracker</h2>

        <CounterDisplay count={count} goal={goal} />

        <div style={{ marginTop: "10px" }}>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
        </div>

        <div style={{ marginTop: "15px" }}>
          <label>Daily Goal: </label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <h4>Today's Health Tip:</h4>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && <p>{tip}</p>}
        </div>
      </div>
    </div>
  );
};

export default WaterTracker;