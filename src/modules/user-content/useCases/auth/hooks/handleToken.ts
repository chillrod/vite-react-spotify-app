import axios from "axios";

const handleTokenBaseURL = "https://accounts.spotify.com/api/token";

interface HandleTokenProps {
  code: string;
  redirect_uri: string;
  client_id?: string;
  client_secret?: string;
}

const client_id = "8210f316a4f6404dab30d2e736a6099d";
const client_secret = import.meta.env.VITE_CLIENT_SECRET;

export const handleToken = async ({ code, redirect_uri }: HandleTokenProps) => {
  const params = {
    code,
    grant_type: "authorization_code",
    redirect_uri,
    client_id,
    client_secret,
  };

  const paramsToQueryString = new URLSearchParams(params);

  try {
    await axios
      .post(handleTokenBaseURL, paramsToQueryString.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};
