var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

console.log("While loop conplete");
// Write a for loop that prints out the contents of ingredients:

for (i = 0; i < ingredients.length; i++){

  console.log(ingredients[i]);
}

console.log("For loop conplete");
// Write any loop (while or for) that prints out the contents of ingredients backwards:


for (j = ingredients.length; j >= 0; j--){
  console.log(ingredients[j]);
}

console.log("Backwards list");