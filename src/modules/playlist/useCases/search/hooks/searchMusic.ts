import axios from "axios";

interface SearchMusicProps {
  access_token: string;
  query: string;
  type: string;
}

export const searchMusic = async ({
  access_token,
  query,
  type,
}: SearchMusicProps) => {
  try {
    const request = await axios.get(
      `https://api.spotify.com/v1/search?q=${query}&type=${type}`,
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
