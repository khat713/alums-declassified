'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Stepper, StepperItem, StepperIndicator, StepperSeparator, StepperTitle } from '@/components/ui/stepper';

const steps = [
  { step: 1, title: "College Expectations", href: "/module-1" },
  { step: 2, title: "Campus Resources", href: "/module-2" },
  { step: 3, title: "Financial Literacy", href: "/module-3" },
  { step: 4, title: "Essential Life Skills", href: "/module-4" },
  { step: 5, title: "Academic Success", href: "/module-5" },
  { step: 6, title: "Career Preparation", href: "/module-6" },
  { step: 7, title: "Emotional Resilience", href: "/module-7" },
];

export function ModuleStepper({ currentStep }: { currentStep: number }) {
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <nav
      aria-label="Course progress"
      className="w-full bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] px-4 py-3"
    >
      <div className="container mx-auto">
        <Stepper value={currentStep}>
          <ol className="flex items-start w-full list-none m-0 p-0">
            {steps.map((s, index) => {
              const isActive = s.step === currentStep;
              const isCompleted = s.step < currentStep;
              const ariaLabel = isActive
                ? `${s.title} — current step`
                : isCompleted
                ? `${s.title} — completed`
                : `${s.title} — not yet started`;

              return (
                <React.Fragment key={s.step}>
                  <li className="flex-1">
                    <StepperItem
                      step={s.step}
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => router.push(s.href)}
                      onKeyDown={(e) => handleKeyDown(e, s.href)}
                      tabIndex={0}
                      role="button"
                      aria-label={ariaLabel}
                      aria-current={isActive ? 'step' : undefined}
                    >
                      <StepperIndicator>{s.step}</StepperIndicator>
                      <StepperTitle className="hidden md:block max-w-[80px] truncate">{s.title}</StepperTitle>
                    </StepperItem>
                  </li>
                  {index < steps.length - 1 && (
                    <StepperSeparator
                      aria-hidden="true"
                      style={currentStep > s.step ? { background: '#0f766e' } : { background: '#cbd5e1' }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </ol>
        </Stepper>
      </div>
    </nav>
  );
}
