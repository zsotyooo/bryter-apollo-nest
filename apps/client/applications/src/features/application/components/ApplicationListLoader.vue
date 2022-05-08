<script setup lang="ts">
import { NSkeleton, NSpace } from "naive-ui";
</script>

<template>
  <NSpace vertical class="application-list-loader py-5">
    <NSkeleton height="100px" class="mb-5" />
    <NSkeleton height="100px" class="mb-5" />
    <NSkeleton height="100px" class="mb-5" />
  </NSpace>
</template>
