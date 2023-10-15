import { Marked } from "marked";
const marked = new Marked();

export default async (dirtyMD: string) =>
  sanitizeHTML(await marked.parse(dirtyMD));
