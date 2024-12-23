import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section"); // Select all elements you want to animate

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the slideUpAnimation class to trigger the animation when the element comes into view
          entry.target.classList.add("slideUpAnimation");
          observer.unobserve(entry.target); // Stop observing after the animation is triggered
        }
      });
    }, { threshold: 0.4 }); // Trigger when 10% of the element is visible

    // Start observing each section
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      // Cleanup observer when the component is unmounted
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
};

export default useScrollAnimation;