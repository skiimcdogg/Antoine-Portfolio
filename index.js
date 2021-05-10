let inputSwitch = document.querySelector(".switch_3");
let navBaar = document.querySelector(".navbar")
let switchBox = document.querySelector(".box_3")
let allPage = document.querySelector(".body")
let mail = document.querySelector(".mail-img")
let copied = document.querySelector(".copied")
console.log(mail);

function addBlackClass(input) {
    input.classList.toggle("dark-mode")
}

function addBlueClass(input) {
    input.classList.toggle("blue-mode")
}

inputSwitch.addEventListener("click", () => {
        addBlackClass(navBaar)
        addBlackClass(switchBox)
        addBlueClass(allPage)
})

mail.addEventListener("click", () => {
    navigator.clipboard.writeText("antoine-78280@hotmail.fr")
    copied.classList.add("display")
})

