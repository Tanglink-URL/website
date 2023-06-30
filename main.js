let randCharSet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789"






function longURLInputChange(){
    console.log("Hello!")

    let shortURLInput = document.getElementById("shortURLInput")
    let tangButton = document.getElementById("tangButton")

    shortURLInput.style.display = "block"
    tangButton.style.display = "block"

    shortURLInput.value = randString(5, randCharSet)
}





function randString(length, set) {

    let output = ''

    const setLength = set.length

    for(let i = 0; i < length; i++){
        output += set.charAt(Math.floor(Math.random()*setLength))
    }

    return output
}
