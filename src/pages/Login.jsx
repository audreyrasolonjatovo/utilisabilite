import Background from "../assets/Background";
import StepIndicator from "./StepIndicator";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import StepVerification from "./StepVerification";

export default function Login() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 text-center overflow-hidden bg-[#24226A]">
      <Background className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative bg-white rounded-3xl shadow-xl w-full max-w-3xl p-8 mt-8">
        <div className="mb-6 flex justify-center">
          <StepIndicator />
        </div>
        <StepVerification />
      </div>
    </div>
  );
}
