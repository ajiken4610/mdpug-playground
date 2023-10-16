import parseMDPug from "~/utils/parseMDPug";
import { initPromise } from "~/utils/parsePugMD";
addEventListener(
  "message",
  async (ev: { data: { mdpug: string; footnotes: string } }) => {
    try {
      await initPromise;
      const result = parseMDPug(ev.data.mdpug, ev.data.footnotes);
      postMessage({ result });
    } catch (error) {
      postMessage({ error });
    }
  },
);
