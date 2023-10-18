import defaultSource from "assets/mdpug/default.mdpug?raw";

export default defineNuxtRouteMiddleware((to) => {
  if (to.fullPath === "/") {
    return navigateTo("/" + stringToBase64(defaultSource));
  }
});
