navList[7].setAttribute('data-toggle', 'modal')
navList[7].setAttribute('data-target', '#myModal')

let loginForm = document.createElement('form')
navList[7].addEventListener('click', ()=>{
  let modalDiv = document.createElement('div')
  modalDiv.setAttribute('id', 'myModal')
  modalDiv.setAttribute('class', 'modal fade in')
  // modal.style.display = 'block'
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
  header.textContent = 'Member Login'
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

  let usernameInput = document.createElement('div')
  usernameInput.setAttribute('class', 'form-group')
  loginForm.append(usernameInput)
  let userLogo = document.createElement('i')
  userLogo.setAttribute('class', 'fa fa-user')
  // userLogo.insertBefore()
  usernameInput.append(userLogo)
  let username = document.createElement('input')
  username.type = 'text'
  username.placeholder = 'Username'
  username.setAttribute('class', 'form-control')
  username.setAttribute('required', 'required')
  usernameInput.append(username)

  let passwordInput = document.createElement('div')
  passwordInput.setAttribute('class', 'form-group')
  loginForm.append(passwordInput)
  let lockLogo = document.createElement('i')
  lockLogo.setAttribute('class', 'fa fa-lock')
  passwordInput.append(lockLogo)
  let password = document.createElement('input')
  password.type = 'password'
  password.placeholder = 'Password'
  password.setAttribute('class', 'form-control')
  password.setAttribute('required', 'required')
  passwordInput.append(password)

  let submitBtnDiv = document.createElement('div')
  submitBtnDiv.setAttribute('class', 'form-group')
  loginForm.append(submitBtnDiv)
  let submitInput = document.createElement('input')
  submitInput.type = 'submit'
  submitInput.value = 'Login'
  submitInput.setAttribute('class', 'btn btn-primary btn-block btn-lg')
  submitBtnDiv.append(submitInput)

  let footerDiv = document.createElement('div')
  footerDiv.setAttribute('class', 'modal-footer')
  c2Div.append(footerDiv)
  let resetPassword = document.createElement('a')
  resetPassword.textContent = 'Forgot Password?'
  footerDiv.append(resetPassword)

})
