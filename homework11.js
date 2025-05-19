// ================================
// Challenge 1: Hobby Logger
// ================================

// 1. Create an array of 4–6 hobbies.
let hobbies = ["reading", "cycling", "painting", "hiking", "gaming"];

// 2. Use a `for` loop to print each hobby.
for (let i = 0; i < hobbies.length; i++) {
  console.log(`One of my hobbies is ${hobbies[i]}`);
}

// 3. Add a hobby with `.push()`.
hobbies.push("cooking");

// 4. Remove the last hobby with `.pop()`.
hobbies.pop();

// 5. Log the final number of hobbies.
console.log(`Final number of hobbies: ${hobbies.length}`);

// Bonus: Use `.map()` to create a new array like "I love hiking"
const hobbyLoves = hobbies.map(hobby => `I love ${hobby}`);
console.log("Hobby love statements:", hobbyLoves);



// ================================
// Challenge 2: Weekly Weather Report
// ================================

// 1. Create an array of 7 temperatures (1 per day).
let temperatures = [18, 26, 9, 30, 12, 27, 7];

// 2. Loop through the array
let hotDaysCount = 0;

for (let i = 0; i < temperatures.length; i++) {
  console.log(`Day ${i + 1} temperature: ${temperatures[i]}°C`);
  if (temperatures[i] > 25) {
    console.log("It's hot!");
    hotDaysCount++;
  } else if (temperatures[i] < 10) {
    console.log("It's cold!");
  }
}

// 3. Count and print how many “hot” days there were.
console.log(`Number of hot days: ${hotDaysCount}`);

// Bonus: Use `.filter()` to create a new array of only the hot days.
const hotDays = temperatures.filter(temp => temp > 25);
console.log("Hot day temperatures:", hotDays);



// ================================
// Challenge 3: Fruit Machine
// ================================

// 1. Create an array of 5 fruits.
let fruits = ["apple", "orange", "banana", "grape", "mango"];

// 2. Use `.includes()` to check if "banana" is in the list.
if (fruits.includes("banana")) {
  console.log("Banana is in the list.");
} else {
  console.log("Banana is not in the list.");
}

// 3. Use `.forEach()` to print fruit with index.
fruits.forEach((fruit, index) => {
  console.log(`Fruit #${index + 1}: ${fruit}`);
});

// 4. Add a new fruit with `.push()`.
fruits.push("kiwi");

// 5. Remove one item from the middle using `.splice()`.
fruits.splice(2, 1); // Removes the 3rd item (index 2)

// Bonus: Use `.slice()` to copy the first 3 fruits into a new array and print them.
const firstThreeFruits = fruits.slice(0, 3);
console.log("First three fruits:", firstThreeFruits);
