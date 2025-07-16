// Optional: Save to LocalStorage
document.querySelectorAll("input").forEach(input => {
  const key = input.id || input.name;
  if (key) {
    input.value = localStorage.getItem(key) || "";
    input.addEventListener("input", () => {
      localStorage.setItem(key, input.value);
    });
  }
});
