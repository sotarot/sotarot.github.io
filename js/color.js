let colorPicker;
const defaultColor = "#141414";

window.addEventListener("load", startup, false);

function startup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("change", updateAll, false);
  colorPicker.select();
}


function updateAll(event) {
  document.querySelectorAll("body").forEach((body) => {
    body.style.backgroundColor = event.target.value;
  });
}