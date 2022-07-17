'use strict';

let filterNav = document.querySelector('.filterNav');
let filterLabel = document.querySelector('.filterLabel');
let filterIcons = document.querySelector('.filterIcons');

filterLabel.addEventListener('click', function () {
    filterNav.classList.toggle('hidden');
    filterLabel.classList.toggle('filterLabelPink');
    filterIcons.classList.toggle('filterIconPink');

    if (filterIcons.getAttribute('src') === 'img/filters.svg') {
        filterIcons.setAttribute('src', 'img/filtersHover.svg')
    } else {
        filterIcons.setAttribute('src', 'img/filters.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});