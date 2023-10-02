// document.getElementById("click_button").addEventListener("click", function () {
//   const clickButton = document.getElementById("box");
//   clickButton.style.backgroundColor = "";
//   clickButton.classList.add("box_two");
// });
// document.getElementById("update_button").addEventListener("click", function () {
//   const input = document.getElementById("input");
//   const inputText = input.value;
//   const p = document.getElementById("update_text");
//   p.innerText = input.value;
//   input.value = " ";
// });
// document.getElementById("post_button").addEventListener("click", function () {
//   const inputArea = document.getElementById("comment_area");
//   const commentText = inputArea.value;
//   const commentContainer = document.getElementById("comment_container");
//   const p = document.createElement("p");
//   p.innerText = inputArea.value;
//   commentContainer.appendChild(p);
//   inputArea.value = " ";
// });

/* Delete Page */

document
  .getElementById("delete_input")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById("delete_btn");
    if (text === "delete") {
      deleteButton.removeAttribute("disabled");
    }
    else{
        deleteButton.setAttribute("disabled", true);
    }
  });
