<template>
  <div class="flex justify-center mt-32">
    <div class="grid grid-cols-2 w-full">
      <div class="flex-col justify-items-center justify-center space-y-4">
        <h1 class="text-7xl">Coming soon</h1>
        <h3 class="3xl text-gray-300">Subscribe to enter the waitlist</h3>
        <div class="flex space-x-2">
          <UInput color="cyan" variant="outline" placeholder="Search..." />
          <UButton color="cyan" variant="solid" label="Subscribe" />
        </div>

        <div class="flex mt-4 space-x-2">
          <UIcon name="i-ic:baseline-emoji-people" class="w-5 h-5" />
          <p>100+ clients have already subscribed</p>
        </div>
      </div>

      <div class="flex items-center">
        <img src="public/work.png" class="h-72" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { UButton } from "#components";
</script>

<style lang="scss" scoped></style>
