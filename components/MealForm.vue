<template>
  <div>
    <div class="flex-col space-y-4">
      <UInput v-model="mealName" type="text" />
      <UInput v-model="kcal" type="number" />
      <UInput v-model="protein" type="number" />
      <UInput v-model="carbs" type="number" />
      <UInput v-model="fats" type="number" />
      <UButton
        class="w-full flex items-center justify-center"
        @click="submitMeal"
        icon="i-material-symbols:add-circle"
      ></UButton>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCalorieStore } from "~/stores/CalorieStore";

const calorieStore = useCalorieStore();
const mealName = ref("");
const kcal = ref(0);
const protein = ref(0);
const carbs = ref(0);
const fats = ref(0);

const submitMeal = () => {
  console.log(
    "meal obj : ",
    1,
    mealName.value,
    kcal.value,
    protein.value,
    carbs.value,
    fats.value
  );
  calorieStore.addMeal(
    1,
    mealName.value,
    kcal.value,
    protein.value,
    carbs.value,
    fats.value
  );
};
</script>
