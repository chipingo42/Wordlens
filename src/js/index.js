const darkMode = document.querySelector('.darkMood');


// dark Mode
darkMode.onclick = function() {
    document.body.classList.toggle("darkMode")
    document.body.style.transition = '2s'
};



const basaUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const btn = document.getElementById('mySubmitBtn');
const synomyoms = document.querySelector('.synomyms')
// const resultClose = document.querySelector('.hello_result');



btn.addEventListener("click", (e) => {
    e.preventDefault();
    let inpWord = document.getElementById("Search").value;
    fetch(`${basaUrl}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = ` 
        <div class="hello_content">
            <h2 id="header">${inpWord}</h2>
            <div class="hello_Searched">
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <span >/${data[0].phonetic}/</span>
                    <!-- /həˈləʊ/ -->
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
                    <p>2. ${data[0].meanings[0].definitions[0].definition}</p>
                    <h5>sentence: “she was getting polite nods and hellos from people"</h5>
                </div>
                <div class="searched-definition3">
                    <p>3. ${data[0].meanings[0].definitions[0].definition}</p>
                    <h5>sentence: “I pressed the phone button and helloed"</h5>
                </div>
            </ul>
        </div>`
        
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




function playSound() {
    sound.play();
}



























































// // const searchResultMenu = document.querySelector('.searchWrapper'),
// // searchInput = searchResultMenu.querySelector('form');
// // print = searchResultMenu.querySelector('.info_print'),
// // synonyms = searchResultMenu.querySelector('.synonyms'),
// // radioVolume = searchResultMenu.querySelector('.hello_Searched img')
// // let searchTimeOut = 0;
// // var audio;


// const searchResultMenu = document.getElementById('formSearch');
// const searchBtn = document.getElementById('Search');


// loadListener();


// // data function
// function  data(result) {
//     if(result.title) {  // if api returns message of can't find word
//     }else {
//         console.log(result)
//         let definitions = result[0].meanings[0].definitions[0],
//         phonetice = `${result[0].meanings[0].partOfSpeech} /${result[0].phonetics[0].text}`
        

//         // definition 2
//         let definitions2 = result[0].meanings[1].definitions[0];

//         // definition 3
//         let definitions3 = result[0].meanings[1].definitions[1];

//         // let's pass the particular response data to a particular html element
//         document.getElementById('header').innerText = result[0].word;
//         document.querySelector('.hello_Searched span').innerText =  phonetice;
//         document.querySelector('.searched-definition1 p').innerText = definitions.definition;
//         document.querySelector('.searched-definition1 h5').innerText = definitions.example;
 

//         // passing meaning two
//         document.querySelector('.searched-definition2 p').innerText = definitions2.definition;
//         document.querySelector('.searched-definition2 h5').innerText = definitions.example;


//         // passing meaning three
//         document.querySelector('.searched-definition3 p').innerText = definitions3.definition;
//         document.querySelector('.searched-definition3 h5').innerText = definitions.example;



//         // audio = new Audio("https:" + result[0].phonetics[1].audio)  // creating new audio obj and passing audio src

//     }
    
// }


// // fetch api function
// function fetchApi(word) {
//     let basaUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
//     // fetching api response and returning it with parseing into js obj and in another then method alling data function with passing api response and searched word as an arument 
//     fetch(basaUrl)
//     .then(res => res.json())
//     .then((result) => {
//         data(result, word)
//     })
// }


// function loadListener() {
//     let  searchResultMenu;
//     searchResultMenu = searchBtn;

//     searchResultMenu.addEventListener('keyup', e => {
//         e.preventDefault()
    
//         // clearTimeout(e.target.value);
    
//         fetchApi(e.target.value) 
//         // console.log(e.target.value);
    
//         // searchTimeOut = setTimeout(() => {
//         //     fetchApi(e.target.value)
//         // }, 250);
    
    
//         // if(e.key === "Enter" && e.target.value) {
//         //     fetchApi(e.target.value);
//         // }
//     })
// }






// // function
// // window.onload = () => {
// //     const searchBtn = document.getElementById('formSearch');
// //     searchBtn.onchange = (event) => {
// //         event.preventDefault()
// //         fetchApi(event.target.value)
// //     }

// // }


// // autoRadio function
// // radioVolume.addEventListener('click', () => {
// //     audio.play();
// // })



