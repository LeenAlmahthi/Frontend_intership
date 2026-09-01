console.log("test");
let selectdelete = -1;
const matrial = [
    {
        name: "Java script",
        Price: 30,
        StatusCourse: "Enroll"
    },
    {
        name: "C++",
        Price: 40,
        StatusCourse: "Enroll"
    },
    {
        name: "Database",
        Price: 70,
        StatusCourse: "Enroll"
    },
];
function CreateCard(x, i) {

    let div_course = document.createElement("div");
    div_course.id = "card" + i;
    div_course.classList.add("cards");
    contuner.appendChild(div_course);

    let card = document.createElement("div");
    card.classList.add("cards");
    div_course.appendChild(card);

    let course = document.createElement("div");
    course.classList.add("course");
    div_course.appendChild(course);

    let delete_btn = document.createElement("button");
    delete_btn.textContent = ("-");
    delete_btn.id = i;
    delete_btn.classList.add("delete_btn");

    delete_btn.addEventListener("click", (event) => {
        console.log("delete btn");
        selectdelete = event.target.id;
        console.log(selectdelete);
        let _div = document.querySelector("#del_btn");
        _div.style.display = "flex";

    });
    course.appendChild(delete_btn);

    let _h2 = document.createElement("h2");
    _h2.textContent = x.name;
    course.appendChild(_h2);

    let _p = document.createElement("p");
    _p.textContent = "Price: " + x.Price + "$";
    course.appendChild(_p);

    let _div = document.createElement("div");
    //    div_course.classList.add("cards");
    _div.classList.add("state");
    _div.textContent = x.StatusCourse;
    course.appendChild(_div);
}
let contuner = document.querySelector(".All_cards");
matrial.forEach((x, i) => {
    CreateCard(x, i);

});

let hold_form = document.createElement("div");
hold_form.classList.add("holdFromAdd");
document.body.append(hold_form);

let form_add = document.createElement("form");
form_add.classList.add("AddCourse");
hold_form.append(form_add);

let header_add = document.createElement("h2");
header_add.textContent = "Add Course";
form_add.append(header_add);

let name_input = document.createElement("input");
name_input.placeholder = "Course Name";
name_input.classList.add("AddCourseInput");
form_add.append(name_input);

let price_input = document.createElement("input");
price_input.placeholder = "Course Price";
price_input.classList.add("AddCourseInput");
form_add.append(price_input);

let button_add = document.createElement("button");
button_add.type = "submit";
button_add.textContent = "Add ";
button_add.classList.add("AddCoursebtn");
form_add.append(button_add);

let btn = document.querySelector("#addcourse");
btn.addEventListener("click", () => {
    console.log("clcik button ");
    hold_form.style.display = "flex";
})

form_add.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit button ", name_input.value, price_input.value);
    const tmp = {
        name: name_input.value,
        Price: price_input.value,
        StatusCourse: "Enroll"
    };
    matrial.push(tmp);
    CreateCard(tmp, matrial.length - 1);
    hold_form.style.display = "none";
});

let del = document.querySelector("#del");

del.addEventListener("click", (event) => {
    matrial.splice(selectdelete, 1);
     let cardToDelete = document.getElementById("card" + selectdelete);
    cardToDelete.remove();
    _div.style.display = "none";
});

let cancle = document.querySelector("#cancel");
let _div = document.querySelector("#del_btn");

cancle.addEventListener("click", () => {
    _div.style.display = "none";
});
