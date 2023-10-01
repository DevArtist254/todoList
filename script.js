const form = document.getElementById("form");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");

const data = {};

form.addEventListener('submit', submitFn)

function submitFn(e) {
    e.preventDefault();
    data.description = description.value;
    data.date = dueDate.value;
    data.complete = "Done";
    data.priority = "High";
    data.assignedTo = "Child";

    console.log(data);
}