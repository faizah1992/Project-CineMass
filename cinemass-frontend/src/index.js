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
      let divTag = document.createElement('div')
      divTag.setAttribute('id', 'show-panel')
      document.body.append(divTag)
      let addCommentBtn= document.createElement('button')
      addCommentBtn.innerText= "Add Comment"
      addCommentBtn.addEventListener('click', addComment(movie))
      let pTag = document.createElement('p')
      pTag.innerText = movie.details
      divTag.append(pTag, addCommentBtn)
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

