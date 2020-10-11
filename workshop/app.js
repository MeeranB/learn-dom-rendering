import dogs from "./dogs.js"

const header = document.createElement("h1");
header.innerText = "All the dogs"

const ul = document.createElement("ul")

//Map each array object into a node item (li item)
const dogList = dogs.map((dog)=>{
    const li = document.createElement("li")
    li.classList.add("card")

    const h2 = document.createElement("h2")
    h2.innerText = dog.name

    const img = document.createElement("img")
    img.setAttribute("src", dog.image)
    img.setAttribute("alt", " ")

    li.append(h2, img)

    return li
})

ul.append(...dogList)

const app = document.getElementById("app")

app.append(header, ul)

