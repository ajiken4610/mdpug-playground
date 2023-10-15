<template lang="pug">
.overflow-hidden
  NuxtPage(keepalive)
</template>

<script setup lang="ts">
const code = ref(
  `# Welcome to MDPug!!!
## Extended tables
| This header spans two   || Header A |
| columns *and* two rows ^|| Header B |
|-------------|------------|----------|
| Cell A      | Cell B     | Cell C   |
## Code Highlight
\`\`\`js
console.log("helloworld");
\`\`\`
## Latex
This is inline katex: $c = \\pm\\sqrt{a^2 + b^2}$

This is block level katex:

$$
c = \\pm\\sqrt{a^2 + b^2}
$$

## Linkify
github.com
@ajiken4610
#ajiken4610
:ajiken4610

## Footnote
helloworld[^helloworld]

[^helloworld]: helloworld is a famous programming source code.
`,
);
provide("code", code);
</script>
