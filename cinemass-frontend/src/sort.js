// console.log(movies)

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
      if(aTag.innerText != "All Movies"){
        genre.movies.forEach(movie=>{
          console.log(movie.title)
        })
      }


    })
  })
})
