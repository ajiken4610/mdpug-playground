export default (html: string) =>
  "data:text/html;base64;charset=utf-8," +
  btoa(unescape(encodeURIComponent(html)));
