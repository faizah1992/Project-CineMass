 // function to create HTML tags
let createElement = function(htmlTag){
  let tag = document.createElement(htmlTag)
  return tag
}

// function to append child to parent
let appendTag = function(parent, ...childArr){
  childArr.forEach(child => {
    parent.append(child)
  })
}

// function to setAttributes to HTML tag
let setAttribute = function(tag, attr, value){
  tag.setAttribute(attr, value)
}

// function to create tags for user details
let createUserProfile = function(userObject){
  navList[2].addEventListener('click', function(){
    rootDiv.innerText=""
    let profileDiv = createElement('div')
    setAttribute(profileDiv, 'id', 'user_profile')
    setAttribute(profileDiv, 'class', 'container')
    appendTag(rootDiv,profileDiv)

    let rowDiv = createElement('div')
    setAttribute(rowDiv, 'class', 'row')

    let colDiv = createElement('div')
    setAttribute(colDiv, 'class', 'col-lg-3 col-sm-6')

    let hoverDiv = createElement('div')
    setAttribute(hoverDiv, 'class', 'photoCard hovercard')

    let headerDiv = createElement('div')
    setAttribute(headerDiv, 'class', 'cardheader')

    let imgDiv = createElement('div')
    setAttribute(imgDiv, 'class', 'avatar')
    let userAvatar = createElement('img')
    userAvatar.src = userObject.image
    appendTag(imgDiv, userAvatar)

    let infoDiv = createElement('div')
    setAttribute(infoDiv, 'class', 'info')

    let nameDiv = createElement('div')
    setAttribute(nameDiv, 'class', 'desc')
    nameDiv.innerText = userObject.username
    nameDiv.style.fontWeight = 'bold'
    let locationDiv = createElement('div')
    setAttribute(locationDiv, 'class', 'desc')
    locationDiv.innerText = `Location: ${userObject.location}`
    let bioDiv = createElement('div')
    setAttribute(bioDiv, 'class', 'desc')
    bioDiv.innerText = `Bio: ${userObject.bio}`
    appendTag(infoDiv, nameDiv, locationDiv, bioDiv)

    appendTag(hoverDiv, headerDiv, imgDiv, infoDiv)
    appendTag(colDiv, hoverDiv)
    appendTag(rowDiv, colDiv)
    appendTag(profileDiv, rowDiv)

  })
}
