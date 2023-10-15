import parseMDPug from "./parseMDPug";
import sanitizeHTML from "./sanitizeHTML";
export default (mdpug: string) => sanitizeHTML(parseMDPug(mdpug));
