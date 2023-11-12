const menu = document.querySelector('.bi-list');
const navAside = document.getElementById("navAside");
const close = document.querySelector('.bi-x');
const subMenu = document.querySelectorAll('.submenu');

const menuPhoto = document.getElementById('photo');
const menuProfile = document.getElementById('profile');

subMenu.forEach(items => {
    items.addEventListener('click', () =>{
        items.nextElementSibling.classList.toggle('inactive');
        items.lastElementChild.classList.toggle('bi-chevron-down--up')
    })
});
menu.addEventListener('click', () =>{
    const isProfileMenu = menuProfile.classList.contains('inactive');

    if(!isProfileMenu){
        menuProfile.classList.add('inactive');
    }
    navAside.classList.toggle('inactive');
});

close.addEventListener('click',() =>{

    navAside.classList.add('inactive');
    
});

menuPhoto.addEventListener('click', () =>{
    const isNavAsideMenu = navAside.classList.contains('inactive');

    if(!isNavAsideMenu){
        navAside.classList.add('inactive');
    } 

   menuProfile.classList.toggle('inactive');

});

