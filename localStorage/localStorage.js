const keyInput = document.getElementById("key");
const valueInput = document.getElementById("value");
const submitButton = document.getElementById("submit");
const outputDiv = document.getElementById("out");

submitButton.addEventListener("click", function () {
  const key = keyInput.value;
  const value = valueInput.value;

  localStorage.setItem(key, value);

  // Retrieve the value associated with the key
  const retrievedValue = localStorage.getItem(key);

  // Display the key and retrieved value
  outputDiv.innerHTML = `Key: ${key}, Value: ${retrievedValue}`;
  // localStorage.clear();
});
