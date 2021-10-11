export const parseTogglePlay = (currentState: boolean) => {
  if (!currentState) return "Pause";

  return "Resume";
};
