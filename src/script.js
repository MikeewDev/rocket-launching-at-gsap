gsap.registerPlugin(ScrollTrigger);

gsap.to(".item-2 img", {
  scrollTrigger: {
    trigger: ".item-2",
    scroller: ".container",
    start: 'center 100%',
    markers: false,
    scrub: true
  },
  scale: 0.25,
  duration: 2,
  ease: 'back'
});