'use client';
import * as React from 'react';
import { createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

type StepperOrientation = 'horizontal' | 'vertical';
type StepState = 'active' | 'completed' | 'inactive' | 'loading';

interface StepperContextValue {
  activeStep: number;
  setActiveStep: (step: number) => void;
  orientation: StepperOrientation;
}

interface StepItemContextValue {
  step: number;
  state: StepState;
  isDisabled: boolean;
}

const StepperContext = createContext<StepperContextValue | undefined>(undefined);
const StepItemContext = createContext<StepItemContextValue | undefined>(undefined);

function useStepper() {
  const ctx = useContext(StepperContext);
  if (!ctx) throw new Error('useStepper must be used within a Stepper');
  return ctx;
}

function useStepItem() {
  const ctx = useContext(StepItemContext);
  if (!ctx) throw new Error('useStepItem must be used within a StepperItem');
  return ctx;
}

interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  onValueChange?: (value: number) => void;
  orientation?: StepperOrientation;
}

function Stepper({ value, onValueChange, orientation = 'horizontal', className, children, ...props }: StepperProps) {
  const setActiveStep = (step: number) => { onValueChange?.(step); };
  return (
    <StepperContext.Provider value={{ activeStep: value, setActiveStep, orientation }}>
      <div role="tablist" aria-orientation={orientation} className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </StepperContext.Provider>
  );
}

interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
  completed?: boolean;
  disabled?: boolean;
}

function StepperItem({ step, completed = false, disabled = false, className, children, ...props }: StepperItemProps) {
  const { activeStep } = useStepper();
  const state: StepState = completed || step < activeStep ? 'completed' : activeStep === step ? 'active' : 'inactive';
  return (
    <StepItemContext.Provider value={{ step, state, isDisabled: disabled }}>
      <div className={cn('group/step flex items-center justify-center flex-1', className)} data-state={state} {...props}>
        {children}
      </div>
    </StepItemContext.Provider>
  );
}

function StepperIndicator({ children, className }: React.ComponentProps<'div'>) {
  const { state } = useStepItem();
  return (
    <div className={cn(
      'relative flex items-center justify-center size-8 shrink-0 rounded-full text-xs font-bold transition-all duration-300',
      state === 'completed' && 'bg-teal-600 text-white',
      state === 'active' && 'bg-[#0d7c7e] text-white ring-4 ring-teal-200',
      state === 'inactive' && 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400',
      className
    )}>
      {state === 'completed' ? '✓' : children}
    </div>
  );
}

function StepperSeparator({ className }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('h-0.5 flex-1 mx-1 rounded-full bg-gray-200 dark:bg-gray-700 mt-4', className)} />
  );
}

function StepperTitle({ children, className }: React.ComponentProps<'p'>) {
  const { state } = useStepItem();
  return (
    <p className={cn(
      'text-xs font-medium mt-1 text-center transition-colors duration-300',
      state === 'active' && 'text-[#0d7c7e] font-bold',
      state === 'completed' && 'text-teal-600',
      state === 'inactive' && 'text-gray-400',
      className
    )}>
      {children}
    </p>
  );
}

export { Stepper, StepperItem, StepperIndicator, StepperSeparator, StepperTitle, useStepper, useStepItem };
