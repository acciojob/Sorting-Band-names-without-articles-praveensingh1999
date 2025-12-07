//your code here
let touristSpots = ["The Virupaksha Temple", "Victoria Memorial", "Tajmahal"];

// Function to remove articles
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, "").trim();
}

// Sort the array without articles
touristSpots.sort((a, b) => {
  let nameA = stripArticle(a).toLowerCase();
  let nameB = stripArticle(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

// Insert into the DOM
const ul = document.getElementById("band");
touristSpots.forEach((spot) => {
  const li = document.createElement("li");
  li.textContent = spot;
  ul.appendChild(li);
});

