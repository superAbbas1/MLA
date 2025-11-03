import { useEffect } from "react";

const useScrollAnimation = (path) => {
  useEffect(() => {
    const resetElements = document.querySelectorAll(".animate-on-scroll");
    resetElements.forEach((el) => {
      el.classList.remove("visible");

      const children = el.querySelectorAll(":scope > div");
      children.forEach((child) => {
        child.style.transitionDelay = "0ms";
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const parent = entry.target;
          parent.classList.add("visible");

          const children = parent.querySelectorAll(":scope > div");
          children.forEach((child, index) => {
            child.style.transitionDelay = `${index * 150}ms`;
          });

          // Only animate once per page view
          observer.unobserve(parent);
        }
      });
    }, { threshold: 0.3 });

    resetElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [path]);
};

export default useScrollAnimation;