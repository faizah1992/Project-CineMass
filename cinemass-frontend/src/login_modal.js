// set modal attributes on Login to display modal
navList[6].setAttribute('data-toggle', 'modal')
navList[6].setAttribute('data-target', '#myModal')

// create form element for user login details
let loginForm = document.createElement('form')

// add event listener to login in navbar to create modal when clicked
navList[6].addEventListener('click', ()=>{
  
  let modalDiv = document.createElement('div')
  modalDiv.setAttribute('id', 'myModal')
  modalDiv.setAttribute('class', 'modal fade in')
  document.body.append(modalDiv)

  let c1Div = document.createElement('div')
  c1Div.setAttribute('class', 'modal-dialog modal-login')
  modalDiv.append(c1Div)

  let c2Div = document.createElement('div')
  c2Div.setAttribute('class', 'modal-content')
  c1Div.append(c2Div)

  let c3Div = document.createElement('div')
  c3Div.setAttribute('class', 'modal-header')
  c2Div.append(c3Div)

  let header = document.createElement('h4')
  header.setAttribute('class', 'modal-title')
  header.textContent = 'Login to Your Account'
  c3Div.append(header)

  let closeModal = document.createElement('button')
  closeModal.type = 'button'
  closeModal.setAttribute('class', 'close')
  closeModal.setAttribute('data-dismiss', 'modal')
  closeModal.ariaHidden = 'true'
  closeModal.textContent = 'x'
  c3Div.append(closeModal)

  let modalBodyDiv = document.createElement('div')
  modalBodyDiv.setAttribute('class', 'modal-body')
  c2Div.append(modalBodyDiv)

  modalBodyDiv.append(loginForm)

  let usernameDiv = document.createElement('div')
  usernameDiv.setAttribute('class', 'form-group')
  loginForm.append(usernameDiv)
  let userLogo = document.createElement('i')
  userLogo.setAttribute('class', 'fa fa-user')
  usernameDiv.append(userLogo)
  let usernameInput = document.createElement('input')
  usernameInput.type = 'text'
  usernameInput.placeholder = 'Username'
  usernameInput.setAttribute('class', 'form-control')
  usernameInput.setAttribute('required', 'required')
  usernameDiv.append(usernameInput)

  let passwordDiv = document.createElement('div')
  passwordDiv.setAttribute('class', 'form-group')
  loginForm.append(passwordDiv)
  let lockLogo = document.createElement('i')
  lockLogo.setAttribute('class', 'fa fa-lock')
  passwordDiv.append(lockLogo)
  let passwordInput = document.createElement('input')
  passwordInput.type = 'password'
  passwordInput.placeholder = 'Password'
  passwordInput.setAttribute('class', 'form-control')
  passwordInput.setAttribute('required', 'required')
  passwordDiv.append(passwordInput)

  let submitBtnDiv = document.createElement('div')
  submitBtnDiv.setAttribute('class', 'form-group')
  loginForm.append(submitBtnDiv)
  let submitInput = document.createElement('input')
  submitInput.type = 'submit'
  submitInput.value = 'Login'
  submitInput.setAttribute('class', 'btn btn-primary btn-block btn-lg show')
  submitBtnDiv.append(submitInput)

  let footerDiv = document.createElement('div')
  footerDiv.setAttribute('class', 'modal-footer')
  c2Div.append(footerDiv)
  let resetPassword = document.createElement('a')
  resetPassword.textContent = 'Forgot Password?'
  footerDiv.append(resetPassword)

})
