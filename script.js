// script.js - D&D Character Sheet Enhancements

// Auto-save input and textarea fields to localStorage
function autoSave() {
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    const id = input.id || input.name || input.placeholder;
    if (!id) return;

    // Load saved value
    const saved = localStorage.getItem(id);
    if (saved !== null) input.value = saved;

    // Save on change
    input.addEventListener('input', () => {
      localStorage.setItem(id, input.value);
    });
  });
}

document.addEventListener('DOMContentLoaded', autoSave);
