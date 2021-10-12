import axios from "axios";

import { HandleTokenDTO, TokenRequestDTO } from "../dto";

const handleTokenBaseURL = "https://accounts.spotify.com/api/token";

export const handleToken = async ({
  grant_type,
  code,
  redirect_uri,
  client_id,
  client_secret,
}: HandleTokenDTO) => {
  const clientCredentials = btoa(`${client_id}:${client_secret}`);

  try {
    const request: TokenRequestDTO = await axios.post(handleTokenBaseURL, "", {
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
