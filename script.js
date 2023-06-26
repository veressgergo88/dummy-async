let load = async () => {
/* let response = await fetch("https://rickandmortyapi.com/api/character")
let data = await response.json() */

let response = await axios.get("https://rickandmortyapi.com/api/character")

/*
let index = 0
while (data.results[index] !== undefined){
    content += "<p>" + data.results[index].name + "</p>"
    index++
}
*/

/*
for (let index = 0; index < data.results.length; index++) {
    content += "<p>" + data.results[index].name + "</p>"
}
*/

/*
for (let character of data.results){
    content += "<p>" + character.name + "</p>"
}
*/

let content = response.data.results
.map(character => "<p>" + character.name + "</p>")
.join("")

document.getElementById("app").innerHTML = content
}

load()