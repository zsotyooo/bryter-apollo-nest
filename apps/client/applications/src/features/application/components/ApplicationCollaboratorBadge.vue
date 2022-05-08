<script setup lang="ts">
import { NPopover } from "naive-ui";

export interface Props {
  collaborator: {
    type: "user" | "group";
    initials: string;
    name: string;
  };
}

defineProps<Props>();
</script>
<template>
  <NPopover trigger="hover">
    <template #trigger>
      <span
        class="flex justify-center items-center w-[15px] h-[15px] text-center rounded-full text-xs text-white p-2 ml-[-10px] shadow-md border border-solid border-white cursor-default"
        :class="{
          'bg-gray-400': collaborator.type === 'user',
          'bg-gray-500 ': collaborator.type === 'group',
        }"
      >
        <span class="flex-none">{{ collaborator.initials }}</span>
      </span>
    </template>
    <span>{{ collaborator.name }}</span>
  </NPopover>
</template>
