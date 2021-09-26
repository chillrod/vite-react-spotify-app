export const returnIndexOfArray = (array: any, index: number) => {
  if (!array) return;

  return array.find((ar: any, arrayIndex: number) => arrayIndex === index);
};
