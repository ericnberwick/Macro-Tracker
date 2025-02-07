<template>
  <div class="">
    <UCard>
      <div>
        <h2 class="h2font text-red-600 text-lg text-bold">{{ props.title }}</h2>
        <h2 class="h2font text-4xl text-bold">{{ props.price }}</h2>
        <p class="h2font text-gray-300 text-sm">{{ props.description }}</p>
        <ul class="h2font">
          <li class="flex space-x-2 items-center">
            <UIcon class="text-green-500" name="i-icon-park-solid:correct" />
            <p>Unlimited Gym Access</p>
          </li>
          <li class="flex space-x-2 items-center">
            <UIcon class="text-green-500" name="i-icon-park-solid:correct" />
            <p>Unlimited Gym Access</p>
          </li>
          <li class="flex space-x-2 items-center">
            <UIcon class="text-green-500" name="i-icon-park-solid:correct" />
            <p>Unlimited Gym Access</p>
          </li>
          <li class="flex space-x-2 items-center">
            <UIcon class="text-green-500" name="i-icon-park-solid:correct" />
            <p>Unlimited Gym Access</p>
          </li>
          <li class="flex space-x-2 items-center">
            <UIcon class="text-green-500" name="i-icon-park-solid:correct" />
            <p>Unlimited Gym Access</p>
          </li>
        </ul>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const props = defineProps(["title", "description", "price"]);
</script>

<style>
.h2font {
  font-family: Urbanist;
}
</style>
