const popupBtn = document.querySelector('.pop-up_1');
const popupOverlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('closePopup');

// Open popup
popupBtn.addEventListener('click', () => {
  popupOverlay.classList.add('active');
});

// Close popup when clicking close button
closeBtn.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
});

// Close popup when clicking outside
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('active');
  }
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
    popupOverlay.classList.remove('active');
  }
});


const filterBtn = document.querySelector('.filter');
const filterPopup = document.getElementById('filterPopup');
const closeFilter = document.getElementById('closeFilter');
const btnReset = document.querySelector('.btn-reset');
const btnApply = document.querySelector('.btn-apply');

// Open filter popup
filterBtn.addEventListener('click', () => {
  filterPopup.classList.add('active');
});

// Close filter popup
closeFilter.addEventListener('click', () => {
  filterPopup.classList.remove('active');
});

// Close when clicking outside
filterPopup.addEventListener('click', (e) => {
  if (e.target === filterPopup) {
    filterPopup.classList.remove('active');
  }
});

// Reset filters
btnReset.addEventListener('click', () => {
  const checkboxes = filterPopup.querySelectorAll('input[type="checkbox"]');
  const priceInputs = filterPopup.querySelectorAll('.price-input');
  
  checkboxes.forEach(cb => cb.checked = false);
  priceInputs.forEach(input => input.value = '');
});

// Apply filters
btnApply.addEventListener('click', () => {
  // Add your filter logic here
  console.log('Filters applied!');
  filterPopup.classList.remove('active');
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && filterPopup.classList.contains('active')) {
    filterPopup.classList.remove('active');
  }
});