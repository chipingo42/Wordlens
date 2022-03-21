const darkMode = document.getElementById('darkIcon');



darkMode.onclick = function() {
    document.body.classList.toggle("darkMode")
    document.body.style.transition = '2s'
};




const searchbox = document.getElementById('formSearch');
const wordLens = document.getElementById('Search')
const searchResult = document.getElementById('result');
const searchBtn = document.getElementById('mySubmitBtn');
const errorLabel = document.getElementById('erroLabel');
const word = document.getElementById('word')

function fetchApi(word) {
//     say.style.display = 'red'
//    say.innerHTML = `searching the meaninf os <h6>${word}</h6>`
   let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
   fetch(url).then(res => res.json()).then(result => console.log(result))
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (wordLens.value.length <= 1) {
        errorLabel.style.display = 'flex'
        return
        } else {
        errorLabel.style.display = 'none'
    }

    // console.log(e.target.value)

    fetchApi(e.target.value)
    
})