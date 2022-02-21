var darkMode = document.querySelector('.darkMood');


// console.log(darkMode)

// Function
darkMode.onclick = function() {
    document.body.classList.toggle("darkMode")
    document.body.style.transition = '2s'
}