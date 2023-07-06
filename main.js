let randCharSet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789"

let shortURLInput = document.getElementById("shortURLInput")
let longURLInput = document.getElementById("longURLInput")
let tangButton = document.getElementById("tangButton")
let finalURL = document.getElementById("finalURL")

let changeNameLater = true

function longURLInputChange(){

    if(changeNameLater){
        shortURLInput.style.display = "block"
        tangButton.style.display = "block"
        finalURL.style.display = "block"

        shortURLInput.value = randString(5, randCharSet)
        finalURL.innerText = "tanglink.onrender.com/" + shortURLInput.value
    }
}

function shortURLInputChange(){
    if(changeNameLater){
        finalURL.innerText = "tanglink.onrender.com/" + shortURLInput.value
    }
}


function tangLink(){

    if(changeNameLater){
        let fetchURL = 'https://tanglink.onrender.com/create?shortURL=' + shortURLInput.value + "&longURL=" + longURLInput.value

    fetch(fetchURL, {
        method: 'POST'
    })
    .then((response) => apiResponse(response))
    }
}


function apiResponse(response){
    console.log(response)
    if(response.status == 201){
        document.getElementById('response').innerText = 'Link tangled with sucess!'
        changeNameLater = false

        document.getElementById('finalURL').addEventListener('click', (e) => {
            //FIX THIS LATER
            //window.location.href = 'https://' + document.getElementById('finalURL').value
        })
    }else{
        document.getElementById('response').innerText = 'Link failed to be tangled, please try again!'
    }
}


function randString(length, set) {

    let output = ''

    const setLength = set.length

    for(let i = 0; i < length; i++){
        output += set.charAt(Math.floor(Math.random()*setLength))
    }

    return output
}
