export const parseSearchButton = (state: boolean) => {
  if (!state) return "Back to search";

  return "Back to queue";
};
