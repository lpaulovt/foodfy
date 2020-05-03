//Get id of recipe

const recipes = document.querySelectorAll('.recipe');
for (let recipe of recipes ){
    recipe.addEventListener('click', function(){
        window.location.href=`/recipes/${recipe.getAttribute('id')}`
    })
}

// Hide/Show button 

const sections = document.querySelectorAll('.sections');

for (let section of sections){

    const btnHeader = section.querySelector('.section__btn');

    btnHeader.addEventListener('click', function(){
        const sectionContent = section.querySelector('.section__content')

        sectionContent.classList.toggle('hide')

        btnHeader.innerHTML = sectionContent.classList.contains('hide') ? 'Mostrar' : 'Esconder';
    })

}
