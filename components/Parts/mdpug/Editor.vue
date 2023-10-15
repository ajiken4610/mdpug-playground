<template lang="pug">
.overflow-y-hidden.h-full
  textarea.h-full.w-full(v-model="code")
</template>

<script setup lang="ts">
import { refDebounced } from "@vueuse/core";
const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits(["update:modelValue"]);
const code = ref(props.modelValue)
watch(toRef(props, "modelValue"), (text) => code.value = text)
const debounsedCode = refDebounced(code, 500)
watch(debounsedCode, (code) => {
  emit("update:modelValue", code)
})
</script>