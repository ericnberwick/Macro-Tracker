<template>
  <div class="flex justify-around space-x-4 mt-2">
    <div class="flex justiy-center items-center">
      <img src="public/fior.jpg" class="h-16 text-blue-500" />
    </div>
    <div class="flex justify-center items-center space-x-4">
      <NuxtLink class="text-gray-200 hover:text-blue-500 cursor-pointer"
        >Home</NuxtLink
      >
      <NuxtLink
        class="text-gray-200 hover:text-blue-500 cursor-pointer"
        to="comingsoon"
      >
        Program
      </NuxtLink>
      <NuxtLink
        class="text-gray-200 hover:text-blue-500 cursor-pointer"
        to="comingsoon"
        >Pricing</NuxtLink
      >
      <UButton
        size="sm"
        color="sky"
        variant="outline"
        label="Login"
        :trailing="false"
        to="comingsoon"
      />
      <UButton
        size="sm"
        color="sky"
        variant="solid"
        label="Register"
        :trailing="false"
        to="comingsoon"
      />
    </div>
  </div>
</template>

<script setup></script>
