const earlySection = document.querySelector(".early");
const form = document.querySelector(".early__form");
const inputElement = document.querySelector(".early__input");

function emailIsValid(email) {
  const regExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  return email.match(regExp);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const email = formData.get("email");

  if (emailIsValid(email)) {
    earlySection.classList.add("early--submitted");
  } else {
    inputElement.classList.add("early__input--invalid");
  }
});
