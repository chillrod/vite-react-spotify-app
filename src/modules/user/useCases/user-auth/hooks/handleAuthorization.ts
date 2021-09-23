const authBaseURL = "https://accounts.spotify.com/en/authorize";

interface HandleAuthorizationProps {
  client_id: string;
  redirect_uri: string;
  scopes: string[];
}

export const handleAuthorization = ({
  client_id,
  redirect_uri,
  scopes,
}: HandleAuthorizationProps) => {
  window.location.href = `${authBaseURL}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes
    .join(" ")
    .replace(" ", "%20")}`;
};
