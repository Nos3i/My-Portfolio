const isMobile = window.matchMedia("(max-width: 700px)").matches;
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: isMobile ? 0.5 : 0.4,
    rootMargin: isMobile ? "-300px 0px 0px 0px" : "0px 0px 0px -60px",
  },
);

const cards = document.querySelectorAll(".project-card");
cards.forEach((el) => observer.observe(el));
