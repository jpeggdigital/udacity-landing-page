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
        if (i === 0) {
            const newNav = document.createElement('li');
            newNav.innerHTML = '<a class = "menu__link nav__create update-menu" href = "#' + secArr[i] + '">' + listArr[i] + '</a>';
            const newList = document.querySelector('#navbar__list');
            newList.appendChild(newNav);
        } else {
        const newNav = document.createElement('li');
        newNav.innerHTML = '<a class = "menu__link nav__create" href = "#' + secArr[i] + '">' + listArr[i] + '</a>';
        const newList = document.querySelector('#navbar__list');
        newList.appendChild(newNav);
        }
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
                const newActive = document.getElementById(newHeadID);
                const oldActive = document.querySelector('.your-active-class');
                const oldMenu = document.querySelector('.update-menu');
                if (topHead <= 500 && topHead > -100 ) {
                    oldActive.classList.remove('your-active-class');
                    newActive.classList.add('your-active-class');
                            let menuLocation = document.querySelectorAll('.menu__link');
                                for (let m = 0; m < menuLocation.length; m++) {
                                    //let p = i;
                                    const menuUpdate = menuLocation[i];
                                    oldMenu.classList.remove('update-menu');
                                    menuUpdate.classList.add('update-menu');
                               }
                }
            })
        }
    }

    
 

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
setActive();

// Hide Heading section on scroll event

// hideHeader();
