import axios from "axios";

const handleTokenBaseURL = "https://accounts.spotify.com/api/token";

interface HandleTokenProps {
  code: string;
  grant_type: string;
  redirect_uri: string;
  client_id?: string | undefined;
  client_secret?: string | true | undefined;
}

interface TokenRequest {
  data: {
    access_token: string;
  };
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
  const clientCredentials = btoa(`${client_id}:${client_secret}`);

  try {
    const request: TokenRequest = await axios.post(handleTokenBaseURL, "", {
      params: {
        grant_type: grant_type,
        code: code,
        redirect_uri: redirect_uri,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${clientCredentials}`,
      },
    });

    const { access_token } = request.data;

    return access_token;
  } catch (err: any) {
    throw new Error(err);
  }
};
