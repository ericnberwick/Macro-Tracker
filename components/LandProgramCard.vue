<template>
  <div class="h-min">
    <UCard>
      <div>
        <UIcon :name="props.icon" class="h-10 w-10 bg-blue-500" />
        <h2 class="h2font text-xl text-bold">{{ props.title }}</h2>
        <p class="h2font text-gray-300 text-sm">{{ props.description }}</p>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const props = defineProps(["title", "description", "icon"]);
</script>

<style>
.h2font {
  font-family: Urbanist;
}
</style>
