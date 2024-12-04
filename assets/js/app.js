document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const iconWrapper = header.querySelector(".icon-wrapper");

      document.querySelectorAll(".accordion-content").forEach((otherContent) => {
        if (otherContent !== content) {
          otherContent.classList.add("hidden");
          otherContent.style.maxHeight = null;
        }
      });
      document.querySelectorAll(".icon-wrapper").forEach((otherIconWrapper) => {
        if (otherIconWrapper !== iconWrapper) {
          otherIconWrapper.classList.remove("active");
        }
      });
      const isHidden = content.classList.contains("hidden");
      content.classList.toggle("hidden");
      content.style.maxHeight = isHidden ? content.scrollHeight + "px" : null;
      iconWrapper.classList.toggle("active");
    });
  });
});

// ==============current year
document.getElementById("current-year").textContent = new Date().getFullYear();

// =============back to top===========

const backTop = document.querySelector(".back-top");

backTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.onscroll = () => {
  if (window.scrollY > 150) {
    backTop.classList.remove("hidden");
    backTop.classList.add("block");
  } else {
    backTop.classList.remove("block");
    backTop.classList.add("hidden");
  }
};