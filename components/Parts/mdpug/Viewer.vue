<!-- eslint-disable vue/no-v-html -->
<template lang="pug">
.mdpug(v-html="parsed")
</template>

<script setup lang="ts">
import "highlight.js/styles/github.css";
import "katex/dist/katex.min.css";
const props = withDefaults(defineProps<{ mdpug: string }>(), {
  mdpug: "# NO_MDPUG_PROVIDED",
});
const emit = defineEmits<(e: "log", message: string) => unknown>();
const parsed = ref("");
watchEffect(async () => {
  let error = false;
  try {
    parsed.value = await parseSanitizedMDPugOnWorker(props.mdpug);
  } catch (e) {
    emit("log", (e as { toString: () => string }).toString().split("\n")[0]!);
    error = true;
  }
  if (!error) {
    emit("log", "");
  }
});
</script>
<style scoped lang="scss">
.mdpug :deep(ul) {
  list-style-type: disc;
  padding-left: 2rem;
}

.mdpug :deep(ol) {
  list-style-type: decimal;
  padding-left: 1rem;
}

$headings: "h1", "h2", "h3", "h4", "h5", "h6";

@for $headingIndex from 1 through 6 {
  .mdpug :deep(h#{$headingIndex}) {
    font-size: (8 - $headingIndex) * 0.5rem;
  }
}

.mdpug :deep(pre),
.mdpug :deep(:not(pre) > code) {
  border: 1px solid black;
  border-radius: 0.25rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.mdpug :deep(blockquote) {
  border-left: 0.25rem solid;
  padding-left: 0.5rem;
  border-color: gray;
}

.mdpug :deep(table) {
  border-spacing: 0px;
}

.mdpug :deep(td),
.mdpug :deep(th) {
  border: 1px black solid;
  padding: 0.2rem;
}
</style>
