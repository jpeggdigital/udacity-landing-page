/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let head = document.querySelectorAll('h2');
let listArr = [];
let secArr = [];
for (let i = 0; i < head.length; i++) {
    listArr.push(head[i].textContent);
    secArr.push('section' + (i + 1));
    const newNav = document.createElement('li');
    newNav.innerHTML = '<a id = "secNum' + (i+1) + '" class = "menu__link" class = "nav__create" href = "#' + secArr[i] + '">' + listArr[i] + '</a>';
    const newList = document.querySelector('#navbar__list');
    newList.appendChild(newNav);    
}

    function smoothScroll() {    
        const navLink = document.querySelectorAll('.menu__link');
        for (let i = 0; i < navLink.length; i++){
            navLink[i].addEventListener ('click', function(event) {
            event.preventDefault();
            let newSecID = 'section'+(i + 1);
            console.log(newSecID);
            newSecID.scrollIntoView({ behavior: "smooth" });
        });
        } 
    }



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

