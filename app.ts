import { Meditation } from "./meditation";

interface RecipeResponse {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
}

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

// const morning_meditation = new Meditation(5);
// morning_meditation.start();
// console.log(`Start meditation`);

// Exercise 2
const isPrime = async (n: number) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) throw Error("Not prime");
    return `{ prime: ${n > 1}}`;
}
// console.log('start');
// isPrime(7)
//     .then(console.log)
//     .catch(console.error);
// console.log('end');

console.log('start');
(async () => {
    try {
        const isPrimeNumber = await isPrime(6);
        console.log(isPrimeNumber);
    } catch (error) {
        console.error(error.message);
    }
})();
console.log('end');

// Exercise 3
async function fetchData() {
    try {
        const rawResponse = await fetch("https://dummyjson.com/recipes");
        const data: RecipeResponse = await rawResponse.json();
        for(let recipe of data.recipes) {
            console.log(recipe.name);
        }
    } catch (error) {
        console.error(error.message);
    }
}

fetchData();