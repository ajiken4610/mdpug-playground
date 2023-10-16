import parseMDPug from "./parseMDPug";
import { install, configure } from "browserfs";
import type Pug from "pug";
install(globalThis);
let pug: typeof Pug;
export const initPromise = new Promise<void>((resolve) => {
  configure(
    {
      fs: "InMemory",
      options: {},
    },
    function (e) {
      if (e) {
        // An error happened!
        resolve();
        throw e;
      }
      // Otherwise, BrowserFS is ready-to-use!
      import("assets/js/pug.min.js?raw").then((rawJS) => {
        eval(rawJS.default);
        pug = require("pug");
        resolve();
      });
    },
  );
});
let outerFootnote = "";
const options = {
  filters: {
    md: (text: string) => {
      return parseMDPug(text, outerFootnote);
    },
  },
};

export default (pugmd: string, footnote: string = "Footnote") => {
  outerFootnote = footnote;
  return pug.compile(
    pugmd,
    options,
  )({
    md: (text: string) => parseMDPug(text, footnote),
  });
};
