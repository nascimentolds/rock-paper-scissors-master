const rulesBt = document.querySelector('.rules-bt');
const closeBt = document.querySelector('.close-bt');
const modal = document.querySelector('.rules');

rulesBt.addEventListener('click', () => {
  modal.style.display = 'flex';
})

closeBt.addEventListener('click', () => {
  modal.style.display = 'none';
})
