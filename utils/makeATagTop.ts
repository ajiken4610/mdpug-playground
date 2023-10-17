export default (html: string, allowStyle = false) => {
  const div = document.createElement("div");
  div.innerHTML =
    html +
    `<script>document.querySelectorAll("a").forEach((el)=>{el.target="_top";el.setAttribute("ref","noopener noreferrer")})</script>`;
  return sanitizeHTML(div.innerHTML, allowStyle);
};
