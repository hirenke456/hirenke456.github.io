const filters = document.querySelector("#project-filters");
const buttons = [...filters.querySelectorAll("button")];
const projects = [...document.querySelectorAll("#project-list .project")];
document.querySelector("#project-empty").hidden = projects.length > 0;
const count = document.querySelector("#project-count");
const categories = new Set(projects.map((project) => project.dataset.category));

for (const button of buttons) {
  if (button.dataset.filter !== "all" && !categories.has(button.dataset.filter)) {
    button.hidden = true;
  }
}
filters.hidden = buttons.filter((button) => !button.hidden).length <= 1;

filters.addEventListener("click", (event) => {
  const selected = event.target.closest("button[data-filter]");
  if (!selected) return;

  for (const button of buttons) {
    button.setAttribute("aria-pressed", String(button === selected));
  }
  const category = selected.dataset.filter;
  let visible = 0;
  for (const project of projects) {
    project.hidden = category !== "all" && project.dataset.category !== category;
    if (!project.hidden) visible += 1;
  }
  count.textContent = visible === 1 ? "1 project shown" : `${visible} projects shown`;
});
