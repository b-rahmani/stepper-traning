import { useState } from "react";
import Stepper from "./stepper";

const StepContainer = ({ steps }) => {
  const [activeSteps, setActiveSteps] = useState(0);

  let Component = steps[activeSteps]?.component;

  const changeActiveSteps = (num) => {
    if (num < 0 || num > steps.length) {
      return;
    }
    if (num === steps.length) {
      alert("all is done");
    }

    setActiveSteps(num);
  };

  return (
    <>
      <div style={{ margin: "50px" }}>
        active component index aqual to {activeSteps}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          margin: "0 0 100px 0"
        }}
      >
        {steps.map((step, index) => (
          <>
            <div
              style={{
                display: "flex",
                margin: "0 10px",
                padding: "5px",
                backgroundColor: activeSteps === index ? "green" : "white",
                color: activeSteps === index ? "white" : "black"
              }}
            >
              <Stepper key={step.label} isActived={activeSteps === index}>
                {step.label}
              </Stepper>
            </div>
          </>
        ))}
      </div>
      {
        <div style={{ margin: "30px 0" }}>
          {steps[activeSteps]?.component ? <Component /> : null}
          {/* <Component /> */}
          {/* <steps[activeSteps].component /> */}
        </div>
      }
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <button
          style={{
            backgroundColor: "lightskyblue",
            padding: "7px 10px",
            borderRadius: "5px",
            border: "none",
            color: "#EEE"
          }}
          onClick={() => changeActiveSteps(activeSteps - 1)}
        >
          preview
        </button>
        <button
          style={{
            backgroundColor: "lightcoral",
            padding: "7px 10px",
            borderRadius: "5px",
            border: "none",
            color: "#EEE"
          }}
          onClick={() => changeActiveSteps(activeSteps + 1)}
        >
          {activeSteps < steps.length - 1 ? "next" : "done"}
        </button>
      </div>
    </>
  );
};

export default StepContainer;
