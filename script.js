
let marqueeContent = document.querySelectorAll(".marquee_content");
let marqueeWidth = document.querySelector(".marquee_inner").offsetWidth;

let tween = gsap.to(marqueeContent, {
  x: -marqueeWidth, // Move the elements to the left to create the marquee effect
  stagger: {
    each: 1, // Adjust this value to control the delay between each element
    from: "start",
  },
  repeat: -1,
  duration: 25, // Adjust this duration for the animation speed
  ease: "linear",
});

tween.totalProgress(0.5);
