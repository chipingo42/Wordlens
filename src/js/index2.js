const darkMode = document.getElementById('darkIcon');
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







async function fetchWord(word) {

    try {
        let res = await fetch(
            'https://api.dictionaryapi.dev/api/v2/entries/en/' + word,
        )
        if (res.ok == false) {
            error.style.display = 'block'
            meangDiv.style.display = 'none'
            return false
        } else {
            error.style.display = 'none'
            meangDiv.style.display = 'block'
            return await res.json()
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


    let getPhoneticText =  data[0]?.phonetics.find((item) => {
        if (item.text?.length > 0) return true;
    })


    let getPhoneticAudio = data[0]?.phonetics.find((item) => {
        if (item.audio?.length > 0) return true;
    })


    if(getPhoneticAudio !=undefined){
        soundAudio.setAttribute('src', getPhoneticAudio?.audio)
        audioBtn.style.display ="visible"
      }
      else{
        audioBtn.style.display ="none"
    }

    phoneticText.textContent = getPhoneticText?.text
    word.textContent = inputForm.value;

    console.log(data)



    
    let tableData = '';

    data[0]?.meanings.map(function(values) {
        tableData += meaningHtml(values)
    })
    resultDiv.innerHTML = tableData;
}

function playAudio() {
    soundAudio.play()
}



function meaningHtml(meaning) {
   let everyThings = ' ';

   meaning.definitions?.map((values) => (everyThings += othersHtml(values)))

    let html = `
        <div class="originText">
                <h4>${meaning.partOfSpeech}</h4>
                <ul>${everyThings}</ul>
        </div>`;
    html = html.trim();
    return html    
}


function othersHtml(definition) {
    definitionHTML =  `<ul>
                            <li class="meaning">${definition?.definition} </li>
    </ul>`
    exampleHTML = '';
    synonymsHTML = '';

    if (definition.example != undefined) {
        exampleHTML +=  `<ul>
                   <li class="sentence">sentence: “${definition?.example}"</li>
        </ul>`;
    }

    if (definition.synonyms != undefined && definition.synonyms.length > 0) {
        synonymsHTML += `<li class="font-medium">Synonyms: “${flatArray(
          definition?.synonyms,
        )}”</li>`
    }
    

    definitionHTML +=  exampleHTML +  synonymsHTML +'</ul></li>'
    return definitionHTML;
}








darkMode.onclick = function() {
    document.body.classList.toggle("darkMode")
    document.body.style.transition = '0.2s'
};



