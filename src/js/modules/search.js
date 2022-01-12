const $searchForm = document.querySelector('.search__form');
const $searchInput = document.querySelector('.search__input');
const $searchCity = document.querySelector('.search__city');
const $spinnerWrapper = document.querySelector('.spinner-wrapper');

const bindSearchEvents = _ => {
    $searchForm.addEventListener('submit', e => {
        e.preventDefault();
        $searchInput.classList.toggle('search__input--open');
    })
}

export const initializeSearch = _ => {
    bindSearchEvents();
}
