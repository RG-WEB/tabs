const btn = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");

console.log(btn);
// console.log(contents);

btn.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const activeTabId = e.currentTarget.dataset.id;

    console.log(activeTabId);

    contents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    btn.forEach((tab) => {
      tab.classList.remove("active");
      e.target.classList.add("active");
    });
    const element = document.getElementById(activeTabId);
    element.classList.add("active");
  });
});
