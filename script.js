// Given array
let bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
             'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
             'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
             'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to remove articles from beginning of names
function removeArticle(name) {
  return name.replace(/^(a |an |the )/i, "").trim();
}

// Sort based on names without articles
bands.sort((a, b) => {
  const bandA = removeArticle(a);
  const bandB = removeArticle(b);
  return bandA.localeCompare(bandB);
});

// Insert sorted items into UL (the only <ul> in the HTML)
const ul = document.querySelector("ul");
ul.setAttribute("id", "bands");

ul.innerHTML = bands
  .map(band => `<li>${band}</li>`)
  .join("");
