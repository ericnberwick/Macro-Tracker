<template>
  <div class="flex justify-around space-x-4 mt-2">
    <div class="flex justiy-center items-center">
      <img src="public/fior.jpg" class="h-16 text-blue-500" />
    </div>
    <div class="flex justify-center items-center space-x-4">
      <h2 class="text-gray-200 hover:text-blue-500 cursor">Home</h2>
      <h2 class="text-gray-200 hover:text-blue-500 cursor">Program</h2>
      <h2 class="text-gray-200 hover:text-blue-500 cursor">Pricing</h2>
      <UButton
        size="sm"
        color="sky"
        variant="outline"
        label="Login"
        :trailing="false"
      />
      <UButton
        size="sm"
        color="sky"
        variant="solid"
        label="Register"
        :trailing="false"
      />
    </div>
  </div>
</template>

<script setup></script>
