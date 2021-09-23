import axios from "axios";

const handleTokenBaseURL = "https://accounts.spotify.com/api/token";

interface HandleTokenProps {
  code: string;
  grant_type: string;
  redirect_uri: string;
  client_id?: string | undefined;
  client_secret?: string | true | undefined;
}

/* TO-DO
[ ] - Change client_id, client_secret to Base64 Header
*/

export const handleToken = async ({
  grant_type,
  code,
  redirect_uri,
  client_id,
  client_secret,
}: HandleTokenProps) => {
  const params = { grant_type, code, redirect_uri, client_id, client_secret };

  const paramsToQueryString = new URLSearchParams(params);

  try {
    const request = await axios.post(
      handleTokenBaseURL,
      paramsToQueryString.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token } = request.data;

    return { access_token };
  } catch (err: any) {
    throw new Error(err);
  }
};
