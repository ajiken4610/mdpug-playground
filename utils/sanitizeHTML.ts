import createDomPurify from "dompurify";
const DomPurify = createDomPurify();
DomPurify.addHook("afterSanitizeAttributes", (node) => {
  if (node.tagName === "A") {
    node.setAttribute("target", "_top");
    node.setAttribute("rel", "noopener noreferrer");
  }
});
const sanitize = DomPurify.sanitize;

export default (dirty: string, allowStyle: boolean = false) =>
  allowStyle ? sanitize(dirty) : sanitize(dirty, { FORBID_TAGS: ["style"] });
