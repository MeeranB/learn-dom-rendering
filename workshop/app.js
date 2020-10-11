import dogs from "./dogs.js"
import create from "./create-element.js"

const dogList = dogs.map((dog)=>{
    return `<li class="card">
    <h2>${dog.name}</h2>
    <img src=${dog.image} alt=" "
    </li>`
})

const app = document.getElementById("app")

app.innerHTML = `<h1>All the dogs</h1>
<ul>${dogList.join(`\n`)}</ul>
`
