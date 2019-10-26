

//FONCTION navSlide est la fonction qui va faire bouger le menu burger 

const navSlide = () => {

    //On va chercher les variables du menu, du burger et de la liste du menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu li');
    //Toggle Nav c'est ici qu'on va créer le toggle lorsque le click s'enclenche
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active'); // lorsqu'on clique sur le burger il toggle avec le .nav-active qui translate le menu vers la gauche
        //Animate Links, ici on créé l'animation de chaque lien .link 
        menuLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } 
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation, ici on exécute le toggle du menu burger du changement entre les 3 lignes et la croix
        burger.classList.toggle('toggle');
    });
   
}

navSlide(); //ici on lui fait exécuter la fonction qu'on appelle 