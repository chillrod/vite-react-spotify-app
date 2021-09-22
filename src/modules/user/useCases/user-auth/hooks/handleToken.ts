import axios from "axios";

const handleTokenBaseURL = "https://accounts.spotify.com/api/token";

interface HandleTokenProps {
  code: string;
  redirect_uri: string;
  client_id?: string;
  client_secret?: string | true | undefined;
}

/* TO-DO
[ ] - Change client_id, client_secret to Base64 Header
*/

export const handleToken = async ({
  code,
  redirect_uri,
  client_id,
  client_secret,
}: HandleTokenProps) => {
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
      .then((res) => {
        const { data } = res;

        localStorage.setItem("access_token", data.access_token);
      });
  } catch (err) {
    console.log(err);
  }
};
