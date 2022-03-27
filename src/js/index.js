const darkMode = document.getElementById('darkIcon');



darkMode.onclick = function() {
    document.body.classList.toggle("darkMode")
    document.body.style.transition = '0.2s'
};







const searchBox = document.getElementById('Search')
const searchResult = document.getElementById('result');
const phoneticText = document.getElementById('phoneticsName');
const meaningDiv = document.querySelector('.meanings');
const examples = document.querySelector('.sentence');
const synonyms = document.querySelector('.pills')
const searchBtn = document.getElementById('mySubmitBtn');
const word = document.getElementById('word')
const audiobtn = document.getElementById('audiobtn');
const sound = document.getElementById('sound')
const skeleton = document.getElementById('skeleton')
const error = document.getElementById('error')
const errorLabel = document.getElementById('erroLabel');

console.log(meaningDiv)

async function fetchWord(word) {

    skeleton.style.display = 'block'
    error.style.display = 'none'
    searchResult.style.display = 'none'

    try {
        let respone = await fetch(
            "https://api.dictionaryapi.dev/api/v2/entries/en/" + word,
        )

        if (respone.ok == false) {
            skeleton.style.display = 'none'
            error.style.display = 'block'
            searchResult.style.display = 'none'
            meaningDiv.style.display = 'none'
            return false
        } else {
            skeleton.style.display = 'none'
            error.style.display = 'none'
            searchResult.style.display = 'block'
            meaningDiv.style.display = 'block'
            return await respone.json()
        }
    }catch (error) {}
}


function playAudio() {
    sound.play()
}

async function handleSubmit(e) {
    e.preventDefault()

    if (searchBox.value.length <= 1) {
        errorLabel.style.display = 'flex'
        return
        } else {
        errorLabel.style.display = 'none'
    }


    const data = await fetchWord(searchBox.value)
    if (data == false) {
        return
    }


    let getPhoneticText = data[0]?.phonetics.find((item) => {
        if (item.text?.length > 0) return true
    })

    let getPhoneticAudio = data[0]?.phonetics.find((item) => {
        if (item.audio?.length > 0) return true
    })
    

    if(getPhoneticAudio !=undefined){
        sound.setAttribute('src', getPhoneticAudio?.audio)
        audiobtn.style.display = "visible"
        // audiobtn.style.marginLeft = '27%'
        // audiobtn.style.marginTop = '-17px'
    } else{  
     audiobtn.style.display ="none"
    }

    word.textContent = searchBox.value
    phoneticText.textContent = getPhoneticText?.text


    let meaningsString = ''
    data[0]?.meanings.map((item) => {
        meaningsString += meaningsHtml(item)
    })
    meaningDiv.innerHTML = meaningsString

    // console.log(data)
}




function meaningsHtml(meaning) {
    let others = ' '
    meaning.definitons?.map((item) => (others += otherHtml(item)))
    let html = `<div class="originText">
                     <header>${meaning.partOfSpeech}</header>
                     <ul class="inn">
                      ${others}
                      </ul>
                     </div>`

    html = html.trim()
    return html        
    // console.log(html)
}



function othersHtml(definition) {
  definitionHtml = `<li>${definiton?.definiton}<ul>`
}


// function otherHtml(definition) {
//     definitionHtml = `<li class="meaning"> ${definition?.definition}<ul>`
//     let exampleHtml = ''
//     let synonymsHtml = ''
//     // let antonymsHtml = ''
  
//     if (definition.example != undefined) {
//       exampleHtml += `<li class="sentence">sentence: “${definition?.example}"</li>`
//     }
//     if (definition.synonyms != undefined && definition.synonyms.length > 0) {
//       synonymsHtml += `<li class="Synonyms">Synonyms: “${flatArray(
//         definition?.synonyms,
//       )}”</li>`
//     }
  
  
//     definitionHtml += exampleHtml + synonymsHtml  + '</ul></li>'
//     // return definitionHtml
//     console.log(definitionHtml)
// }

// function flatArray(arr) {
//     return arr.reduce((pv, cv) => {
//       return pv + ', ' + cv
//     })
// }
















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

