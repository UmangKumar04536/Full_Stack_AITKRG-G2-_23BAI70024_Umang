import React from "react";

const CounterDisplay = React.memo(({ count, goal }) => {
  console.log("CounterDisplay Rendered");

  return (
    <div>
      <h3>
        {count} / {goal} glasses completed
      </h3>

      {count >= goal && <p>🎉 Goal Reached!</p>}
    </div>
  );
});

export default CounterDisplay;