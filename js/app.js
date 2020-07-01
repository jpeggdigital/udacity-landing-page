/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Added: collapsible/expandible nav
 * Added: sections collapsible
 * Added: hide nav when scrolling
 * Added: scroll to top button
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
// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event

/**
 * Nav bar will display text "Portfolio Sections" - this is the container
 * Nav Sections in the portfolio will be dynamically generated
 * based on loaded content
 * This will be collabsible/expandible
 */
    // const navSection = document.querySelector('H2').textContent;


// function arrCreation {
    let head = document.querySelectorAll('h2');
    let listArr = []
    for (let i = 0; i < head.length; i++) {
        listArr.push(head[i].textContent);
         
    }
    console.log(listArr);

    // let head = document.querySelectorAll('h2');
    let secArr = [];
    for (let i = 0; i < head.length; i++) {
        secArr.push('section' + (i + 1));
        
    } 
    console.log(secArr);
//}
    


// function genNavBar () {
//     menuCreation();

//     function menuCreation() {
//         let head = document.querySelectorAll('h2');
//         for (let i = 0; i < head.length; i++) {
//             const newNav = document.createElement('li');
//             let secId = 'section' + (i + 1);
//             newNav.innerHTML = '<a class = "menu__link" href = "#' + secId + '">' + head[i].textContent + '</a>';
//             const newList = document.querySelector('#navbar__list');
//             newList.appendChild(newNav);
//         }
//     }
// }

// genNavBar();




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



