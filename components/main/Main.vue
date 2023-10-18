<template lang="pug">
.overflow-hidden
  NuxtPage
</template>

<script setup lang="ts">
const code = ref("");
provide("code", code);
</script>
