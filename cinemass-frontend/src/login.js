$(document).ready(function(){
  // hide some nav items before user logs in
  $(".hideMenu").hide();
});

loginForm.addEventListener('submit', ()=>{
    // show hidden nav items after user logs in
    $(".hideMenu").show();

    // hide login and sign up from navbar after user logs in
    $(".hideLogin").hide();

    // hide modal after user is logged in
    // $('#myModal').modal('hide')

})
