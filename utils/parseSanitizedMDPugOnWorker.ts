import ParseWorker from "~/workers/MDPugPerserWorker?worker";

export default (
  mdpug: string,
  footnotes: string = "Footnotes",
  allowStyle: boolean = false,
  timeout: number = 1000,
) => {
  return new Promise<string>((resolve, reject) => {
    const worker = new ParseWorker();
    worker.postMessage({ mdpug, footnotes, allowStyle });
    const id = setTimeout(() => {
      worker.terminate();
      reject("Parse operation timeout.");
    }, timeout);
    worker.addEventListener(
      "message",
      (ev: { data: { result: string } | { error: unknown } }) => {
        clearTimeout(id);
        worker.terminate();
        if ("result" in ev.data) {
          resolve(sanitizeHTML(ev.data.result, allowStyle));
        }
        if ("error" in ev.data) {
          reject(ev.data.error);
        }
      },
    );
  });
};
