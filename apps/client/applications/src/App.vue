<script setup lang="ts">
import { RouterView } from "vue-router";
import { NConfigProvider, NPageHeader } from "naive-ui";
import BryterLogo from "./components/logo/BryterLogo.vue";
</script>

<template>
  <NConfigProvider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <div class="min-h-screen flex flex-col">
      <header class="flex-none border-0 border-b border-solid border-gray-200">
        <NPageHeader class="p-5">
          <template #avatar>
            <BryterLogo />
          </template>
        </NPageHeader>
      </header>
      <div class="flex-auto p-5 bg-gray-100">
        <RouterView />
      </div>
      <footer class="flex-none border-0 border-t border-solid border-gray-200">
        <div class="p-5">BRYTER GraphQL demo</div>
      </footer>
    </div>
  </NConfigProvider>
</template>
