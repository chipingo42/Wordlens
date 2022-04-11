// const darkMode = document.getElementById('darkmode')




// darkMode.onclick = function() {
//     document.body.classList.toggle("darkMode")
//     document.body.style.transition = '0.2s'
// };



let darkModeBtn = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementById('dark-mode-toggle');



// check if dark mode is enabled 
// if it's enabled, turn it off
//  and if it's disabled, turn it on


const enableDarkMode = () => {
    // 1. add the class darkMode to the body
    document.body.classList.add('darkMode');
    // 2. update darkMode in the localstorage
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    // 1. add the class darkMode to the body
    document.body.classList.remove('darkMode');
    // 2. update darkMode in the localstorage
    localStorage.setItem('darkMode', null);
};

if (darkModeBtn === 'enebled') {
    enableDarkMode();
}


darkModeToggle.addEventListener('click', () => {
    darkModeBtn = localStorage.getItem('darkMode');
    if (darkModeBtn !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}); 
