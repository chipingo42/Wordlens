const darkMode = document.querySelector('.darkMood');


// dark Mode
darkMode.onclick = function() {
    document.body.classList.toggle("darkMode")
    document.body.style.transition = '2s'
};



const basaUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const submitBtn = document.getElementById('mySubmitBtn');
const clearBtn = document.getElementById('clear')
const synomyoms = document.querySelector('.synomyms');
const audio = document.getElementById('audioSpeaker');

// audio = new Audio;


submitBtn.addEventListener("click", (e) => {
    
    e.preventDefault();
    let inpWord = document.getElementById("Search").value;
    fetch(`${basaUrl}${inpWord}`)
    .then((response) =>  response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = ` 
        <div class="hello_content">
            <h2 id="header">${inpWord}</h2>
            <div class="hello_Searched">
                <div class="details">
                    <span>${data[0].phonetic || ""}</span>
                </div>
                <button onclick="playSound()">
                   <img class="volumeIcon" src="./src/public/svg/radio.svg" alt="">
                </button>
                
                <h4 >origin: "early 19th century: variant of earlier hollo; related to holla.",</h4>
            </div>
            <ul class="hello_searched_answer">
                <div class="searched-definition1">
                    <p>1. ${data[0].meanings[0].definitions[0].definition}</p>
                    <h5>sentence:  ${data[0].meanings[0].definitions[0].example || ""}</h5>
                    <h6 class="synonyms">Synonyms</h6>
                    <div class="synomyms">
                        <span class="pills">${data[0].meanings[0].synonyms[0] || ""}</span>
                        <span class="pills">${data[0].meanings[0].synonyms[1] || ""}</span>
                        <span class="pills">${data[0].meanings[0].synonyms[2] || ""}</span>
                        <span class="pills">${data[0].meanings[0].synonyms[3] || ""}</span>
                        <span class="pills">${data[0].meanings[0].synonyms[4] || ""}</span>
                        <span class="pills">${data[0].meanings[0].synonyms[5] || ""}</span>
                   </div>
                </div>
                <div class="searched-definition2">
                    <p>2. ${data[0].meanings[0].definitions[0].definition }</p>
                    <h5>sentence: “she was getting polite nods and hellos from people"</h5>
                </div>
                <div class="searched-definition3">
                    <p>3. ${data[0].meanings[0].definitions[0].definition}</p>
                    <h5>sentence: “I pressed the phone button and helloed"</h5>
                </div>
            </ul>
        </div>`

        audio.src = data[0].phonetics[0].audio
        
    })
    .catch(() => {
        result.innerHTML = `
            <div class="errorPage">
                <p class="Oops">Oops, Sorry pal, we couldn't find definitions 
                    for the word you were looking for.
                </p>
                <h1 class="eroorHeader">404 <br> 
                    <span>no be juju be that!</span>
                </h1>
                <button class="errorBtn"><a href="index.html">Take me home</a></button>
           </div>
        `;  
    })
});

audio.addEventListener('click', () => {
    audio.play();
})

// btn.addEventListener('load', () => {
//     setTimeout(() => {
//     load.classList.add('hide');
//     result.classList.add('show')
//     }, 3400);
   
// })



// function playSound() {
//     sound.play();
// }


