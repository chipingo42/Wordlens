// DarkMode
// let darkModeBtn = localStorage.getItem('darkMode');
// const darkModeToggle = document.getElementById('dark-mode-toggle')

const form = document.getElementById('formSend');
const inputForm = document.getElementById('Search');
const word = document.getElementById('word');
const phoneticText = document.getElementById('phoneticsName');
const meangDiv = document.getElementById('result')
const resultDiv = document.querySelector('.meanings');
const audioBtn = document.getElementById('audiobtn');
const soundAudio = document.getElementById('sound');
const error = document.getElementById('error');
const errorLabel = document.querySelector('.errorLabel');



function fetchWord(word) {

    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
    .then((res) => {
        return res.json() // converted to object
    })
    .then((resultDta) => {
        actionData(resultDta); // Action data


        if (resultDta.ok == false) {
            error.style.display = 'block'
            meangDiv.style.display = 'none'
            return false
        } else {
            error.style.display = 'none'
            meangDiv.style.display = 'block'
        } 
    })
    .catch((err) => {
        error.innerHTML = err;
    })
};

// Event Listners
form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(inputForm.value.length <= 1) {
        errorLabel.style.display = 'flex'
        return
    } else {
        errorLabel.style.display = 'none'
    }


    let  data = fetchWord(inputForm.value);
    if (data === false) {
        return true
    };
});


function actionData(resultDta) {
    // console.log(resultDta)

    let getPhoneticText =  resultDta[0]?.phonetics.find((item) => {
        if (item.text?.length > 0) return true;
    })


    let getPhoneticAudio = resultDta[0]?.phonetics.find((item) => {
        if (item.audio?.length > 0) return true;
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
    resultDta[0]?.meanings.map((values) =>  (tableData += meaningHtml(values)));
    resultDiv.innerHTML = tableData;
};

function playAudio() {
    soundAudio.play()
}


function meaningHtml(meaning) {
   let everyThings = ' ';
   meaning.definitions?.map((values) => (everyThings  += othersHtml(values)));
    let html = `
        <div class="originText">
                            <h4 class="noun">${meaning.partOfSpeech}</h4>
                            <ul>${everyThings}
                </ul>
        </div>`;
    html = html.trim();
    return html    
}


function othersHtml(definition) {
    definitionHTML =  `<ul>
                         <li class="meaning">${definition?.definition} </li>
    </ul>`;

    exampleHTML = '';
    synonymsHTML = '';


    if (definition.example != undefined) {
        exampleHTML +=  `<ul>
                   <li class="sentence">sentence: “${definition?.example}"</li>
        </ul>`;
    };

    if (definition.synonyms != undefined && definition.synonyms.length > 0) {
        synonymsHTML += `<li class="font-medium">Synonyms: “${flatArray(
          definition?.synonyms,
        )}”</li>`
    };
    

    definitionHTML +=  exampleHTML +  synonymsHTML +  '</ul></li>';
    return definitionHTML;
};



