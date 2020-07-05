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

function buildNav(){
    let head = document.querySelectorAll('h2');
    let listArr = [];
    let secArr = [];
    for (let i = 0; i < head.length; i++) {
        listArr.push(head[i].textContent);
        secArr.push('section' + (i + 1));
        const newNav = document.createElement('li');
        newNav.innerHTML = '<a class = "menu__link" class = "nav__create" href = "#' + secArr[i] + '">' + listArr[i] + '</a>';
        const newList = document.querySelector('#navbar__list');
        newList.appendChild(newNav);    
    }
}

// Scroll to anchor ID using scrollIntoView event
    function smoothScroll() {     
        const navLink = document.querySelectorAll('.menu__link');
        for (let i = 0; i < navLink.length; i++){
            navLink[i].addEventListener('click', function(event) {
            event.preventDefault();
            const newSecID = 'section'+(i + 1);
            const navScroll = document.getElementById(newSecID);
            navScroll.scrollIntoView({ behavior: "smooth" });
        });
        } 
    }

// Add class 'active' to section when near top of viewport
    function setActive() {
        let setLocation = document.querySelectorAll('.location');
        for (let i = 0; i < setLocation.length; i++) {
            window.addEventListener('scroll', function () {
                const topHead = setLocation[i].getBoundingClientRect().top;
                const newHeadID = 'section'+(i + 1);
                const navActive = document.getElementById(newHeadID);
                const oldActive = document.querySelector('.your-active-class');
                if (topHead <= 400 && topHead > -100) {
                    oldActive.classList.remove('your-active-class');
                    navActive.classList.add('your-active-class');
                }
            })
        }
    }

    setActive();

// Hide Heading section on scroll event

    // function hideHeader(){
    //     window.addEventListener('scroll', function() {
    //         const mainHeader = document.querySelector('.page__header');
    //         mainHeader.style.background = 'red';
    //     });
    // }    

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click
smoothScroll();
// Set sections as active

// Hide Heading section on scroll event
// hideHeader();
