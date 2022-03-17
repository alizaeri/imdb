//const apiUrl = 'https://imdb-api.com/en/API/ComingSoon/k_v7qbsf60';
const apiUrl = 'https://imdb-api.com/en/API/ComingSoon/k_v7qbsf60';
let poster1= 'https://imdb-api.com/posters/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg'
let i = 1

//console.log('oncreate körs');
document.querySelector('#search-button').addEventListener('click', async () =>{
  //  let filmData = await getFilmList();
  getData()
    //updateUI(filmData);
})

document.addEventListener("DOMContentLoaded", async e => {
    getData()
    
 
});
async function getFilmList(){
    const url = "https://imdb-api.com/en/API/SearchTitle/k_p4rlfc8y/flower"
    const resp = await fetch(url);
    console.log('resp', resp);
    console.log('get film list körs');
    const baseUrl = 'https://imdb-api.com/en/API/SearchTitle/';
    const apiKey = 'k_v7qbsf60';
    const text = document.querySelector('#text').value;
    //const url = `${baseUrl}${apiKey}/${text}`;
    
    const data = await resp.json();
    console.log('data',data)
    console.log(url);
    return data ;
    
}
async function getData(){
    const response = await fetch(apiUrl);
    console.log('got response', response);
  /*  const data= await response.json();
    console.log('got data',data);
    const allMovies = data.items;
    const sexTimes = 0 
    const  moviesContainer = document.querySelector('#commingSoon');
    const testback = document.querySelector('#testback');
   // testback.backgroundImage= `url("${poster1}")`;
    testback.style.backgroundImage = `url('${poster1}')`
    //document.getElementById("testback").style.backgroundImage = `url('${poster1}')`; 
    
    allMovies.forEach(m => {
        const movieElement = createMoviesElement(m);
        moviesContainer.appendChild(movieElement);
        i++;
   
    });*/

}
function updateUI(data){
    const main = document.getElementById('#main');

    data.results.forEach(movie=>{
        const el = document.createElement('ul');
        const elli = document.createElement('li');
        const ellia= document.createElement('a');
        el.setAttribute('src', url );
        ellia.innerText = movie.title ;
        ellia.setAttribute('href',movie.image );
        elli.appendChild(ellia);
        el.appendChild(elli);

        // اینجا اد کلیک لیسینررو اضافه میکنیم 
        main.appendChild(el);

        


    })




}




function createMoviesElement(movie){
    const movieElement= document.createElement('div');
    //const aMovieElement = document.createElement('div')
   // const moviePosterText2 = document.getElementById('i');
   // moviePosterText1.innerText = movie.title
   //rhzadeh66@outlook.com.daryart_dp
    movieElement.className = 'movie';
    movieElement.style.backgroundImage = `url("${movie.image}")`
    
    const movieHeading = document.createElement('div');
    movieHeading.innerHTML = movie.fullTitle + movie.genres;
    //const movieposter = document.createElement('img');
   // movieposter.src = movie.image
   // movieposter.className='pic'
   // moviePosterText2.innerText=movie.title
   
  // movieElement.appendChild(movieposter);
    movieElement.appendChild(movieHeading);
    
    console.log(movie.title);
    console.log(movie.image);
    return movieElement;
}

