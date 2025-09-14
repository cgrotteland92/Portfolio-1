document.getElementById("scroll-arrow").addEventListener("click", () => {
  document.getElementById("portfolio").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
