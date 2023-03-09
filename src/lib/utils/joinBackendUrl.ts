import urlJoin from "url-join";

export default function joinBackendUrl(path: string[]) {
  const url = process.env.BACKEND_URL;

  if (!url) throw new Error("Please add BACKEND_URL to env");
  return urlJoin([url, ...path]);
}
