import axios from "axios";

export const playTrack = async ({
  device,
  access_token,
  filterActives,
}: any) => {
  const { uri } = filterActives;

  try {
    const request = await axios.put(
      `https://api.spotify.com/v1/me/player/play?device_id=${device.device_id}`,
      {
        uris: [uri],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return request;
  } catch (err: any) {
    throw new Error(err);
  }
};
