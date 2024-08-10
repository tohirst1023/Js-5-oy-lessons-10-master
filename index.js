document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todoForm");
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = input.value.trim();
    if (task === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement("li");
    li.classList.add("task-item");

    const span = document.createElement("span");
    span.textContent = task;

    const doneBTN = document.createElement("button");
    doneBTN.textContent = "Done";
    doneBTN.classList.add("doneBtn");

    const delBTN = document.createElement("button");
    delBTN.textContent = "Delete";
    delBTN.classList.add("delBtn");

    li.appendChild(span);
    li.appendChild(doneBTN);
    li.appendChild(delBTN);
    list.appendChild(li);

    input.value = "";
  });

  list.addEventListener("click", (event) => {
    if (event.target.classList.contains("doneBtn")) {
      const span = event.target.previousElementSibling;
      span.classList.toggle("strike");
    } else if (event.target.classList.contains("delBtn")) {
      const li = event.target.parentElement;
      li.remove();
    }
  });
});
