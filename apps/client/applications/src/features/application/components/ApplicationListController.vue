<script setup lang="ts">
import { computed } from "vue";
import { useGetApplicationsQuery } from "@/graphql";
import ApplicationList from "./ApplicationList.vue";
import ApplicationListLoader from "./ApplicationListLoader.vue";

const { data, fetching } = useGetApplicationsQuery();

const applications = computed(() => data.value?.applications.entries ?? []);
</script>
<template>
  <div class="applications">
    <h1>Applications</h1>
    <ApplicationList v-if="!fetching" :applications="applications" />
    <ApplicationListLoader v-else />
  </div>
</template>
