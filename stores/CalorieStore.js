import { defineStore } from "pinia";
import {addDoc, collection, getDocs} from "firebase/firestore";

export const useCalorieStore = defineStore('calorieStore',{
    state : () => ({
        calories: 0,
        name: '',
        age: 0,
    }),
    actions: {
        setCalories(calories) {
            this.calories = calories;
        },
        setName(name) {
            this.name = name;
        },
        setAge(age) {
            this.age = age;
        },
        async addCalories(cals, name, age) {
            const { $db } = useNuxtApp();
            const docToAdd = {
                calories: cals,
                name: name,
                age: age
            }
            console.log("Adding user to database", $db);
            await addDoc(collection($db, "Users"), docToAdd);
            this.calories = cals;
            this.name = name;
            this.age = age;
        }

    },
});