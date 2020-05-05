let movieDiv = document.createElement('div')
document.body.append(movieDiv)
let movieUl = document.createElement('ul')
movieDiv.append(movieUl)

let listMovies = function(){
fetch('http://localhost:3000/movies')
.then(function(response){
    return response.json()
})
.then(function(obj){
  obj.forEach(movie =>{
    let movieLi = document.createElement('li')
    movieUl.append(movieLi)
    movieLi.append(movie.title)


    movieLi.addEventListener('click', function(){
      movieDiv.remove()
      let divTag = document.createElement('div')
      let imgTag = document.createElement('img')
      let pTag = document.createElement('p')
      let rating = document.createElement('p')
      let runtime = document.createElement('p')
      let release_date = document.createElement('p')
      let backBtn = document.createElement('button')
        let like = document.createElement('p')

      imgTag.src = `http://image.tmdb.org/t/p/w185/${movie.image}`
      pTag.innerText = movie.details
      divTag.append(pTag)

      rating.innerText = `Rating: ${movie.rating}`
      runtime.innerText = `Runtime: ${movie.runtime} mins`
      release_date.innerText = `Release Date: ${movie.released_date}`
      like.innerText = `likes: ${movie.likes}`
      backBtn.innerText = '<-- Back to All Movies'
      document.body.append(divTag)
      divTag.append(imgTag, pTag, rating, runtime, release_date,like)
    
      backBtn.addEventListener('click', function(){
        divTag.remove()
        listMovies()


      })
      let likeBtn = document.createElement('button')
      likeBtn.innerText = "Like"
      likeBtn.addEventListener('click',function(){ 
          movie.likes += 1
          console.log(movie.likes)
          like.remove()
          let newlike = document.createElement('p')
          newlike.innerText = `likes: ${movie.likes}`
          divTag.append(newlike)
          

      
      })
    
      divTag.append(likeBtn,backBtn)
      

    })

    
    
})

      
})

} 
listMovies()

