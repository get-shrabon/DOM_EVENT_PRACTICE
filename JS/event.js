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

// document
//   .getElementById("delete_input")
//   .addEventListener("keyup", function (event) {
//     const text = event.target.value;
//     const deleteButton = document.getElementById("delete_btn");
//     if (text === "delete") {
//       deleteButton.removeAttribute("disabled");
//     } else {
//       deleteButton.setAttribute("disabled", true);
//     }
//   });
// document.getElementById("delete_btn").addEventListener("click", function () {
//   const secret = document.getElementById("hide_text");
//   secret.style.display = "none";
// });

/* Second Hide  */
document
  .getElementById("text_type")
  .addEventListener("keyup", function (event) {
    const hideTextes = event.target.value;
    const hideButton = document.getElementById("hide_btn");
    if (hideTextes === "hide") {
      hideButton.removeAttribute("disabled");
    } else {
      hideButton.setAttribute("disabled", true);
    }
  });
document.getElementById("hide_btn").addEventListener("click", function () {
  const hideText = document.getElementById("hide_all_text");
  hideText.style.display = "none";
});