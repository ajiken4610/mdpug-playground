<template lang="pug">
.h-full
  .inline-block.w-full.overflow-y-auto.px-1(class="h-1/2 md:h-full md:w-1/2")
    PartsMdpugViewer(v-show="!errorMessage", :mdpug="code", @log="log")
    .whitespace-pre-wrap.text-red-500.font-mono(v-show="errorMessage") For technical reasons, error line number may be incorrect.
      br
      | {{ errorMessage }}
  .inline-block.w-full.overflow-y-auto.px-1(class="h-1/2 md:h-full md:w-1/2")
    PartsMdpugEditor(v-model="code")
</template>

<script setup lang="ts">
const code = inject<Ref<string>>("code")!;
const errorMessage = ref("");
const log = (text?: string) => {
  errorMessage.value = text || "";
};
</script>
