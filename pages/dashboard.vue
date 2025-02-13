<template>
  <div class="border-2 mt-4 mb-4 flex justify-center mx-8">
    <div class="grid grid-cols-6 mt-4">
      <div class="col-start-1 col-span-2 grid grid-cols-1 space-x-4 mx-4">
        <MealForm />
      </div>
      <div class="col-start-3 col-span-5">
        <DailyMeals />
      </div>
    </div>
  </div>
  <div class="border-2 mt-4 mx-8 flex justify-center">
    <h2>Your progress</h2>
    <div class="w-1/2 h-[300px]">
      <AChart />
    </div>
    <UButton @click="getRecs">Get Records</UButton>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCalorieStore } from "~/stores/CalorieStore";

const calorieInput = ref(0);
const calorieStore = useCalorieStore();

const getRecs = () => {
  calorieStore.getLatestRecords();
  //console.log("records : ", calorieStore.records);
};

const submitCalories = () => {
  console.log("submit calories : ", calorieInput.value);
  calorieStore.addCalories(calorieInput.value, "John", 21);
  calorieInput.value = 0;
};
</script>
