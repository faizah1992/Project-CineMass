let movieDiv = document.createElement('div')
document.body.append(movieDiv)
let movieUl = document.createElement('ul')
movieDiv.append(movieUl)
let navList = document.querySelectorAll("li")

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
    //   movieDiv.remove()
    while(movieDiv.firstChild){
        movieDiv.removeChild(movieDiv.lastChild)
    }
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
        let like = document.createElement('p')

      imgTag.src = `http://image.tmdb.org/t/p/w185/${movie.image}`
      pTag.innerText = movie.details
<<<<<<< HEAD:cinemass-frontend/src/index.js
  
=======
      divTag.append(pTag)
>>>>>>> 101e67456cffac20c947fab0215ae540133cbdef:cinemass-frontend/src/movies.js

      rating.innerText = `Rating: ${movie.rating}`
      runtime.innerText = `Runtime: ${movie.runtime} mins`
      release_date.innerText = `Release Date: ${movie.released_date}`
      like.innerText = `likes: ${movie.likes}`
      backBtn.innerText = '<-- Back to All Movies'
      document.body.append(divTag)
<<<<<<< HEAD:cinemass-frontend/src/index.js
      divTag.append(imgTag, pTag, rating, runtime, release_date,addCommentBtn)
=======
      divTag.append(imgTag, pTag, rating, runtime, release_date,like)
    
      backBtn.addEventListener('click', function(){
        divTag.remove()
        listMovies()

>>>>>>> 101e67456cffac20c947fab0215ae540133cbdef:cinemass-frontend/src/movies.js

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
          

<<<<<<< HEAD:cinemass-frontend/src/index.js
    })

    divTag.append(backBtn)
    })

 

    
=======
      
      })
    
      divTag.append(likeBtn,backBtn)
      

>>>>>>> 101e67456cffac20c947fab0215ae540133cbdef:cinemass-frontend/src/movies.js
    })

<<<<<<< HEAD:cinemass-frontend/src/index.js


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
=======
    
    
})

      
})

} 
navList[1].addEventListener('click', function(){
    listMovies()
})

>>>>>>> 101e67456cffac20c947fab0215ae540133cbdef:cinemass-frontend/src/movies.js

