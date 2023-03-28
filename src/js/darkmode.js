const darkBtn = document.querySelector('.shadowBtn');
const bodyElement = document.querySelector('body');


const darkMode = () => {
    bodyElement.classList.toggle('dark');
};

darkBtn.addEventListener('click',  () => {
    setDarkMode = localStorage.getItem('dark');

    if (setDarkMode !== 'on') {
        darkMode();
        // Get the value of the 'dark' item from the local storage on every click
        setDarkMode = localStorage.setItem('dark', 'on');
    } else {
        darkMode();
        // Set the value of the item to 'null' when dark mode is off
        setDarkMode = localStorage.setItem('dark', null);
    };
});
// Get the value of the 'dark' item from the local storage
let setDarkMode = localStorage.getItem('dark');
// check dark mode is on or off on page reload
if(setDarkMode === 'on') {
    darkMode();
};
