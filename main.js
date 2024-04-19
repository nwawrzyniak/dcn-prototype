function onLoad() {
    const tableObject = document.querySelector("img");
    const screenTeensBox = document.querySelector("#screen_teens_box");

    tableObject.addEventListener("click", (event) => {
        //document.body.style.backgroundColor = "black";
        screenTeensBox.style.display = "block";
      });
}

document.addEventListener("DOMContentLoaded", onLoad);
