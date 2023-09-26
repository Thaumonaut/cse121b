// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  enrollStudent: function (sectionNum) {
    this.modifySection(sectionNum, (index) => this.sections[index].enrolled++)
  },
  dropStudent: function(sectionNum) {
    this.modifySection(sectionNum, (index) => this.sections[index].enrolled--)
  },
  modifySection: function (sectionNum, update) {
    let index = this.sections.findIndex(section => section.sectionNum === sectionNum);

    if(index == -1) {
        alert("That Section does not exist, try another value!")
        return;
    }
    update(index)
    sectionsToHTML(this.sections)
    return;

  }
};

function courseToHtml(course) {
    document.getElementById("courseName").textContent = course.name;
    document.getElementById("courseCode").textContent = course.code;
}

function sectionsToHTML(sections) {
    let output = sections.map(section => 
        `
        <tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>
        `
    )

    document.querySelector("#sections").innerHTML = output.join("")
    
}


document.querySelector("#enrollStudent").addEventListener("click", (event) => {
    let sectionNumInput = Number(document.querySelector("#sectionNumber").value)
    aCourse.enrollStudent(sectionNumInput)
})

document.querySelector("#dropStudent").addEventListener("click", (event) => {
    let sectionNumInput = Number(document.querySelector("#sectionNumber").value)
    aCourse.dropStudent(sectionNumInput)
})

courseToHtml(aCourse);
sectionsToHTML(aCourse.sections);

aCourse.enrollStudent(1);