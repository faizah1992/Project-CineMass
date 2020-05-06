let picDiv = document.querySelector("#collection")

//list of movies 
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
    console.log(movie)
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
      
      let addCommentBtn= document.createElement('button')
      addCommentBtn.innerText= "Add Comment"
      let imgTag = document.createElement('img')
      imgTag.style.marginLeft='50%'
      imgTag.style.transform='translateX(-50%)'
      let pTag = document.createElement('p')
      let rating = document.createElement('p')
      let runtime = document.createElement('p')
      let release_date = document.createElement('p')
      let backBtn = document.createElement('button')
        let like = document.createElement('p')
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
          console.log(movie.likes)
          like.innerText = `likes: ${movie.likes}`
      })

      //unlike
      let unlikeBtn = document.createElement('button')
      unlikeBtn.innerText = "Unlike"
      unlikeBtn.addEventListener('click',function(){
          movie.likes -= 1
          console.log(movie.likes)
          like.innerText = `likes: ${movie.likes}`
      })

    

      divTag.append(likeBtn,unlikeBtn,backBtn)


    })



})


})
  
}
 







