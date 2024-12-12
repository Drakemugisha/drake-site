// for effect on hero section
const checkbox = document.querySelector(".hero .something");
const about = document.getElementById("about");
const home = document.getElementById("home");
const menuhomebtn = document.getElementById("menu-home-btn");
const menuaboutbtn = document.getElementById("menu-about-btn");
const darktoggle = document.querySelectorAll("nav .something");
const body = document.querySelector('body');


let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling down
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        about.style.display = "block";
        home.style.display = "none";
        checkbox.checked = true;
    } else {
        // Scrolling up
        about.style.display = "none";
        home.style.display = "block";
        checkbox.checked = false;
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

const showHome = ()=>{
    about.style.display = "none";
    home.style.display = "block";
    checkbox.checked = false;
}
const showAbout = ()=>{
    about.style.display = "block";
    home.style.display = "none";
    checkbox.checked = true;
}
checkbox.addEventListener("click", ()=>{
    about.style.display = about.style.display == "block" ? "none" : "block";
    home.style.display = about.style.display == "block" ? "none" : "block";
})
menuhomebtn.addEventListener("click", showHome);
menuaboutbtn.addEventListener("click", showAbout);

// projects
const button = document.querySelector(".title");
const projectContent = document.querySelector(".project-content");

button.addEventListener("click", ()=>{
    
    projectContent.classList.toggle("show");
})
const button1 = document.querySelector(".left .title");
const projectContent1 = document.querySelector(".left .project-content");

button1.addEventListener("click", ()=>{
    
    projectContent1.classList.toggle("show");
})
const button2 = document.querySelector(".right .title");
const projectContent2 = document.querySelector(".right .project-content");

button2.addEventListener("click", ()=>{
    
    projectContent2.classList.toggle("show");
})
// slide in menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('slide-menu');

menuToggle.addEventListener('click', (event) => {
    menu.classList.toggle('active');
    event.stopPropagation(); // Prevent the click from bubbling up to the window
});

window.addEventListener('click', (event) => {
    // Check if the menu is active and the click was not on the menu or the toggle button
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// animate on scroll
function isElementInViewPort(el){
    const rect = el.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight) &&
        rect.left <= (window.innerWidth) //check if element is within view port
    );
}

function onScroll(){
    const boxes = document.querySelectorAll(".line, .card");
    boxes.forEach(box => {
        if(isElementInViewPort(box)){
            box.classList.add("animate");
        }
    });
}

window.addEventListener('scroll', onScroll);


// dark mode
// darktoggle.forEach((button) => {
//     button.addEventListener('click', () => {
//         body.classList.toggle('lightmode');
//     });
// });


// Check for user's color scheme preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.remove('lightmode'); // Apply dark mode if preferred
}

// Listen for changes in the color scheme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        body.classList.remove('lightmode'); // Apply dark mode
    } else {
        body.classList.add('lightmode'); // Apply light mode
    }
});
darktoggle.forEach((button) => {
    button.addEventListener('click', () => {
        body.classList.toggle('lightmode');
        
        // Optionally, store the user's preference in localStorage
        if (body.classList.contains('lightmode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
});

// Apply stored preference on page load
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    if (storedTheme === 'dark') {
        body.classList.remove('lightmode');
    } else {
        body.classList.add('lightmode');
    }
}