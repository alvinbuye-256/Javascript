/*
Defining variables and functions
*/

//initialize the count variable. This code sets up a variable count and initializes it to 0, serving as the starting point for the follower count.

let count =0; // initializing the count variable to 0

/*functions to increase count of followers and display the count on the web page using the following steps:
Create increaseCount() function to increment the count variable by 1 in followers_count.js file.*/

function increaseCount() {
  count++; // Increment the count by 1
}
/** displayCount() function in followers_count.js file after increaseCount() function to display count in the HTML element with the ID countDisplay and updates its content to reflect the current count value. */

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

/** call displayCount() function inside the increaseCount() function to increase and display count value simultaneously. Write given code after displayCount() in followers_count.js file */

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue(); // Check the count value for milestones
}

/**
 * Step 3: Defining variables and functions to show
 * The checkCountValue() function to check the value of count and trigger alerts when specific follower milestones (10 or 20) are reached using code
 * The checkCountValue() function examines the value of the count variable. If the count reaches 10, it triggers an alert saying "Your Instagram post gained 10 followers! Congratulations!".
 * Similarly, if the count hits 20, it prompts an alert saying "Your Instagram post gained 20 followers! Keep it up!". This function is designed to provide celebratory messages when specific follower milestones are achieved.
 */

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}
//Function to reduce the count by 1
function decreaseCount() {
  if (count > 0) { // Ensure count doesn't go below 0
    count--; // Decrement the count by 1
    displayCount(); // Display the updated count
  } else {
    alert("You dont have any followers!"); // Alert if trying to go below 0
  }
}
// Function to reset the count to 0
function resetCount() {
  count = 0; // Reset the count to 0
  displayCount(); // Display the reset count
  alert("Your follower count has been reset to 0!"); // Alert the user
}