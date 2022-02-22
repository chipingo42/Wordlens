const darkMode = document.querySelector('.darkMood');
const basaUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`;
const selectHelo = document.getElementById('Search')




// dark Mode
darkMode.onclick = function() {
    document.body.classList.toggle("darkMode")
    document.body.style.transition = '2s'
}



const getListOfWord = async () => {
   try {
        const data = await fetch(basaUrl)
        const res = await data.json();
        selectedWord(res.message)
   } catch (error) {
       console.error(error.message, 'Not found')
   }
}



const selectedWord = (data) => {
    const breedOption = `
        ${data?.map((el) => (`<option value=${el}>${el}</option>`))}`
    selectHelo.innerHTML = breedOption;
};

const getBreedName = (e) => {
    const value = e.target.value;
    getWords(value)
};


selectHelo.addEventListener('click', getBreedName);

const getWords = async (name, num = 9) => {
  try {
    const data = await fetch(`https://api.dictionaryapi.dev/api/${name}/entries/en${num}`)
    const entries = await data.json()
    //   console.log(image?.message)
    randomImages(entries?.message)

  } catch (error) {
    console.log(error.messge, 'Check again')
  }
};

getListOfWord();
