import { Check } from 'lucide-react';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-0">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={step} className="flex items-center">
            {/* Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : isActive
                    ? 'bg-orange-500 text-white ring-4 ring-orange-500/20'
                    : 'bg-slate-100 text-slate-400 border-2 border-slate-200'
                }`}
              >
                {isCompleted ? <Check size={16} /> : index + 1}
              </div>
              <span
                className={`mt-1.5 text-[10px] font-medium whitespace-nowrap hidden sm:block ${
                  isActive ? 'text-orange-500' : isCompleted ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                {step}
              </span>
            </div>

            {/* Connector */}
            {!isLast && (
              <div
                className={`h-0.5 w-10 sm:w-16 mx-1 transition-all duration-500 ${
                  isCompleted ? 'bg-green-400' : 'bg-slate-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
