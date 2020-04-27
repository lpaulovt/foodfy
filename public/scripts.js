//Active Menu - WORKING
const currentPage = location.pathname;
const navItems = document.querySelectorAll('.nav__item')

for(const nav of navItems) {
    const href = nav.querySelector('a').getAttribute('href');

    if(currentPage.includes(href)){
        nav.classList.add( 'active');
    }
}

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
