import { defineStore } from "pinia";
import {
  addDoc,
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
export const useCalorieStore = defineStore("calorieStore", {
  state: () => ({
    records: [],
    name: "",
    age: 0,
    dailyMeals: [
      {
        id: 1,
        name: "Breakfast Omelette",
        kcal: 350,
        protein: 25,
        carbs: 5,
        fats: 28,
      },
      {
        id: 2,
        name: "Grilled Chicken Salad",
        kcal: 420,
        protein: 40,
        carbs: 15,
        fats: 22,
      },
      {
        id: 3,
        name: "Protein Smoothie",
        kcal: 280,
        protein: 30,
        carbs: 30,
        fats: 5,
      },
      {
        id: 4,
        name: "Salmon with Roasted Vegetables",
        kcal: 550,
        protein: 45,
        carbs: 25,
        fats: 32,
      },
    ],
  }),
  getters: {
    getDailyMeals(state) {
      return state.dailyMeals;
    },
    getTotalCalories(state) {
      return state.dailyMeals.reduce((total, meal) => total + meal.kcal, 0);
    },
    getTotalProtein(state) {
      return state.dailyMeals.reduce((total, meal) => total + meal.protein, 0);
    },
    getTotalCarbs(state) {
      return state.dailyMeals.reduce((total, meal) => total + meal.carbs, 0);
    },
    getTotalFats(state) {
      return state.dailyMeals.reduce((total, meal) => total + meal.fats, 0);
    },
  },
  actions: {
    addMeal(id_, name_, kcal_, protein_, carbs_, fat_) {
      const meal = {
        id: id_,
        name: name_,
        kcal: kcal_,
        protein: protein_,
        carbs: carbs_,
        fats: fat_,
      };
      console.log("mealll : ", meal);
      this.dailyMeals.push(meal);
    },
    deleteMeal(id) {
      console.log("id to remove ", id);
      this.dailyMeals = this.dailyMeals.filter((meal) => meal.id !== id);
    },
    async addCalories(cals, name, age) {
      const { $db } = useNuxtApp();
      const docToAdd = {
        calories: cals,
        name: name,
        age: age,
      };
      console.log("Adding user to database", $db);
      await addDoc(collection($db, "Users"), docToAdd);
      this.calories = cals;
      this.name = name;
      this.age = age;
    },
    async addDailyMacros(
      totalCalories,
      totalProtein,
      totalCarbs,
      totalFat,
      meals
    ) {
      const { $db } = useNuxtApp();

      const userId = "john123";

      // Get current date in YYYY-MM-DD format
      const today = new Date();
      const dateString = today.toISOString().split("T")[0];

      const docToAdd = {
        totalCalories,
        totalProtein,
        totalCarbs,
        totalFat,
        meals,
        timestamp: Timestamp.now(), // Adding a timestamp for additional querying options
      };

      try {
        // Reference to the specific document in the subcollection
        const dailyRecordRef = doc(
          $db,
          "users",
          userId,
          "dailyRecords",
          dateString
        );

        // Set the document with the provided data
        await setDoc(dailyRecordRef, docToAdd);

        console.log(`Daily macros added for user ${userId} on ${dateString}`);
      } catch (error) {
        console.error("Error adding daily macros: ", error);
      }
    },
    async getLatestRecords() {
      const { $db } = useNuxtApp();
      const userRef = doc($db, "users", "john123");
      const dailyRecordsRef = collection(userRef, "dailyRecords");

      const q = query(dailyRecordsRef, orderBy("__name__", "asc"), limit(3));

      const querySnapshot = await getDocs(q);
      const records = [];

      querySnapshot.forEach((doc) => {
        records.push({ date: doc.id, ...doc.data() });
      });
      console.log("reccccccs : ", records);
      this.records = records;
    },
  },
});
