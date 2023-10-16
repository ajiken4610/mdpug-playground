<template lang="pug">
.overflow-hidden
  NuxtPage(keepalive)
</template>

<script setup lang="ts">
import defaultSource from "assets/mdpug/default.mdpug?raw";
const code = ref(defaultSource);
provide("code", code);
</script>
