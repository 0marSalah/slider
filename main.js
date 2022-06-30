// get all the elements
let imgCon = document.querySelector(".img-container")
let imgs = document.querySelectorAll("img")
let arrOfImg = document.querySelectorAll("img")
let nums = document.getElementById("ind")
let prev = document.querySelector(".prev")
let nxt = document.querySelector(".next")
let counter = document.getElementById("counter")

imgs[0].classList.add("active")

// make the Ul and Number of images
let ul = document.createElement("ul")
nums.appendChild(ul)
for (let i = 1;i<=arrOfImg.length;i++) {
  let li = document.createElement("li")
  li.id= i
  let liTxt = document.createTextNode(i)
  li.appendChild(liTxt)
  ul.appendChild(li)
}
// Add class active to the clicked li
let arrOfLi = document.querySelectorAll("li")
arrOfLi.forEach(e => {
  e.addEventListener("click", () => {
    for(let i=0; i<arrOfLi.length;i++) {

      arrOfLi[i].classList.remove("active")
    }
    e.classList.add("active")
  })
})
arrOfLi[0].className = "active"
// Slide Image
for (let i=0; i<imgs.length; i++) {
  imgs[i].id = `img${i+1}`
}
arrOfLi.forEach(li => {
  li.addEventListener("click", () => {
    for (let i=0; i<imgs.length; i++) {
      imgs[i].classList.remove("active")
    }
    let img = document.getElementById(`img${li.id}`)
    img.className = "active"
  })
})

// Next Button
// nxt.addEventListener("click", () => {
//   let img = document.querySelector("img.active")
//   let nextImg = document.getElementById("img" + `${(parseInt((img.id.match(/\d+/).join("")))+1)}`)
//   img.classList.remove("active")
//   nextImg.classList.add("active")
//   console.log(nextImg)
// })
nxt.addEventListener("click", () => {
  let liActv = document.querySelector("li.active")
  if(liActv.id != arrOfLi.length) {
  let img = document.querySelector("img.active")
  let nextImg = document.getElementById("img" + `${(parseInt((img.id.match(/\d+/).join("")))+1)}`)
  img.classList.remove("active")
  nextImg.classList.add("active")
  let nxtLi = document.getElementById(parseInt(liActv.id )+ 1)
  for(let i=0; i<arrOfLi.length;i++) {
    arrOfLi[i].classList.remove("active")
  }
  nxtLi.className = "active"
}
})

// add slide number to counter
arrOfLi.forEach(e => {
  e.addEventListener("click", () => {
    let liActv = document.querySelector("li.active")
    counter.textContent = `slide: ${liActv.id}`
  })
})
nxt.addEventListener("click", () => {
  let liActv = document.querySelector("li.active")
  counter.textContent = `slide: ${liActv.id}`
})

// prev Button
prev.addEventListener("click", () => {
  let liActv = document.querySelector("li.active")
  if(liActv.id != 1) {
    let img = document.querySelector("img.active")
  let nextImg = document.getElementById("img" + `${(parseInt((img.id.match(/\d+/).join("")))-1)}`)
  img.classList.remove("active")
  nextImg.classList.add("active")
  let preLi = document.getElementById(parseInt(liActv.id ) - 1)
  liActv.classList.remove("active")
  preLi.classList.add("active")
}
})
// add slide number to counter
prev.addEventListener("click", () => {
  let liActv = document.querySelector("li.active")
  counter.textContent = `slide: ${liActv.id}`
})



