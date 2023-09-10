const questions = document.querySelector("#answer-button");
let selection = 0;
console.log(questions);
questions.addEventListener("click", (eve) => {
  if (eve.target.id === "answer-button") return;
  selection = eve.target.id;
  console.log(typeof selection);
});
const submitButton = document.querySelector("#submit-btn");
submitButton.addEventListener("click", () => {
  if (selection !== "3") alert("fail");
  else alert("pass");
});
