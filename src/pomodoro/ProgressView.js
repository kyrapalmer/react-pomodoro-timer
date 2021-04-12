import React from "react";
import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";

function ProgressView({
  mode,
  timer,
  isSessionActive,
  focusDuration,
  breakDuration,
  isSessionPaused,
}) {
  let currentDurationTime = mode === "focus" ? focusDuration : breakDuration;
  currentDurationTime *= 60; //convert minutes to seconds
  
  const timeElapsed = currentDurationTime - timer;

  let width;
  if (timer === 0) {
    width = 100;
  } else {
    width = (100 / currentDurationTime) * timeElapsed;
  }

  return (
    <div style={{ display: isSessionActive ? "block" : "none" }}>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">
            {mode === "focus" ? "Focusing" : "On Break"} for{" "}
            {mode === "focus"
              ? minutesToDuration(focusDuration)
              : minutesToDuration(breakDuration)}{" "}
            minutes
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(timer)} remaining
          </p>
          <h3 style={{ display: isSessionPaused ? "block" : "none" }}>
            PAUSED
          </h3>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={width}
              style={{ width: `${width}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressView;
