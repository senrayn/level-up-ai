import { create } from "zustand"

type OnboardingStep = "avatar" | "pet" | "goal" | "complete"

interface OnboardingState {
  step: OnboardingStep
  avatarType: string
  petSpecies: string
  petName: string
  goalInput: string
  setStep: (step: OnboardingStep) => void
  setAvatarType: (type: string) => void
  setPetSpecies: (species: string) => void
  setPetName: (name: string) => void
  setGoalInput: (input: string) => void
  reset: () => void
}

const initialState = {
  step: "avatar" as OnboardingStep,
  avatarType: "",
  petSpecies: "",
  petName: "",
  goalInput: "",
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  ...initialState,
  setStep: (step) => set({ step }),
  setAvatarType: (avatarType) => set({ avatarType }),
  setPetSpecies: (petSpecies) => set({ petSpecies }),
  setPetName: (petName) => set({ petName }),
  setGoalInput: (goalInput) => set({ goalInput }),
  reset: () => set(initialState),
}))
