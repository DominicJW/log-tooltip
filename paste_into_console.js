const observer = new MutationObserver((mutationsList, observer) => {
  // Loop through each mutation in the list
  for (const mutation of mutationsList) {
    // Check if it's a text content change
    if (mutation.type === 'attributes') {
      // Log the text content change to the console
      console.log('Text Content Change:', mutation.target.textContent);
    }
  }
});

// Define the target node you want to observe (e.g., the entire document)
const targetNode = document;

// Configuration options for the observer
const config = {
  childList: true, // Do not watch for changes in child elements
  subtree: true,   // Do not watch for changes in the entire subtree
  attributes: true, // Do not watch for attribute changes
  characterData: true // Watch for text content changes
};

// Start observing the target node
observer.observe(targetNode, config);
