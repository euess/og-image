import { IncomingMessage } from "http";
import { parse } from "url";

export function parseRequest(req: IncomingMessage) {
  console.log("HTTP " + req.url);
  const { pathname, query } = parse(req.url || "/", true);
  const { description } = query || {};

  const arr = (pathname || "/").slice(1).split(".");
  let extension = "";
  let text = "";
  if (arr.length === 0) {
    text = "";
  } else if (arr.length === 1) {
    text = arr[0];
  } else {
    extension = arr.pop() as string;
    text = arr.join(".");
  }

  const parsedRequest = {
    fileType: extension === "jpeg" ? extension : "png",
    text: decodeURIComponent(text),
    description: description || '',

  };
  return parsedRequest;
}
