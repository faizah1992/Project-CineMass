let movieCollection = document.querySelector('#collection')
let root = document.querySelector('#root')

// function to create movie div by genre
let createMovieCollection = (film)=>{
  let collectionDiv = document.createElement('div')
  collectionDiv.setAttribute('id', 'collection')
  collectionDiv.setAttribute('class', 'row')

  let filmDiv = document.createElement('div')
  filmDiv.setAttribute('class', 'card col-sm-2')

  let title = document.createElement('h5')
  title.textContent = film.title

  let img = document.createElement('img')
  img.src = `http://image.tmdb.org/t/p/w185/${film.image}`
  img.setAttribute('class', 'movieimage')
  img.style.width = '100%'

  filmDiv.append(img, title)
  collectionDiv.append(filmDiv)
  root.append(collectionDiv)
}

// function to remove already displayed divs by genre
let removeCurrentMoviesOnPage = function(){
  let allCurrentMovies = document.querySelectorAll('.row')
  allCurrentMovies.forEach(movie=>{
    movie.remove()
  })
}

// create dropdown items to sort movies by genre
fetch('http://localhost:3000/genres')
.then(resp=>resp.json())
.then(obj=>{
  obj.forEach(genre=>{

    let genreDiv = document.querySelector('.dropdown-menu')
    let aTag = document.createElement('a')
    aTag.setAttribute('class', 'dropdown-item')
    aTag.textContent = genre.name
    genreDiv.append(aTag)

    aTag.addEventListener('click', ()=>{
      if(aTag.innerText == "All Movies"){
        console.log('To be discussed')
      }
      else{
        removeCurrentMoviesOnPage()
        genre.movies.forEach(movie=>{
          movieCollection.remove()
          createMovieCollection(movie)
        })
      }
    })
  })
})
