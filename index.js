let count = 0;

function inc() {
  count += 1;
  document.getElementById("display1").innerText = count;
}

function save() {
  document.getElementById("two").innerText += count + "- ";
  count = 0;
  document.getElementById("display1").innerText = count;
}
