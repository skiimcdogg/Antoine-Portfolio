let inputSwitch = document.querySelector(".switch_3");
let navBaar = document.querySelector(".navbar")
let switchBox = document.querySelector(".box_3")
let allPage = document.querySelector(".body")
let mail = document.querySelector(".mail-img")
let copied = document.querySelector(".copied")
let span1 = document.querySelector(".rainbow")
let span2 = document.querySelector(".rainbow2")
let span3 = document.querySelector(".rainbow3")
let span4 = document.querySelector(".rainbow4")
let span5 = document.querySelector(".rainbow5")

console.log(span1);

function addBlackClass(input) {
    input.classList.toggle("dark-mode")
}

function addBlueClass(input) {
    input.classList.toggle("blue-mode")
}

function addRainbowClass(input) {
    input.classList.toggle("rainbow-text")
}

inputSwitch.addEventListener("click", () => {
        addBlackClass(navBaar)
        addBlackClass(switchBox)
        addBlueClass(allPage)
        addRainbowClass(span1)
        addRainbowClass(span2)
        addRainbowClass(span3)
        addRainbowClass(span4)
        addRainbowClass(span5)
})

mail.addEventListener("click", () => {
    navigator.clipboard.writeText("antoine.stouff78500@gmail.com")
    copied.classList.add("display")
})

