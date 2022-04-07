const darkMode = document.getElementById('darkIcon');
const formSend = document.getElementById('formSend')
const searchBox = document.getElementById('Search');
// const searchResult = document.getElementById('result');
const phoneticText = document.getElementById('phoneticsName');
// const meaningDiv = document.querySelector('.meanings');
// const examples = document.querySelector('.sentence');
// const synonyms = document.querySelector('.Synonyms');
// const searchBtn = document.getElementById('mySubmitBtn');
const word = document.getElementById('word');
// const audiobtn = document.getElementById('audiobtn');
// const audioSound = document.getElementById('sound');
const skeleton = document.getElementById('skeleton');
const error = document.getElementById('error');
const errorLabel = document.getElementById('erroLabel');

// console.log(formSend)





function fetchWord(word) {

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        
    })
};


function playAudio() {
    audioSound.play()
};

// Event Listener
loadListener();

function loadListener() {
    formSend.addEventListener('submit', (e) => {
       e.preventDefault();

       if (searchBox.value.length <= 1) {
            errorLabel.style.display = 'flex'
            return
            } else {
            errorLabel.style.display = 'none'
        };


        const data = fetchWord(searchBox.value)
        if (data == false) {
            return
        }

        console.log(data)
        word.textContent = searchBox.value;

    })
}





darkMode.onclick = function() {
    document.body.classList.toggle("darkMode")
    document.body.style.transition = '0.2s'
};















// const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// console.log(error)


// searchBtn.addEventListener('click', (e) => {
//     e.preventDefault()

//     if (searchBox.value.length <= 1) {
//         errorLabel.style.display = 'flex'
//         return
//         } else {
//         errorLabel.style.display = 'none'
//     }

//     searchResult.style.display = 'flex'

//     let inpWord = document.getElementById('Search').value

//     fetch(`${baseUrl}${inpWord}`)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         // result = data


      

//         // word.innerText = inpWord
//         // phoneticText.innerHTML = `${data[0]?.phonetics[1 || 2].text }`
//         // meaning1.innerHTML = ` 1. ${data[0]?.meanings[0].definitions[0].definition}`
//         // meaning2.innerHTML = `2. ${data[0]?.meanings[0].definitions[0].definition}`
//         // meaning3.innerHTML = `3. ${data[0]?.meanings[0].definitions[0].definition || ""}`
//         // examples.innerHTML = `${data[0].meanings[0].definitions[0].example || ""}`

//         // meaning4.innerHTML = `4. ${data[0].meanings[0].definitions[3].definition || ""}`
//         // meaning5.innerHTML = `5. ${data[0].meanings[0].definitions[4].definition || ""}`
//         // meaning6.innerHTML = `6. ${data[0].meanings[0].definitions[5].definition || ""}`
//         // meaning7.innerHTML = `7. ${data[0].meanings[0].definitions[6].definition || ""}`
//         // meaning8.innerHTML = `8. ${data[0].meanings[0].definitions[7].definition || ""}`

//     })
//     // console.log(e.target.value)
// })

