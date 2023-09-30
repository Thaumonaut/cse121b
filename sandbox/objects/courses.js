// courses.js
import aCourse from "./course.js";

aCourse.init();

document.querySelector("#enrollStudent").addEventListener("click", (event) => {
    let sectionNumInput = Number(document.querySelector("#sectionNumber").value)
    aCourse.enrollStudent(sectionNumInput)
})

document.querySelector("#dropStudent").addEventListener("click", (event) => {
    let sectionNumInput = Number(document.querySelector("#sectionNumber").value)
    aCourse.dropStudent(sectionNumInput)
})