<template lang="pug">
iframe.w-full.h-full(:src="url")
</template>

<script setup lang="ts">
import highlightcss from "highlight.js/styles/github.min.css?raw";
import katexcss from "katex/dist/katex.min.css?raw";
import mdcss from "assets/css/md.css?raw";
const props = withDefaults(defineProps<{ mdpug: string }>(), {
  mdpug: "# NO_MDPUG_PROVIDED",
});
const emit = defineEmits<(e: "log", message: string) => unknown>();
const url = ref("");
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
    const inserted = makeATagTop(parsed, true);
    url.value = getDataUrl(
      inserted + `<style>${highlightcss}${katexcss}${mdcss}</style>`,
    );
  } catch (e) {
    emit("log", (e as { toString: () => string }).toString().split("\n")[0]!);
    error = true;
  }
  if (!error) {
    emit("log", "");
  }
});
</script>
