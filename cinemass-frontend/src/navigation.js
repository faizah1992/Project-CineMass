let navList = document.querySelectorAll("li")

navList[1].addEventListener('click', function(){
    rootDiv.innerText = ""
      listMovies()
  })

navList[0].addEventListener('click', function(){
    rootDiv.innerText=""
    homepage()
   
})

navList[5].addEventListener('click', function(){
    rootDiv.innerText=""
    signUp()
})

