const darkMode = document.querySelector('.darkMood');


// dark Mode
darkMode.onclick = function() {
    document.body.classList.toggle("darkMode")
    document.body.style.transition = '2s'
};





// document.addEventListener('readystatechange', (e) => {
//    if (e.target.readyState === "complete") {
//     //    initApp()
//    }
// })



// const initApp = () => {
//     const search = document.getElementById('Search');
//     search.addEventListener('input', showClearTextButton);

//     const form = document.getElementById('formSearch');
//     form.addEventListener('submit', submitTheSearch);
// }









function searchShow(query)  {
    const basaUrl  = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
     fetch(basaUrl)
    .then(res => res.json())
    .then((data)  =>  {
       const result = data.map(element => element?.word)
        console.log(data)
        // console.log(result)
        renderResults(result)

        // print the header
        // const list = document.getElementById('header').innerText = result.value;
        // console.log(list)
    }) 

}






function renderResults(result) {
    const list = document.getElementById('header');
    list.innerText = '';
    result.forEach(result => {

        const element = document.createElement('ul')

        element.innerText = result;

        list.appendChild(element);
        
    });
}
 

let searchTimeOut = 0;

window.onload = () => {
    const searchFeildElement = document.getElementById('Search')
    searchFeildElement.onkeyup = (e) => {
        e.preventDefault();
        // console.log(searchFeildElement.value)  
        
        clearTimeout( searchTimeOut);
        
        if(searchFeildElement.value.trim().length === 0) {
            return;
        }


        searchTimeOut = setTimeout(() => {
               searchShow(searchFeildElement.value)
        }, 250);
         
    }
}

