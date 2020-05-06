// let homeDiv = document.createElement('div')
// document.body.append(homeDiv)
let rootDiv = document.querySelector('#root')

let homepage = function(){
    let heroDiv = document.createElement('div')
        rootDiv.append(heroDiv)
        heroDiv.setAttribute('class','hero')
        let h2 = document.createElement('h2')
        h2.innerText="Welcome to Cinemass"
        h2.setAttribute("style", "font-family: fantasy;")
        h2.setAttribute("style", "color: white;")
        heroDiv.append(h2)   
    }




    homepage()