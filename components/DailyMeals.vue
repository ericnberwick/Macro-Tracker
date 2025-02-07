<template>
  <div>
    <UCard>
      <template #header>
        <div class="flex justify-around">
          <h3 class="h-8">Daily Meals</h3>
          <h4 class="h-8">{{ formattedDate }}</h4>
        </div>
      </template>

      <div class="">
        <TableC />
      </div>

      <template #footer>
        <div class="flex items-center space-x-4">
          <UButton @click="submitMacros" icon="i-lucide-rocket"
            >Submit Daily Macros</UButton
          >
          <div class="flex justify-around space-x-4">
            <p>Calories : {{ calorieStore.getTotalCalories }}</p>
            <p>Protein: {{ calorieStore.getTotalProtein }}</p>
            <p>Carbs : {{ calorieStore.getTotalCarbs }}</p>
            <p>Fats : {{ calorieStore.getTotalFats }}</p>
          </div>
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCalorieStore } from "~/stores/CalorieStore";

const formattedDate = ref("");

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const calorieStore = useCalorieStore();
const dailyMeals = ref([]);

onMounted(() => {
  formattedDate.value = formatDate(new Date());
  dailyMeals.value = calorieStore.getDailyMeals;
});

const submitMacros = () => {
  calorieStore.addDailyMacros(
    calorieStore.getTotalCalories,
    calorieStore.getTotalProtein,
    calorieStore.getTotalCarbs,
    calorieStore.getTotalFats,
    calorieStore.dailyMeals
  );
};
</script>
