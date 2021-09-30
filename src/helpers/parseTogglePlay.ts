export const parseTogglePlay = (currentState: boolean) => {
  if (!currentState) return "Resume";

  return "Pause";
};
