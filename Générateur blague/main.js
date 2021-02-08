let bouton = document.querySelector('.btn-generateur');
const citation = document.querySelector('.citation');

bouton.addEventListener('click',getFunny)
  function getFunny() {
    let url="http://api.icndb.com/jokes/random";
    fetch(url)
    .then((response)=>response.json())
    .then(data =>{
        console.log(data.value.joke);
        citation.innerHTML=data.value.joke;
    })
}