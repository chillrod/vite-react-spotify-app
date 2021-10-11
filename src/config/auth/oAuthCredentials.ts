export const oAuthCredentials = {
  client_id: "8210f316a4f6404dab30d2e736a6099d",

  client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET || "",

  redirect_uri: "http://localhost:3000/",
  // redirect_uri: "https://devspotleaf.vercel.app/",

  grant_type: "authorization_code",

  scopes: [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-playback-position",
    "user-read-recently-played",
    "user-top-read",
    "streaming",
    "app-remote-control",
    "user-read-email",
    "user-read-private",
  ],
};
