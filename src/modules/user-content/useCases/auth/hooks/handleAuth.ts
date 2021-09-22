const authBaseURL = "https://accounts.spotify.com/authorize";

const clientID = "8210f316a4f6404dab30d2e736a6099d";
const redirectURL = "http://localhost:3000";

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

export const handleAuth = (event) => {
  event.preventDefault();

  window.location.href = `https://accounts.spotify.com/en/authorize?response_type=code&client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes
    .join(" ")
    .replace(" ", "%20")}`;
};
