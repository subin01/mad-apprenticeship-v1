/* global gsap ScrollTrigger */
import './styles.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

/* Hide header on scroll */
let prevScrollpos = window.pageYOffset;
const headerEl = document.querySelector('header');
window.addEventListener(
  'scroll',
  () => {
    let currentScrollPos = window.pageYOffset;
    headerEl.style.top = prevScrollpos > currentScrollPos ? '0' : '-7rem';
    prevScrollpos = currentScrollPos;
  },
  false,
);

/* Show page when ready */
gsap.to('body', 0, { css: { visibility: 'visible' } });

gsap.from('header', 1.8, {
  ease: 'power4.out',
  stagger: {
    amount: 0.4,
  },
  y: '-20rem',
  scaleY: 3,
  delay: 6,
});

/************** 1. Are You Mad? *****************/

const tl = gsap.timeline(0);
tl.from('.panel-areyoumad h2 span', {
  duration: 2,
  ease: 'power4.out',
  stagger: {
    amount: 0.4,
  },
  y: '15rem',
  skewY: 10,
  delay: 2,
})
  .from('.fist', {
    duration: 1,
    stagger: {
      amount: 0.4,
    },
    ease: 'power4.out',
    y: '5rem',
    opacity: 0,
  })
  .from('.boy', {
    duration: 1,
    delay: '-0.8',
    ease: 'power4.out',
    y: '5rem',
    opacity: 0,
  })
  .from('.arrow-r-b', {
    duration: 1,
    delay: '-0.8',
    ease: 'power4.out',
    y: '1rem',
    opacity: 0,
  });

const tl0 = gsap.timeline({
  scrollTrigger: {
    trigger: '.panel-because',
    start: 'top 95%',
    end: 'top 10%',
    scrub: 1,
    // markers: true,
    id: 'arrow',
  },
});

tl0
  .to('.arrow-mask', {
    ease: 'linear',
    height: '34rem',
    duration: 5,
  })
  .from('.panel-because h2 div', 1.8, {
    duration: 2,
    ease: 'power4.out',
    stagger: {
      amount: 0.4,
    },
    y: '-4rem',
    opacity: 0,
    delay: -0.5,
  });

/************** 2. Because *****************/

/************** 3. Real change *****************/

/************** 4. You!  *****************/
//inital place
let startY = document.querySelector('.panel-realchange .you-line1').getBoundingClientRect().top + window.scrollY;
gsap.set('.thecircle', {
  opacity: 1,
  y: startY,
  x: '-10rem',
});

gsap.to('.thecircle', {
  scrollTrigger: {
    trigger: '.panel-realchange',
    // toggleActions: 'restart none none restart',
    start: 'top 10%',
    end: 'center 20%',
    id: 'ball-enter',
    // markers: true,
  },
  opacity: 1,
  x: '6.5rem',
});

/* Ball drop  */
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.thecircle',
    // toggleActions: 'restart pause reverse pause',
    start: 'top 10%',
    id: 'ball-drop',
    // markers: true,
  },
});
tl1
  .to('.thecircle', {
    y: () => document.querySelector('.you-line2').getBoundingClientRect().top + window.scrollY,
    duration: 1,
    ease: 'bounce.out',
  })
  .to('.thecircle', {
    duration: 1,
    ease: 'bounce.out',
    x: '28.5rem',
  });

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.panel-you',
    // toggleActions: 'restart pause reverse pause',
    start: 'top 20%',
    // end: 'top top',
    // scrub: true,
    // markers: true,
    id: 'you-texts',
  },
});

tl2
  .from('.panel-you .text1 li', {
    duration: 1.8,
    ease: 'expo.inOut',
    stagger: {
      amount: 0.4,
    },
    xPercent: -200,
    skewX: 10,
  })
  .from('.panel-you .text2 span', {
    duration: 1.8,
    ease: 'expo.inOut',
    stagger: {
      amount: 0.4,
    },
    xPercent: -200,
    skewX: 10,
    delay: -1,
  });

/************** 3. Life changing!  *****************/
/* Ball motion  */
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.panel-lifechange',
    // toggleActions: 'restart pause reverse pause',
    start: 'top 10%',
    id: 'ball-U2',
    // markers: true,
  },
});

tl3
  .to('.thecircle', {
    y: () => document.querySelector('.panel-lifechange .you-line3').getBoundingClientRect().top + window.scrollY,
    duration: 1,
    ease: 'bounce.out',
  })
  .to('.thecircle', {
    duration: 1,
    ease: 'bounce.out',
    x: '28.5rem',
  });

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.panel-lifechange .you2',
    // scrub: true,
    // toggleActions: 'restart pause reverse pause',
    start: 'top 10%',
    id: 'ball-world',
    // markers: true,
  },
});

tl4
  .to('.thecircle', {
    duration: 1,
    ease: 'bounce.out',
    y: () => document.querySelector('.you-line4').getBoundingClientRect().top + window.scrollY,
  })
  .to('.thecircle', {
    x: '18rem',
    duration: 1,
    ease: 'bounce.out',
  })
  .to('.thecircle', {
    scale: 1.8,
    duration: 1,
  });
