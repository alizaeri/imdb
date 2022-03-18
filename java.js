//const apiUrl = 'https://imdb-api.com/en/API/ComingSoon/k_v7qbsf60';
const apiUrl = 'https://imdb-api.com/en/API/ComingSoon/k_lrcewawe';
let poster1= 'https://imdb-api.com/posters/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg'
let i = 1

//console.log('oncreate körs');
document.querySelector('#search-button').addEventListener('click', async () =>{
   
  let filmData = await getFilmList();
  

  
  console.log('koden körs');
    updateUI(filmData);
})
document.querySelector('#overlay').addEventListener('click', () => {
    document.querySelector('#overlay').classList.toggle('show');
})

document.addEventListener("DOMContentLoaded", async e => {
    document.querySelector('#commingSoon').innerHTML = "";
    getData()
 
    
 
});
async function getFilmList(){
    //const url = "https://imdb-api.com/en/API/SearchTitle/k_v7qbsf60/flower"
   
    console.log('get film list körs');
    const baseUrl = 'https://imdb-api.com/en/API/SearchTitle/';
    const apiKey = 'k_lrcewawe';
    const text = document.querySelector('#text').value;
    const url = `${baseUrl}${apiKey}/${text}`;
    const resp = await fetch(url);
    console.log('resp', resp);
    const data = await resp.json();
    console.log('data',data)
    console.log(url);
    return data ;
    
}
async function getData(){

    const response = await fetch(apiUrl);
    console.log('got response', response);
    const data= await response.json();
    console.log('got data',data);
    const allMovies = data.items;
   // const sexTimes = 0 
    const  moviesContainer = document.querySelector('#commingSoon');

   // const testback = document.querySelector('#testback');
   // testback.backgroundImage= `url("${poster1}")`;
    //testback.style.backgroundImage = `url('${poster1}')`
    //document.getElementById("testback").style.backgroundImage = `url('${poster1}')`; 
    
    allMovies.forEach(m => {
        const movieElement = createMoviesElement(m);
        moviesContainer.appendChild(movieElement);
        i++;
   
    });

}
function updateUI(data){
    const main = document.querySelector('#main');
    const table=document.querySelector('.table');

    data.results.forEach(movie=>{
        console.log(movie.title);
        //const el = document.createElement('ul');
        const trailerId = movie.id ;
        
        const tableTr= document.createElement('tr');
        const tableTrTd1 = document.createElement('td');
        const tableTrTd2 = document.createElement('td');
        const posterLink = document.createElement('a');
        const trailerLink = document.createElement('a');
        const posterMovie= document.createElement('img');
        posterMovie.src='poster.png';
        posterMovie.className = 'icon';
        posterMovie.style.maxWidth = "30px"
        posterLink.appendChild(posterMovie);
        posterLink.href=movie.image;
        const tableTrTd3 = document.createElement('td');
        const trailermovie= document.createElement('img');
        trailermovie.src='trailer.png';
        trailermovie.className = 'icon';
        trailermovie.style.maxWidth = "30px"
        trailerLink.appendChild(trailermovie);
        trailermovie.addEventListener('click', () => {
           // openLightBox(trailerId, movie.title);
           fetchTrailer(trailerId);
           

        })
       // trailerLink.href=movie.image;

        const tableTrTd4 = document.createElement('td');
        tableTrTd1.innerText=movie.title;
        tableTrTd2.innerText=movie.description;
        tableTrTd3.appendChild(posterLink);
        tableTrTd4.appendChild(trailerLink);
        tableTr.appendChild(tableTrTd1);
        tableTr.appendChild(tableTrTd2);
        tableTr.appendChild(tableTrTd3);
        tableTr.appendChild(tableTrTd4);
        table.appendChild(tableTr);

        // اینجا اد کلیک لیسینررو اضافه میکنیم 
    
    })




}
function openLightBox(trailerId) {
   // const el = document.querySelector('#overlay');
   // const elIframe = document.createElement('iframe');


   // fetchTrailer(trailerId);
    
   // const link = fetchTrailer(trailerId);
    console.log('link = frakhani tabe', fetchTrailer(trailerId));
   // elIframe.setAttribute('src',link);
    

   // document.querySelector('#overlay figcaption').innerHTML = title;
   // document.querySelector('#overlay').classList.toggle('show');

}
async function fetchTrailer(id){

    const baseUrl = 'https://imdb-api.com/en/API/Trailer/';
    const apiKey = 'k_lrcewawe';
    const mId = id
    const url = `${baseUrl}${apiKey}/${mId}`;
    const respTrailer = await fetch(url);
    console.log('************************************************************************************');
    console.log(url)
    const dataTrailer = await respTrailer.json();
    console.log('data',dataTrailer)
   // console.log(dataTrailer.linkEmbed);
   const embed= dataTrailer.linkEmbed;
   const el = document.querySelector('#overlay');
  const elIframe = document.createElement('iframe');
  elIframe.setAttribute('src',embed);
  elIframe.setAttribute
  el.appendChild(elIframe);
  document.querySelector('#overlay').classList.toggle('show');
    
    return embed ;


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

