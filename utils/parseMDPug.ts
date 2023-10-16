import { Marked, Renderer } from "marked";
import parsePugMD from "./parsePugMD";

// @ts-ignore
import extendedTables from "marked-extended-tables";

import hljs from "highlight.js";

import markedKatex from "marked-katex-extension";

import markedLinkifyIt from "marked-linkify-it";

import markedFootnote from "marked-footnote";

const renderer = new Renderer();
let outerFootnote = "";
renderer.code = (code, info) => {
  if (info === "!pug") {
    return parsePugMD(code, outerFootnote);
  } else {
    const language = hljs.getLanguage(info || "") ? info || "" : "plaintext";
    const parsed = hljs.highlight(code, { language }).value;
    return `<pre><code>${parsed}</code></pre>`;
  }
};

export default (mdpug: string, footnote: string = "Footnotes") => {
  outerFootnote = footnote;

  const marked = new Marked();

  marked.use(extendedTables());

  marked.use(markedKatex({ throwOnError: false }));

  marked.use(
    markedLinkifyIt({
      "@": {
        validate: /^[^ \/\n]*/,
        // @ts-ignore
        normalize: (match) =>
          (match.url = "https://.com/@" + match.url.replace(/^@/, "")),
      },
      "#": {
        validate: /^[^ \/\n]*/,
        // @ts-ignore
        normalize: (match) =>
          (match.url = "https://.com/s/" + encodeURIComponent(match.url)),
      },
      ":": {
        validate: /^[^ \/\n]*/,
        // @ts-ignore
        normalize: (match) =>
          (match.url = "https://.com/c/" + match.url.replace(/^\:/, "")),
      },
    }),
  );
  marked.use(markedFootnote({ description: footnote }));
  const parsed = marked.parse(mdpug, { breaks: true, renderer }) as string;
  return parsed;
};
