import React from "react";
import { minutesToDuration } from "../utils/duration";

const Duration = ({
  labelText,
  duration,
  handleDecrease,
  handleIncrease,
  isSessionActive,
}) => {
  const labelTextLower = labelText.toLowerCase();
  const durationTestId = `duration-${labelTextLower}`;
  const increaseTestId = `increase-${labelTextLower}`;
  const decreaseTestId = `decrease-${labelTextLower}`;

  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid={durationTestId}>
        {labelText} Duration: {minutesToDuration(duration)}
      </span>
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid={decreaseTestId}
          onClick={handleDecrease}
          disabled={isSessionActive}
        >
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid={increaseTestId}
          onClick={handleIncrease}
          disabled={isSessionActive}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
};
export default Duration;
