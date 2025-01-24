<template>
  <div class="border-2 mt-4 mb-4 flex justify-center ">
    <div class="flex justify-center space-x-4 mt-4">
      <UInput v-model="calorieInput" type="number" />
      <UButton @click="submitCalories()">Submit</UButton>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCalorieStore } from '~/stores/CalorieStore'

const calorieInput = ref(0);

const calorieStore = useCalorieStore();

const submitCalories = () => {
  console.log("submit calories : ", calorieInput.value);
  calorieStore.addCalories(calorieInput.value, "John", 21);
  calorieInput.value = 0;
}
</script>
