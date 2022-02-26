const darkMode = document.querySelector('.darkMood');
// const basaUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`;


// dark Mode
darkMode.onclick = function() {
    document.body.classList.toggle("darkMode")
    document.body.style.transition = '2s'
};


