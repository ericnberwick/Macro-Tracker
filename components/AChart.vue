<template>
  <Line :data="data" :options="options" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import { useCalorieStore } from "~/stores/CalorieStore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const calorieStore = useCalorieStore();

// Fetch the latest records
onMounted(async () => {
  await calorieStore.getLatestRecords();
});

// Compute the data for the chart
const chartData = computed(() => {
  const records = calorieStore.records;
  return {
    labels: records.map((record) => record.date),
    datasets: [
      {
        label: "Daily Calories",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "rgb(0, 123, 255)",
        pointBackgroundColor: "rgb(0, 123, 255)",
        pointBorderColor: "#fff",
        data: records.map((record) => record.totalCalories),
        tension: 0.4,
      },
    ],
  };
});

const data = computed(() => chartData.value);

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#fff",
      },
    },
    title: {
      display: true,
      text: "Last 3 Days Calorie Consumption",
      color: "#fff",
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "#fff",
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "#fff",
      },
      title: {
        display: true,
        text: "Calories",
        color: "#fff",
      },
    },
  },
});
</script>
