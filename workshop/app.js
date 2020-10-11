import dogs from "./dogs.js"
import create from "./create-element.js"

const header = create("h1", {}, "All the dogs")

//Map each array object into a node item (li item)
const dogList = dogs.map((dog)=>{
    const h2 = create("h2", {}, dog.name)
    const img = create("img", {src:dog.image, alt:" "})
    return create("li", {className: "card"}, h2, img)
})

const ul = create("ul", {}, ...dogList)

const app = document.getElementById("app")

app.append(header, ul)
