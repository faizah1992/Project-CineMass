let picDiv = document.querySelector("#collection")


// add comments to a movie
let addComment = function(div, film){
  let addCommentBtn = document.createElement('button')
  addCommentBtn.innerText = 'Add Comment'

  let deleteCommentBtn= document.createElement('button')
  deleteCommentBtn.innerHTML="Delete Comment"
  let commentDiv = document.querySelector('#comment-section')

  div.append(addCommentBtn, deleteCommentBtn)


  addCommentBtn.addEventListener('click', function(){
    let commentForm= document.createElement('form')
    document.body.append(commentForm)
    let inputLabel= document.createElement('label')
    inputLabel.innerText= 'Write your comment here!'
    let commentInput = document.createElement('input')
    let submitCommentBtn = document.createElement('input')
    submitCommentBtn.type = "submit"
    commentForm.append(inputLabel, commentInput, submitCommentBtn)


    commentForm.addEventListener('submit', function(e){

      e.preventDefault()
      let newCommentTag = document.createElement('p')
      newCommentTag.innerText = commentForm[0].value
      commentDiv.append(newCommentTag)


      fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify
        ({
          movie_id: film.id,
          likes: 0,
          comment: commentForm[0].value,
          user_id: 20

        })
      })
    })
  })
}


let listMovies = function(){
  let movieDiv = document.createElement('div')
  rootDiv.append(movieDiv)
  rootDiv.append(picDiv)
fetch('http://localhost:3000/movies')
.then(function(response){
    return response.json()
})
.then(function(obj){
  obj.forEach(movie =>{
    let cardDiv = document.createElement('div')
    cardDiv.setAttribute('class','card col-sm-2');
    picDiv.setAttribute('class', 'row')
    let movName = document.createElement('h5')
      movName.innerText = movie.title

    let movImg = document.createElement('img')
      movImg.src = `http://image.tmdb.org/t/p/w185/${movie.image}`
      movImg.setAttribute('class','movieimage')
      movImg.style.width = "100%"

      cardDiv.append(movName,movImg)
      picDiv.append(cardDiv)

    //click on the card to go to showpage
    cardDiv.addEventListener('click', function(){
      rootDiv.innerText=""
      let divTag = document.createElement('div')
      divTag.setAttribute('id', 'show-panel')


      let imgTag = document.createElement('img')
      imgTag.style.marginLeft='50%'
      imgTag.style.transform='translateX(-50%)'
      let pTag = document.createElement('p')
      let rating = document.createElement('p')
      let runtime = document.createElement('p')
      let release_date = document.createElement('p')
      let backBtn = document.createElement('button')

      let like = document.createElement('p')
      let commentSection= document.createElement('div')
      commentSection.setAttribute("id","comment-section")


        let unlike = document.createElement('p')

      imgTag.src = `http://image.tmdb.org/t/p/w185/${movie.image}`
      pTag.innerText = movie.details
      rootDiv.append(imgTag)
      rootDiv.append(divTag)
      divTag.append(pTag)

      rating.innerText = `Rating: ${movie.rating}`
      runtime.innerText = `Runtime: ${movie.runtime} mins`
      release_date.innerText = `Release Date: ${movie.released_date}`
      like.innerText = `likes: ${movie.likes}`
      backBtn.innerText = '<-- Back to All Movies'

      commentSection.innerText= "Comment Section"

      rootDiv.append(divTag)
      divTag.append(imgTag, pTag, rating, runtime, release_date,like, commentSection)

      // invoke addComment Functiono update comment section
      addComment(divTag, movie)

      backBtn.addEventListener('click', function(){
        divTag.remove()

        listMovies()
      })

      // get all comments and create p tags to render
      movie.comments.forEach(function(comment){
        let commentP= document.createElement('p')
        commentP.innerText= comment.comment
        commentSection.append(commentP)
       })


      divTag.append(pTag, rating, runtime, release_date,like)

      backBtn.addEventListener('click', function(){
        rootDiv.innerText=''
        listMovies()
      })

      //like
      let likeBtn = document.createElement('button')
      likeBtn.innerText = "Like"
      likeBtn.addEventListener('click',function(){
          movie.likes += 1
          like.innerText = `likes: ${movie.likes}`
      })

      //unlike
      let unlikeBtn = document.createElement('button')
      unlikeBtn.innerText = "Unlike"
      unlikeBtn.addEventListener('click',function(){
          movie.likes -= 1
          like.innerText = `likes: ${movie.likes}`
      })
      divTag.append(likeBtn,unlikeBtn,backBtn)

    })

})


})

}
