<template lang="pug">
iframe.w-full.h-full(ref="iframeRef", :srcdoc="doc")
</template>

<script setup lang="ts">
import highlightcss from "highlight.js/styles/github.min.css?raw";
import katexcss from "katex/dist/katex.min.css?raw";
import mdcss from "assets/css/md.css?raw";
const props = withDefaults(defineProps<{ mdpug: string }>(), {
  mdpug: "# NO_MDPUG_PROVIDED",
});
const emit = defineEmits<(e: "log", message: string) => unknown>();
const doc = ref("");

watchEffect(async () => {
  let error = false;
  try {
    const parsed = await parseSanitizedMDPugOnWorker(
      props.mdpug,
      "Footnotes:",
      undefined,
      true,
      10000,
    );
    doc.value = parsed + `<style>${highlightcss}${katexcss}${mdcss}</style>`;
  } catch (e) {
    const message = (e as { toString: () => string })
      .toString()
      .split("\n")
      .map((line) =>
        line.match("https://github.com/markedjs/marked") ? "" : line,
      )
      .join("\n");
    emit("log", message);
    error = true;
  }
  if (!error) {
    emit("log", "");
  }
});
const iframeRef = ref<HTMLIFrameElement>();
const isATag = (node: Element): node is HTMLAnchorElement =>
  node.tagName === "A";
onMounted(() => {
  if (!iframeRef.value) {
    return;
  }
  const iframe = iframeRef.value;
  iframe.addEventListener("load", () => {
    if (!iframeRef.value) {
      return;
    }
    const iframe = iframeRef.value;
    iframe.contentDocument?.querySelectorAll("a[href]").forEach((el) => {
      let href: string;
      if (isATag(el) && (href = el.getAttribute("href") || "")?.match(/^#/)) {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          const targetElement = iframe.contentDocument?.querySelector(href);
          targetElement && targetElement.scrollIntoView();
        });
      }
    });
  });
});
</script>
