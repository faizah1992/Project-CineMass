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
    })

})


fetch(`http://localhost:3000/movies/${movie.id}`)
    .then(function(r){
        return r.json()
    })
    .then(function(movie){
     let commentsUl= document.createElement('ul')
     commentsUl.innerText=''
     image.comments.forEach(function(comments){
        console.log(comments)
        let commentsLi= document.createElement('li')
        commentsLi.innerText= movie.comments
        commentsUl.append(commentsLi)
       
    })
    })