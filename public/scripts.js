// Modal Overlay
const modalOverlay = document.querySelector('.modal-overlay');
// Modal
const modal = document.querySelector('.modal');
//Get all recipes
const recipes = document.querySelectorAll('.recipe');
// Close modal button
const closeModal = document.querySelector('.close');

for (let recipe of recipes) {
    recipe.addEventListener('click', function () {
        modalOverlay.classList.add('active');
        modal.querySelector('.modal__content-image img').src = recipe.querySelector('.recipe__image-container img').src;
        modal.querySelector('.modal__content-image img').alt = recipe.querySelector('.recipe__image-container img').alt;

        modal.querySelector('.modal__content-info .title').innerHTML  = recipe.querySelector('.recipe__content .recipe__title').innerHTML;
        modal.querySelector('.modal__content-info .author').innerHTML  = recipe.querySelector('.recipe__content .recipe__author').innerHTML;

    })
}

closeModal.addEventListener('click', function() {
    modalOverlay.classList.remove('active');

    modal.querySelector('.modal__content-image img').src = '';
    modal.querySelector('.modal__content-image img').alt = '';

    modal.querySelector('.modal__content-info .title').innerHTML  = '';
    modal.querySelector('.modal__content-info .author').innerHTML  = '';

})