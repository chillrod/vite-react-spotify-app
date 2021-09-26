import axios from "axios";

interface RecommendedMusicProps {
  access_token: string;
  type: string;
}

export const recommendedMusics = async ({
  access_token,
  type,
}: RecommendedMusicProps) => {
  try {
    const request = await axios.get(
      `https://api.spotify.com/v1/me/top/${type}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return request.data;
  } catch (err) {
    console.log({ err });
  }
};
