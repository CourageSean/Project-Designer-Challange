const fill = document.getElementById("fill");
const confirm = document.getElementById("confirm");

function subscribe() {
  fill.style.display = "none";
  confirm.style.display = "inline-block";
  console.log(document.getElementById("email").value);
}

function setBack() {
  fill.style.display = "inline-block";
  confirm.style.display = "none";
}
