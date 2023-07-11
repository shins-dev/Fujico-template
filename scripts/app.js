window.addEventListener("load", function () {
  // const icons = document.querySelectorAll(".fsqs-icon");
  // icons.forEach((icon) => {
  //   icon.addEventListener("click", () => {
  //     const item = icon.closest(".fsqs-item");
  //     const hidden = item.querySelector(".fsqs-hidden");
  //     hidden.classList.toggle("is-show");
  //     const i = icon.querySelector("i");
  //     i.classList.toggle("icofont-minus-circle");
  //     i.classList.toggle("icofont-plus-circle");
  //   });
  // });
  const items = document.querySelectorAll(".fsqs-item");
  items.forEach((item) => {
    const icon = item.querySelector(".fsqs-icon");
    const hidden = item.querySelector(".fsqs-hidden");
    const i = icon.querySelector("i");
    icon.addEventListener("click", () => {
      items.forEach((otherItem) => {
        const otherIcon = otherItem.querySelector(".fsqs-icon i");
        const otherHidden = otherItem.querySelector(".fsqs-hidden");
        if (otherIcon !== i) {
          otherIcon.classList.add("icofont-plus-circle");
          otherIcon.classList.remove("icofont-minus-circle");
          otherHidden.classList.remove("is-show");
        }
      });
      hidden.classList.toggle("is-show");
      i.classList.toggle("icofont-plus-circle");
      i.classList.toggle("icofont-minus-circle");
    });
  });
});
