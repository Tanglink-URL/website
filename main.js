let randCharSet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789"

let shortURLInput = document.getElementById("shortURLInput")
let longURLInput = document.getElementById("longURLInput")
let tangButton = document.getElementById("tangButton")
let finalURL = document.getElementById("finalURL")



function longURLInputChange(){

    shortURLInput.style.display = "block"
    tangButton.style.display = "block"
    finalURL.style.display = "block"

    shortURLInput.value = randString(5, randCharSet)
    finalURL.innerText = "tanglink.onrender.com/" + shortURLInput.value
}

function shortURLInputChange(){
    finalURL.innerText = "tanglink.onrender.com/" + shortURLInput.value
}


function tangLink(){

    let fetchURL = 'https://tanglink.onrender.com/create?shortURL=' + shortURLInput.value + "&longURL=" + longURLInput

    fetch(fetchURL, {
        method: 'POST'
    })
    .then((response) => console.log(response))
}





function randString(length, set) {

    let output = ''

    const setLength = set.length

    for(let i = 0; i < length; i++){
        output += set.charAt(Math.floor(Math.random()*setLength))
    }

    return output
}
