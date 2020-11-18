const toggleButton = document.querySelector('.toggle-menu');
const navbarLinks = document.querySelector('.nav-ul');
const searchForm = document.querySelector('.search-form');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('show-links');
    searchForm.classList.toggle('show-search');
    console.log('njah');
});
