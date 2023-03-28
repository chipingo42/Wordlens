const searchInput = document.getElementById('Search');
const wordhead = document.querySelector('.resultHead');
const phoneticText = document.getElementById('phoneticsName');
const resultDiv = document.querySelector('.meanings');
const error = document.getElementById('error');
const boderDiv = document.querySelector('.result-boderDiv')
const audioBtn = document.getElementById('audiobtn');
const soundAudio = document.getElementById('sound');
const errorLabel = document.querySelector('.errorLabel');
// const skeleton = document.getElementById('skeleton')

const upDate = new Date;

document.getElementById("lastUpDate").innerHTML = upDate.getFullYear()


async function fetchWord(word) {
    try {
        let res = await  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word,
        )
        if (res.ok === false) {
            error.style.display = 'block'
            // skeleton.style.display = 'none'
            boderDiv.style.display = 'none'
            return false
        }  else {
            error.style.display = 'none'
            // skeleton.style.display = 'none'
            boderDiv.style.display = 'block'
            return await res.json()
        }
    } catch {error}
};


async function handle(e) {
    e.preventDefault()

    if(searchInput.value.length <= 1) {
        errorLabel.style.display = 'flex'
        return
    } else {
        errorLabel.style.display = 'none'
    }


    let data = await fetchWord(searchInput.value);

    if (data == false) {
        return true
    } 

    console.log(data)


    let getPhoneticText =  data[0]?.phonetics.find((item) => {
        if (item.text?.length > 0) return true;
    })

    
    let getPhoneticAudio = data[0]?.phonetics.find((item) => {
        if (item.audio?.length > 0) return true;
    })

    if(getPhoneticAudio !=undefined){
        soundAudio.setAttribute('src', getPhoneticAudio?.audio)
        audioBtn.style.display = "inline-flex"
    }
      else{
        audioBtn.style.display = "none"
    }

    wordhead.textContent = searchInput.value;
    phoneticText.textContent = getPhoneticText?.text
    

    let tableData = '';
    data[0]?.meanings.map((values) =>  (tableData += meaningHtml(values)));
    resultDiv.innerHTML = tableData;
};


function playAudio() {
    soundAudio.play()
}


function meaningHtml(meaning) {
   let everyThings = '';
   meaning.definitions?.map((values, index) => (everyThings += othersHtml(values, index)))

    let html = `
        <div class="originText">
            <h4 class="transform_text">${meaning.partOfSpeech}</h4>
            <ul>
             ${everyThings}
            </ul>
        </div>`
    html = html.trim();
    return html    
}

function othersHtml(definition, index) {

    definitionHTML =  `<li class="meaning">${index + 1}. ${definition?.definition}<ul>`
    let exampleHTML = '';

    if (definition.example != undefined) {
        exampleHTML +=  `<li class="sentence">sentence: “${definition?.example}"</li>`
                   
    };
    
    definitionHTML +=  exampleHTML + '</ul></li>'
    return definitionHTML;
}
