import StepContainer from "./components/stepContainer";
import * as stepperComponents from "./components/sabtenam";
import { Sabtenam, Takmil, Pardakht } from "./components/sabtenam";
import "./styles.css";

// const steps=[{stepsName:"ثبت نام",component:}]

export default function App() {
  return (
    <div className="App">
      <StepContainer
        steps={[
          { label: "ثبت نام ", component: () => <Sabtenam /> },
          { label: "تکمیل اطلاعات", component: () => <Takmil /> },
          { label: "پرداخت", component: () => <Pardakht /> }
        ]}
      />

      {/* </StepContainer> */}
    </div>
  );
}
