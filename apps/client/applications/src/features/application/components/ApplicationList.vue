<script setup lang="ts">
import { format as formatDate } from "timeago.js";
import type { ApplicationListFragmentFragment } from "@/graphql";
import ApplicationCollaboratorBadge from "./ApplicationCollaboratorBadge.vue";
import type { Props as CollaboratorProps } from "./ApplicationCollaboratorBadge.vue";

defineProps<{
  applications: ApplicationListFragmentFragment[];
}>();

function getCollaborators(
  application: ApplicationListFragmentFragment
): CollaboratorProps["collaborator"][] {
  return application.collaborators.flatMap(
    (collaborator): CollaboratorProps["collaborator"][] => {
      if (collaborator?.__typename === "User") {
        return [
          {
            type: "user",
            initials: `${collaborator.firstName
              .charAt(0)
              ?.toUpperCase()}${collaborator.lastName
              .charAt(0)
              ?.toUpperCase()}`,
            name: `${collaborator.firstName} ${collaborator.lastName}`,
          },
        ];
      }
      if (collaborator?.__typename === "ApplicationCollaboratorGroup") {
        return [
          {
            type: "group",
            initials: `${collaborator.name
              .split(" ")?.[0]
              ?.charAt(0)
              ?.toUpperCase()}${collaborator.name
              .split(" ")?.[1]
              ?.charAt(0)
              ?.toUpperCase()}`,
            name: collaborator.name,
          },
        ];
      }
      return [];
    }
  );
}
</script>
<template>
  <div class="application-list py-5">
    <div
      v-for="application in applications"
      :key="application.id"
      class="flex items-center p-5 border border-solid border-gray-300 mb-5 hover:shadow bg-white"
    >
      <div class="flex-auto">
        <h2 class="m-0 mb-2">{{ application.name }}</h2>
        <p class="p-0 m-0 text-sm text-gray-600">
          {{ formatDate(application.updatedAt.split("T")[0]) }}
        </p>
      </div>
      <div class="flex-none flex">
        <ApplicationCollaboratorBadge
          v-for="(collaborator, i) in getCollaborators(application)"
          :key="`${application.id}-collaborator-${i}`"
          :collaborator="collaborator"
        />
      </div>
    </div>
  </div>
</template>
