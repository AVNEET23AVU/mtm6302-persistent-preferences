// DOM Elements
const themeSelect = document.getElementById('theme-select');
const listStyleSelect = document.getElementById('list-style-select');
const list = document.getElementById('list');

// Sample list items
const items = ['Learn JavaScript', 'Explore CSS', 'Build a Website', 'Study Bootstrap', 'Practice Coding'];

// Load preferences from localStorage
const loadPreferences = () => {
  const theme = localStorage.getItem('theme') || 'light';
  const listStyle = localStorage.getItem('listStyle') || 'decimal';

  document.body.className = theme;
  list.style.listStyleType = listStyle;

  themeSelect.value = theme;
  listStyleSelect.value = listStyle;
};

// Save preferences to localStorage
const savePreferences = () => {
  localStorage.setItem('theme', themeSelect.value);
  localStorage.setItem('listStyle', listStyleSelect.value);
};

// Populate the list dynamically
const populateList = () => {
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.className = 'list-group-item';
    list.appendChild(li);
  });
};

// Event Listeners
themeSelect.addEventListener('change', () => {
  document.body.className = themeSelect.value;
  savePreferences();
});

listStyleSelect.addEventListener('change', () => {
  list.style.listStyleType = listStyleSelect.value;
  savePreferences();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadPreferences();
  populateList();
});
