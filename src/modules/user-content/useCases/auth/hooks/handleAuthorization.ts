const authBaseURL = "https://accounts.spotify.com/en/authorize";

const client_id = "8210f316a4f6404dab30d2e736a6099d";
const redirect_uri = "http://localhost:3000";

const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "user-top-read",
  "streaming",
  "app-remote-control",
];

export const handleAuthorization = (event) => {
  event.preventDefault();

  window.location.href = `${authBaseURL}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes
    .join(" ")
    .replace(" ", "%20")}`;
};
