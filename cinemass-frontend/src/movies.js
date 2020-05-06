

let listMovies = function(){
  let movieDiv = document.createElement('div')
  rootDiv.append(movieDiv)
  
  let movieUl = document.createElement('ul')
  movieDiv.append(movieUl)
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
    while(movieDiv.firstChild){
        movieDiv.removeChild(movieDiv.lastChild)
    }
      let divTag = document.createElement('div')
      divTag.setAttribute('id', 'show-panel')
      rootDiv.append(divTag)
      let addCommentBtn= document.createElement('button')
      addCommentBtn.innerText= "Add Comment"
    //   addCommentBtn.addEventListener('click', addComment(movie))
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
          like.innerText = `likes: ${movie.likes}`
      })

      divTag.append(likeBtn,backBtn)


    })



})


})
  
}
 







// let addComment= function(movie){
//     fetch(`http://localhost:3000/comments`)
//     .then(function(r){
//         return r.json()
//     })
// }

// fetch(`http://localhost:3000/movies`)
//     .then(function(r){
//         return r.json()
//     })
//     .then(function(movie){
//      let commentsUl= document.createElement('ul')
//      commentsUl.innerText=''
//      movie.comments.forEach(function(comments){
//         console.log(comments)
//         let commentsLi= document.createElement('li')
//         commentsLi.innerText= movie.comments
//         commentsUl.append(commentsLi)
       
//     })
//     })
