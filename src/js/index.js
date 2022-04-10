const darkMode = document.getElementById('darkIcon');
const form = document.getElementById('formSend');
const inputForm = document.getElementById('Search');
const word = document.getElementById('word');
const phoneticText = document.getElementById('phoneticsName');

const resultDiv = document.querySelector('.meanings');



function fetchWord(word) {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
    .then((res) => {
        return res.json() // converted to object
    })
    .then((resultDta) => {
        data(resultDta) // Action data
    })
}

// Event Listners
form.addEventListener('submit', (e) => {
    e.preventDefault()


    let  data = fetchWord(inputForm.value)
    if (data === false) {
        return true
    }

    // let getPhoneticText = data[0]?.phonetics.find((item) => {
    //     if (item.text?.length > 0) return true
    // })
    
    
    word.textContent = inputForm.value;
    // phoneticText.textContent = getPhoneticText?.text

});


function data(resultDta) {
    console.log(resultDta)

    let tableData = '';
    resultDta[0]?.meanings.map((values) =>  (tableData += meaningHtml(values)))
    resultDiv.innerHTML = tableData;
}




function meaningHtml(meaning) {
   let everyThings = ' ';
   meaning.definitions?.map((values) => (everyThings  += othersHtml(values)))
    let html = `
        <div class="originText">
                <h4 class="noun">${meaning.partOfSpeech}</h4>
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
    

    definitionHTML +=  exampleHTML +  synonymsHTML +  '</ul></li>'
    return definitionHTML;
};

function flatArray(arr) {
    return arr.reduce((pv, cv) => {
      return pv + ', ' + cv
    })
}



darkMode.onclick = function() {
    document.body.classList.toggle("darkMode")
    document.body.style.transition = '0.2s'
};



