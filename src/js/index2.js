const form = document.getElementById('formSend');
const inputForm = document.getElementById('Search');
const word = document.getElementById('word');
const result = document.querySelector('.meanings')

// const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`


function fetchWord(word) {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
    .then((res) => {
        return res.json()
    })
    .then((result) => {
        data(result)
    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault()


    let  data = fetchWord(inputForm.value)
    if (data === false) {
        return true
    }
})


