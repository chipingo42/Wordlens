const form = document.getElementById('formSend');
const inputForm = document.getElementById('Search');
const word = document.getElementById('word');
const phoneticText = document.getElementById('phoneticsName');
const resultDiv = document.querySelector('.meanings');
const error = document.getElementById('error');
const meangDiv = document.getElementById('result')
const audioBtn = document.getElementById('audiobtn');
const soundAudio = document.getElementById('sound');
const errorLabel = document.querySelector('.errorLabel');
// const skeleton = document.getElementById('skeleton')





async function fetchWord(word) {
    // skeleton.style.display = 'block'
  
    try {
        let response = await fetch(
            'https://api.dictionaryapi.dev/api/v2/entries/en/' + word,
        )
        if (response.ok == false) {
            error.style.display = 'block'
            // skeleton.style.display = 'none'
            meangDiv.style.display = 'none'
            return false
        } else {
            error.style.display = 'none'
            // skeleton.style.display = 'none'
            meangDiv.style.display = 'block'
            return await response.json()
        } 
    }catch (error) {}
}


// Event Listners
async function handle(e) {
    e.preventDefault()

    if(inputForm.value.length <= 1) {
        errorLabel.style.display = 'flex'
       return
    } else {
        errorLabel.style.display = 'none'
    }


    let  data = await fetchWord(inputForm.value)
    if (data === false) {
        return true
    }

    console.log(data);

    let getPhoneticText =  data[0]?.phonetics.find((values) => {
        if (values.text?.length > 0) return true;
    })


    let getPhoneticAudio = data[0]?.phonetics.find((values) => {
        if (values.audio?.length > 0) return true;
    })


    if(getPhoneticAudio !=undefined){
        soundAudio.setAttribute('src', getPhoneticAudio?.audio)
        audioBtn.style.display ="show"
    }
      else{
        audioBtn.style.display ="none"
    }

    phoneticText.textContent = getPhoneticText?.text
    word.textContent = inputForm.value;

    let tableData = '';
    data[0]?.meanings.map((values) => tableData += meaningHtml(values))
    resultDiv.innerHTML = tableData;
}


function playAudio() {
    soundAudio.play()
}


function meaningHtml(meaning) {
   let everyThings = '';
   meaning.definitions?.map((values) => (everyThings += othersHtml(values)))

    let html = `
        <div class="originText">
            <h4 class="transform-text">${meaning.partOfSpeech}</h4>
            <ul>
             ${everyThings}
            </ul>
        </div>`
    html = html.trim();
    return html    
}




// arrIndex.map(item => {
//     return item
// })

function othersHtml(definition) {

    let index = [];
    definitionHTML =  `<li class="meaning">${index += 1}. ${definition?.definition}<ul>`
    let exampleHTML = '';

    if (definition.example != undefined) {
        exampleHTML +=  `<li class="sentence">sentence: “${definition?.example}"</li>`
                   
    };
    
    definitionHTML +=  exampleHTML + '</ul></li>'
    return definitionHTML;
}
