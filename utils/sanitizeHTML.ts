import createDomPurify from "dompurify";
const sanitize = createDomPurify().sanitize;
export default (dirty: string, allowStyle: boolean = false) =>
  allowStyle ? sanitize(dirty) : sanitize(dirty, { FORBID_TAGS: ["style"] });
