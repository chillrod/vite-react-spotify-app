export const returnArtist = (artist: { name: string }) => {
  if (!artist) return;
  return artist.name;
};
