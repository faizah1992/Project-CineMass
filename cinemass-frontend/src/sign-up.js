
    let signUp = function(){

        let divTag = document.createElement('div')
        rootDiv.append(divTag)
        let userForm = document.createElement('form')
        divTag.append(userForm)
       
    //inputs:
        let nameDiv = document.createElement('div')
        nameDiv.setAttribute('class',"form-group")
        let nameLabel = document.createElement('label')
        nameDiv.append(nameLabel)
        nameLabel.innerText = "Enter your Name:"
        let nameInput = document.createElement('input')
        nameLabel.append(nameInput)
        nameInput.setAttribute('class','form-control')

        let bioDiv = document.createElement('div')
        bioDiv.setAttribute('class',"form-group")
        let bioLabel = document.createElement('label')
        bioLabel.innerText = "Enter a bio:"
        bioDiv.append(bioLabel)
        let bioInput = document.createElement('input')
        bioLabel.append(bioInput)
        bioInput.setAttribute('class','form-control')

        let locationDiv = document.createElement('div')
        locationDiv.setAttribute('class',"form-group")
        let locationLabel = document.createElement('label')
        locationDiv.append(locationLabel)
        locationLabel.innerText = "Enter your location:"
        let locationInput = document.createElement('input')
        locationLabel.append(locationInput)
        locationInput.setAttribute('class','form-control')
        

        let passwordDiv = document.createElement('div')
        passwordDiv.setAttribute('class',"form-group")
        let passwordLabel = document.createElement('label')
        passwordDiv.append(passwordLabel)
        passwordLabel.innerText = "Enter your a password:"
        let passwordInput = document.createElement('input')
        passwordLabel.append(passwordInput)
        passwordInput.setAttribute('class','form-control')

        let imgDiv = document.createElement('div')
        imgDiv.setAttribute('class',"form-group")
        let imgLabel = document.createElement('label')
        imgDiv.append(imgLabel)
        imgLabel.innerText = "Put a picture URL:"
        let imgInput = document.createElement('input')
        imgLabel.append(imgInput)
        imgInput.setAttribute('class','form-control')


        let subBtn = document.createElement('input')
        // subBtn.setAttribute('class','btn btn-primary')
        subBtn.innerText = 'Submit'
        subBtn.type = "submit"
        
        userForm.append(nameDiv,bioDiv,locationDiv,passwordDiv,imgDiv,subBtn)
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
                password: userForm[3].value,
                image: userForm[4].value
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
        

    


   

 
 
   



