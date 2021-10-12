import { HandleAuthorizationDTO } from "../dto";

const authBaseURL = "https://accounts.spotify.com/en/authorize";

export const handleAuthorization = ({
  client_id,
  redirect_uri,
  scopes,
}: HandleAuthorizationDTO) => {
  window.location.href = `${authBaseURL}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes
    .join(" ")
    .replace(" ", "%20")}`;
};
