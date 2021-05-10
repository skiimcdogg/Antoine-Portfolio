let inputSwitch = document.querySelector(".switch_3");
let navBaar = document.querySelector(".navbar")
let switchBox = document.querySelector(".box_3")
let allPage = document.querySelector(".body")
console.log(switchBox);

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

