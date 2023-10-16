import pugURL from "assets/js/pug.min.js?url";
import parseMDPug from "./parseMDPug";
import { install, configure } from "browserfs";
import type Pug from "pug";
install(window);
let pug: Pug;
export const initPromise = new Promise<void>((resolve) => {
  configure(
    {
      fs: "LocalStorage",
    },
    function (e) {
      if (e) {
        // An error happened!
        resolve();
        throw e;
      }
      // Otherwise, BrowserFS is ready-to-use!
      const script = document.createElement("script");
      script.src = pugURL;
      document.body.appendChild(script);
      script.addEventListener("load", () => {
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
    md: (text) => parseMDPug(text, footnote),
  });
};
