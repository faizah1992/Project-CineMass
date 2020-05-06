
    let signUp = function(){
        let divTag = document.createElement('div')
        rootDiv.append(divTag)
        let userForm = document.createElement('form')
        divTag.append(userForm)
    //labels:
        let nameLabel = document.createElement('label')
        nameLabel.innerText = "Enter your Name:"
        let bioLabel = document.createElement('label')
        bioLabel.innerText = "Enter a bio:"
        let locationLabel = document.createElement('label')
        locationLabel.innerText = "Enter your location:"
        let passwordLabel = document.createElement('label')
        passwordLabel.innerText = "Enter your a password:"

    //inputs:
        let nameInput = document.createElement('input')
        let bioInput = document.createElement('input')
        let locationInput = document.createElement('input')
        let passwordInput = document.createElement('input')
        let subBtn = document.createElement('input')
        subBtn.type = "submit"
        userForm.append(nameLabel,nameInput,bioLabel,bioInput,locationLabel,locationInput,passwordLabel,passwordInput,subBtn)
        userForm.addEventListener('submit', function(e){
            e.preventDefault()
            
            fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: userForm[0].value,
                bio: userForm[1].value,
                location: userForm[2].value,
                password: userForm[3].value
            })
            })
            .then(function(response){
                return response.json()
            })
            .then(function(obj){
                while(userForm.firstChild){
                    userForm.removeChild(userForm.lastChild)
                }
            })
        })
    }
        

    


   

 
 
   



