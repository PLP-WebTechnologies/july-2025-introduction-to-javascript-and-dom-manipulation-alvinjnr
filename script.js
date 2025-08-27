
// -------------------- Part 1: Variable Declarations & Conditionals --------------------
let userName = "Nyota";
let isLoggedIn = true;

if (isLoggedIn) {
  console.log(`Welcome back, ${userName}!`);
} else {
  console.log("Please log in to continue.");
}

// -------------------- Part 2: Custom Functions --------------------
function greetUser(name) {
  return `Hello, ${name}! 👋`;
}

function calculateTotal(items) {
  let total = 0;
  for (let price of items) {
    total += price;
  }
  return total;
}

// -------------------- Part 3: Loop Examples --------------------
// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log(`Loop iteration: ${i}`);
}

// Example 2: While loop
let count = 0;
while (count < 3) {
  console.log(`While loop count: ${count}`);
  count++;
}

// -------------------- Part 4: DOM Interactions --------------------
const title = document.getElementById("main-title");
const statusText = document.getElementById("status");
const button = document.getElementById("action-btn");
const outputList = document.getElementById("output-list");

button.addEventListener("click", () => {
  // Interaction 1: Change text content
  statusText.textContent = "Script executed ✅";

  // Interaction 2: Modify style
  title.style.color = "green";

  // Interaction 3: Add list items dynamically
  const items = ["Apples", "Bananas", "Cherries"];
  outputList.innerHTML = ""; // Clear previous items
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    outputList.appendChild(li);
  });

  console.log(greetUser(userName));
  console.log("Total price:", calculateTotal([10, 20, 30]));
});