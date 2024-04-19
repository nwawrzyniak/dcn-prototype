function onLoad() {
    const tableObject = document.querySelector("img");
    const screenTeensBox = document.querySelector("#screen_teens_box");
    var toggle=true;

    tableObject.addEventListener("click", (event) => {
        if (toggle) {
            screenTeensBox.style.display = "block";
        } else {
            screenTeensBox.style.display = "none";
        }
        toggle = !toggle;
      });
}

document.addEventListener("DOMContentLoaded", onLoad);
