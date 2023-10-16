import parseMDPug from "./parseMDPug";
import sanitizeHTML from "./sanitizeHTML";
import { initPromise } from "~/utils/parsePugMD";

export default async (
  mdpug: string,
  footnotes: string = "Footnotes",
  allowStyle: boolean = false,
) => {
  await initPromise;
  return sanitizeHTML(parseMDPug(mdpug, footnotes), allowStyle);
};
