const ul = document.querySelector("ul.list-group");
const p = document.querySelector("#description");
ul.addEventListener("mouseover", onMouseOver);
function onMouseOver(e) {
  if (e.target.matches("li")) {
    const desc = e.target.dataset.description;
    p.innerHTML = desc;
  }
}
