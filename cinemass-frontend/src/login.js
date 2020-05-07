// function to grab user object after login
let userDetails = function(object){
  let userObj = {}
  userObj = object
  return userObj
}

// function to create html tags for user profile
let userProfile = function(userObject){
  navList[2].addEventListener('click', function(){
    let profileDiv = document.createElement('div')
    profileDiv.setAttribute('id', 'user_profile')
    rootDiv.append(profileDiv)
    rootDiv.innerText=""

    let bio = document.createElement('p')
    let location = document.createElement('p')
    let name = document.createElement('p')
    let userAvatar = document.createElement('img')
    userAvatar.src = userObject.image
    name.innerText = userObject.username
    bio.innerText = userObject.bio
    location.innerText = userObject.location
    rootDiv.append(userAvatar, name, bio, location)

  })
}

$(document).ready(function(){
  // hide some nav items before user logs in
  $(".hideMenu").hide();
});

loginForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  let userName = loginForm[0].value
  let password = loginForm[1].value

  // check user details on login and make them accessible globally
  fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: userName,
      password: password
    })
  })
  .then(resp=>resp.json())
  .then(obj=>{
    if (obj.error){
      loginForm.append(obj.message)
    }else {
      // invoke userDetails() and userProfile
      let user = userDetails(obj)
      userProfile(user)

      // show hidden nav items after user logs in
      $(".hideMenu").show();

      // hide login and sign up from navbar after user logs in
      $(".hideLogin").hide();

      // hide modal after user is logged in
      // $('#myModal').modal('hide')
    }
  })
})
