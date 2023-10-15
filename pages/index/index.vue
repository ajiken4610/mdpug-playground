<template lang="pug">
.h-full
  .inline-block.w-full.overflow-y-auto.px-1(class="h-1/2 md:h-full md:w-1/2")
    PartsMarkdown(:md="code")
  .inline-block.w-full.overflow-y-auto.px-1(class="h-1/2 md:h-full md:w-1/2")
    PartsMdpugEditor(v-model="code")
</template>

<script setup lang="ts">
const code = inject<Ref<string>>("code")!;
</script>

