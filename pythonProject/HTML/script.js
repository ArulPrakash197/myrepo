btn = document.querySelector(".share");
forms = document.querySelector(".fact-form");
vote_button = document.querySelector(".vote-button");
btn.addEventListener("click", function () {
  if (forms.classList.contains("fact-form")) {
    forms.classList.remove("fact-form");
    btn.textContent = "Close";
  } else {
    forms.classList.add("fact-form");
    btn.textContent = "Share";
  }
});
formlist = document.querySelector(".fact-list");
console.dir(formlist);
formlist.innerHTML = "";
