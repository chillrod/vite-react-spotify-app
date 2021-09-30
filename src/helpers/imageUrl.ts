export const returnImageUrl = (imageObject: { url: string }) => {
  if (!imageObject) return;

  return imageObject.url;
};
