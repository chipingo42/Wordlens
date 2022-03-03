const darkMode = document.querySelector('.darkMood');


// dark Mode
darkMode.onclick = function() {
    document.body.classList.toggle("darkMode")
    document.body.style.transition = '2s'
};




const searchResultMenu = document.querySelector('.searchWrapper'),
searchInput = searchResultMenu.querySelector('input'),
print = searchResultMenu.querySelector('.info_print'),
synonyms = searchResultMenu.querySelector('.synonyms'),
radioVolume = searchResultMenu.querySelector('.hello_Searched img')
let audio;

console.log(radioVolume)


// data function
function  data(result, word) {
  if(result.title) {  // if api returns message of can't find word

    // print.innerHtml = `Can't find the meaning of <span>"${word}"</span>. please, try to search again`

    }else {
        console.log(result)
        searchResultMenu.classList.add("active");

        let definitions = result[0].meanings[0].definitions[0],
        phonetice = `${result[0].meanings[0].partOfSpeech} /${result[0].phonetics[0].text}`
        

        // definition 2
        let definitions2 = result[0].meanings[1].definitions[0];

        // definition 3
        let definitions3 = result[0].meanings[0].definitions[1];

        // let's pass the particular response data to a particular html element
        document.getElementById('header').innerText = result[0].word;
        document.querySelector('.hello_Searched span').innerText = phonetice;
        document.querySelector('.searched-definition1 p').innerText = definitions.definition;
        document.querySelector('.searched-definition1 h5').innerText = definitions.example;
 

        // passing meaning two
        document.querySelector('.searched-definition2 p').innerText = definitions2.definition;
        // document.querySelector('.searched-definition2 h5').innerText = definitions.example;


        // passing meaning three
        document.querySelector('.searched-definition3 p').innerText = definitions3.definition;
        // document.querySelector('.searched-definition2 h5').innerText = definitions.example;

       


        audio = new Audio("https:" + result[0].phonetics[0].audio); // creating new audio obj and passing audio src
        console.log(audio)


        // if(definitions.synonyms[0] == undefined)  {  // if there is no synonym then hide the synonyms div
        //     synonyms.parentElement.style.display = 'none'
        // }else{
        //     synonyms.parentElement.style.display = 'block'
        //     synonyms.innerHtml = "";
        //     for (let i = 5; i < 1; i++) { // get synonyms out of many or none
        //         let tagSynonyms = `<h6>${definitions.synonyms[i]}</h6>`
        //         synonyms.insertAdjacentHTML('beforeend', tagSynonyms) // passing all synonyms inside synonyms div 
        //    }
        // }  
    }
}

// fetch api function
function fetchApi(word) {
    // print.style.color = '#ff0000'
    // print.style.display = 'block'
    // print.innerHtml = `searching the meaning of <span>${word}</span>`
    
    let basaUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    // fetching api response and returning it with parseing into js obj and in another then
    // method alling data function with passing api response and searched word as an arument
    fetch(basaUrl)
    .then(res => res.json())
    .then((result) => {
        data(result, word)
    })
}

// function
searchInput.addEventListener('keyup', e => {
    // console.log(e.target.value)
    fetchApi(e.target.value);
    if(e.key === "Enter" && e.target.value) {
        // fetchApi(e.target.value);
    }
})



// autoRadio function
radioVolume.addEventListener('click', () => {
    audio.play();
})









/*
const searchWord = document.getElementById('formSearch'),
    searchInput = document.getElementById('Search')

;    



loudListner();

function loudListner() {
   var searchWord;
   searchWord = searchInput;
}



function fetchApi(word) {
    searchHeader.style.color = 'red'
   searchHeader.innerHtml = `searching the meaning of <h2>"${word}"</h2>`
}


searchInput.addEventListener("keyup", e =>{
    // console.log(e.target.value)

    if(e.key === "Enter" && e.target.value) {
        fetchApi(e.target.value)
    }
    
   
})


// searchInput.addEventListener("keyup", e =>{
//     // console.log(e.target.value)

//     if(e.key === "click" && e.target.value) {
//         console.log(e.target.value)
//     }
    
   
// })
*/













 
// fetch api function
// function fetchApi(word) {
//    searchHeader.innerText = `have already entered <h2>${word}</h2>`
// }


// searchInput.addEventListener("keyup", e =>{
//     console.log(e.target.value)

    // if(e.key === "Enter" && e.target.value) {
    //     console.log(e.target.value)
    // }
    
   
// })








// function searchShow(query)  {
//     const basaUrl  = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
//      fetch(basaUrl)
//     .then(res => res.json())
//     .then((data)  =>  {
//        const result = data.map(element => element?.word)
//         console.log(data)
//         // console.log(result)
//         renderResults(result)

//         // print the header
//         // const list = document.getElementById('header').innerText = result.value;
//         // console.log(list)
//     }) 

// }






// function renderResults(result) {
//     const list = document.getElementById('header');
//     list.innerText = '';
//     result.forEach(result => {

//         const element = document.createElement('ul')

//         element.innerText = result;

//         list.appendChild(element);
        
//     });
// }
 

// let searchTimeOut = 0;

// window.onload = () => {
//     const searchFeildElement = document.getElementById('Search')
//     searchFeildElement.onkeyup = (e) => {
//         e.preventDefault();
//         // console.log(searchFeildElement.value)  
        
//         clearTimeout( searchTimeOut);
        
//         if(searchFeildElement.value.trim().length === 0) {
//             return;
//         }


//         searchTimeOut = setTimeout(() => {
//                searchShow(searchFeildElement.value)
//         }, 250);
         
//     }
// }

