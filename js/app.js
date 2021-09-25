/**
 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 
 * Dependencies: None
 
 * JS Version: ES2015/ES6
 
 * JS Standard: ESlint
 
*/

/*
 * Define Global Variables
*/
const allSecs = document.querySelectorAll('section');
const myFragment = document.createDocumentFragment();
/*
 * End Global Variables
*/

//Begin Main Functions
function createNav(){
  allSecs.forEach(currentSec=>{
  //Create list item  
  let newLi = document.createElement('li');
  //Get data-nav text
  let dataNav = currentSec.getAttribute('data-nav');
  //Create link in list item
  newLi.innerHTML=`<a href='#${currentSec.id}' class='menu__link'>${dataNav}</a>`;
  // Build menu 
  myFragment.appendChild(newLi);
  // Scroll to section on link click
  newLi.addEventListener('click', liEvent=>{
    liEvent.preventDefault();
    currentSec.scrollIntoView({block: 'end', inline: 'nearest'})
   })
  })
  // build the nav
  document.querySelector('#navbar__list').appendChild(myFragment);
}

//Scrolling Function
function scrollEvent(){
  allSecs.forEach(currentSec=>{
  let myRect = currentSec.getBoundingClientRect();
  //Check Top Of Section's BoundingRect
  if(myRect.top > 0 && myRect.top < 200){
    // Add class 'your-active-class' to section when near top of viewport
    currentSec.classList.add('your-active-class');
    allSecs.forEach((currentSec)=>{
    //Styling All Sections
      currentSec.style.backgroundColor='lightseagreen';
    })
    //Styling Current Section
    currentSec.style.backgroundColor='grey';
    //Retrive All links In The Page
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(currentLink=>{
    if(currentLink.textContent == currentSec.getAttribute('data-nav')){
      // Add class 'active' to current link
      currentLink.classList.add('Active');
      allLinks.forEach(currentLink=>{
        //Styling All Links
        currentLink.style.backgroundColor='white';
      })
      //Styling Active Link
      currentLink.style.backgroundColor='grey';
    }else{
      currentLink.classList.remove('Active');
    } 
  })
  }
  else{
    currentSec.classList.remove('your-active-class');
  }
})
}
//Top button implementation
let scollUpBtn = document.querySelector('#up');
window.onscroll = ()=>{
  if(document.documentElement.scrollTop>200)
  {
    scollUpBtn.style.display='block';
    document.querySelector('#navbar__list').style.display = 'none';

  }else{
    scollUpBtn.style.display='none';
    document.querySelector('#navbar__list').style.display = 'block';
  }
}
function goUp(){
  document.documentElement.scrollTop = 0;
}

/*
 * End Main Functions
 * Begin Events
*/
//Event Listner On Contents Load
document.addEventListener("DOMContentLoaded", createNav);
//Event Listner On Viewporst Scroll
window.addEventListener('scroll',scrollEvent);
//Event Listner On Scroll to up
scollUpBtn.addEventListener('click', goUp);







