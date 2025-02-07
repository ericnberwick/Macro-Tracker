<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Meal</th>
          <th scope="col" class="px-6 py-3">Kcal</th>
          <th scope="col" class="px-6 py-3">Protein</th>
          <th scope="col" class="px-6 py-3">Carbs</th>
          <th scope="col" class="px-6 py-3">Fats</th>
          <th scope="col" class="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="meal in calorieStore.getDailyMeals"
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ meal.name }}
          </th>
          <td class="px-6 py-4">{{ meal.kcal }}</td>
          <td class="px-6 py-4">{{ meal.protein }}</td>
          <td class="px-6 py-4">{{ meal.carbs }}</td>
          <td class="px-6 py-4">{{ meal.fats }}</td>
          <td class="px-6 py-4">
            <UIcon
              @click="calorieStore.deleteMeal(meal.id)"
              name="i-material-symbols:delete-rounded"
              class="w-5 h-5 cursor-pointer transition-colors duration-300 ease-in-out hover:text-red-500"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCalorieStore } from "~/stores/CalorieStore";

const calorieStore = useCalorieStore();
const dailyMeals = ref([]);

onMounted(() => {
  dailyMeals.value = calorieStore.getDailyMeals;
});
</script>

<style lang="scss" scoped></style>
