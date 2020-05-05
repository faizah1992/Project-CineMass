let movieDiv = document.createElement('div')
document.body.append(movieDiv)
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
      movieDiv.remove()
      let divTag = document.createElement('div')
      divTag.setAttribute('id', 'show-panel')
      document.body.append(divTag)
      let addCommentBtn= document.createElement('button')
      addCommentBtn.innerText= "Add Comment"
    //   addCommentBtn.addEventListener('click', addComment(movie))
      let imgTag = document.createElement('img')
      let pTag = document.createElement('p')
      let rating = document.createElement('p')
      let runtime = document.createElement('p')
      let release_date = document.createElement('p')
      let backBtn = document.createElement('button')

      imgTag.src = `http://image.tmdb.org/t/p/w185/${movie.image}`
      pTag.innerText = movie.details
  

      rating.innerText = `Rating: ${movie.rating}`
      runtime.innerText = `Runtime: ${movie.runtime} mins`
      release_date.innerText = `Release Date: ${movie.released_date}`
      backBtn.innerText = '<-- Back to All Movies'
      document.body.append(divTag)
      divTag.append(imgTag, pTag, rating, runtime, release_date,addCommentBtn)

      backBtn.addEventListener('click', function(){

    })

    divTag.append(backBtn)
    })

 

    
    })
  })



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

