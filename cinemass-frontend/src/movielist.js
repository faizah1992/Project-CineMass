let movieBtn = document.querySelector('#moviebtn')


movieBtn.addEventListener('click',function(){
    let hero = document.querySelector('.hero')
    hero.classList.add("hide")

    let movie = document.querySelector('.movie')
    movie.classList.remove("hide")

    let movieUl = document.createElement('ul')
    movie.append(movieUl)

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
          })
        })
    }
    listMovies()
})

let homeBtn = document.querySelector('#homebtn')
homeBtn.addEventListener('click',function(){
    let movie = document.querySelector('.movie')
    movie.classList.add("hide")
    let hero = document.querySelector('.hero')
    hero.classList.remove("hide")
})
