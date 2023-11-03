const menu = document.querySelector('.bi-list');
const navAside = document.getElementById("navAside");
const close = document.querySelector('.bi-x');

const menuPhoto = document.getElementById('photo');
const menuProfile = document.getElementById('profile');

const accountMenu= document.getElementById('account');
const accountList= document.getElementById('accountList');
const dataDisplayMenu= document.getElementById('dataDisplay');
const dataDisplayList= document.getElementById('dataDisplayList');

const accountArrow = document.getElementById('accountArrow')
const dataArrow = document.getElementById('dataArrow')

menuPhoto.addEventListener('click', () =>{
    const isNavAsideMenu = navAside.classList.contains('inactive');

    if(!isNavAsideMenu){
        navAside.classList.add('inactive');
    }

   menuProfile.classList.toggle('inactive');
    
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
// navAside.addEventListener('click', () =>{
//     navAside.classList.add('inactive')
// })

accountMenu.addEventListener('click', () =>{
    accountList.classList.toggle('inactive')
    accountArrow.classList.toggle('bi-chevron-down--up')
})
dataDisplayMenu.addEventListener('click',() =>{
    dataDisplayList.classList.toggle('inactive')
    dataArrow.classList.toggle('bi-chevron-down--up')
})