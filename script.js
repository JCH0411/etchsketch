window.addEventListener("load", (event) => {
  const scrn = document.querySelector(".grid-screen")
  // let gridItem = document.createElement("div");

  for(x = 0; x < 400; x++){
      let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    scrn.appendChild(gridItem);
  }

})
