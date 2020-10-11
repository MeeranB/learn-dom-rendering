import dogs from "./dogs.js"

const dogList = dogs.map((dog)=> {
    const dogTemplate = document.getElementById("dogItem")
    const dogItem = dogTemplate.content.cloneNode(true)
    const dogHeader = dogItem.querySelector("h2")
    dogHeader.textContent = dog.name
    const dogImg = dogItem.querySelector("img")
    dogImg.src = dog.image
    return dogItem
})

const emptyDogList = document.getElementById("dogList")
emptyDogList.append(...dogList)