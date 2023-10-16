<template lang="pug">
.border-2.rounded-2xl.p-2.h-full.font-mono
  .h-full.overflow-y-hidden
    textarea.w-full.h-full.bg-transparent.resize-none(
      ref="textareaRef",
      v-model="code",
      class="focus:outline-0"
    )
</template>

<script setup lang="ts">
import { refDebounced } from "@vueuse/core";
const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits(["update:modelValue"]);
const code = ref(props.modelValue);
watch(toRef(props, "modelValue"), (text) => (code.value = text));
const debounsedCode = refDebounced(code, 500);
watch(debounsedCode, (code) => {
  emit("update:modelValue", code);
});
</script>
