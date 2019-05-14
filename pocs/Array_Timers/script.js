// Create an array to store the possible background colors
const kleuren = ["red", "blue", "green", "orange", "yellow", "purple"];
// Set the currentColor to red;
let currentColor = 0;

const tekst = document.getElementById('tekst');

// Debug
window.onload = console.table(kleuren);

// Make a timer which displays the current time
var timer = setInterval(myTimer, 1000);
function myTimer()
{
  var date = new Date();
  document.getElementById("timer").innerHTML = date.toLocaleTimeString();
}


// Make a timer which changes the color of the background every 5 seconds
var backgroundTimer = setInterval(changeBackground, 5000);
function changeBackground()
{
  // Generate a random number between 0 and 5
  let i = Math.floor(Math.random()*6);
  // Debug
  console.log('\n' + "First choice: " + i)
  // Check if the generated number isn't equal to the id of the last displayed color
  while (i === currentColor)
  {
    // Keep generating a new number until the number generated doesn't match the current color anymore
    i = Math.floor(Math.random()*6);
    // Debug
    console.log("i changed to: " + i);
  }
  //Debug
  console.log("Final choice: " + i);
  // Set the current color to the newly generated color-id
  currentColor = i;

  // Change the backgroundcolor and the text to the new color
  document.body.style.backgroundColor = kleuren[i];
  tekst.innerHTML = "Background Color: " + kleuren[i];
}
