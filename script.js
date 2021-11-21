function changeColor() {
  return (
    Math.floor(Math.random() * 256).toString(16) +
    Math.floor(Math.random() * 256).toString(16) +
    Math.floor(Math.random() * 256).toString(16)
  );
}

document.addEventListener("click", (e) => {
  if (e.target.closest(".btn")) {
    const body = document.querySelector("body");
    let color =
      (body.style.background = `linear-gradient(to right, #${changeColor()}, #${changeColor()})`);
    const smallTitle = document.querySelector("span");
    smallTitle.textContent = ` ${color}`;
  }
});
