document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const iconWrapper = header.querySelector(".icon-wrapper");

      // Close other accordions
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

      // Toggle current accordion
      const isHidden = content.classList.contains("hidden");
      content.classList.toggle("hidden");
      content.style.maxHeight = isHidden ? content.scrollHeight + "px" : null;
      iconWrapper.classList.toggle("active");
    });
  });
});

// ==============current year
document.getElementById("current-year").textContent = new Date().getFullYear();