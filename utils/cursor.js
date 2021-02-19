import { gsap } from 'gsap';
import CSSRulePlugin from 'gsap/dist/CSSRulePlugin';
import { lerp, getMousePos, getSiblings } from './mouseFunctions';

gsap.registerPlugin(CSSRulePlugin);

// Grab the mouse position and set it to mouse state
let mouse = { x: 0, y: 0 };

export default class Cursor {
  constructor(el) {
    window.addEventListener('mousemove', (ev) => (mouse = getMousePos(ev)));

    this.Cursor = el;
    this.Item = document.querySelectorAll('.hero-inner-link-item');
    this.Link = document.querySelectorAll('.hover-link');
    this.Hero = document.querySelector('.hero-inner');
    this.bounds = this.Cursor.getBoundingClientRect();
    this.renderedStyles = {
      x: { previous: 0, current: 0, amt: 0.2 },
      y: { previous: 0, current: 0, amt: 0.2 },
      scale: { previous: 1, current: 1, amt: 0.2 },
      opacity: { previous: 1, current: 1, amt: 0.2 },
    };

    this.onMouseMoveEv = () => {
      this.renderedStyles.x.previous = this.renderedStyles.x.current = mouse.x;
      this.renderedStyles.y.previous = this.renderedStyles.y.previous = mouse.y;

      // Set cursor opacity to 1 when hovered on screen
      gsap.to(this.Cursor, {
        duration: 1,
        ease: 'Power3.easeOut',
        opacity: 1,
      });

      // Execute scale function
      this.onScaleMouse();

      // Execute hover function
      this.onLinkHover();

      // The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
      requestAnimationFrame(() => this.render());
      // Clean up function
      window.removeEventListener('mousemove', this.onMouseMoveEv);
    };
    // Scale cursor animation
    window.addEventListener('mousemove', this.onMouseMoveEv);
  }

  onScaleMouse() {
    // Loop through all items
    this.Item.forEach((link) => {
      // If I am hovering on the item for on page load I want to scale the cursor media
      if (link.matches(':hover')) {
        this.setVideo(link);
        this.ScaleCursor(this.Cursor.children[0], 0.8);
      }
      // On mouse enter scale the media-cursor to .8
      link.addEventListener('mouseenter', () => {
        this.setVideo(link);
        this.ScaleCursor(this.Cursor.children[0], 0.8);
      });
      // On mouse enter scale the media-cursor to 0
      link.addEventListener('mouseleave', () => {
        this.ScaleCursor(this.Cursor.children[0], 0);
      });
      // Hover on a tag to expand to 1.2
      link.children[1].addEventListener('mouseenter', () => {
        this.Cursor.classList.add('media-blend');
        this.ScaleCursor(this.Cursor.children[0], 1.2);
      });
      // Bring scale back down .8
      link.children[1].addEventListener('mouseleave', () => {
        this.Cursor.classList.remove('media-blend');
        this.ScaleCursor(this.Cursor.children[0], 0.8);
      });
    });
  }

  onLinkHover() {
    const root = document.documentElement;

    this.Link.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        this.enter();
        root.style.setProperty('--scale', 1);
      });
      link.addEventListener('mouseleave', () => {
        this.leave();
        root.style.setProperty('--scale', 0.2);
      });
    });
  }

  setVideo(el) {
    // Grab the data-video-src and make sure it matches the video that should be displayed
    let src = el.getAttribute('data-video-src');
    let video = document.querySelector(`#${src}`);
    let siblings = getSiblings(video);

    if (video.id == src) {
      gsap.set(video, { zIndex: 4, opacity: 1 });
      siblings.forEach((i) => {
        gsap.set(i, { zIndex: 1, opacity: 0 });
      });
    }
  }

  ScaleCursor(el, amount) {
    gsap.to(el, {
      duration: 0.6,
      scale: amount,
      ease: 'Power3.easeOut',
    });
  }

  enter() {
    this.renderedStyles['scale'].current = 4;
    this.renderedStyles['opacity'].current = 0.2;
  }

  leave() {
    this.renderedStyles['scale'].current = 1;
    this.renderedStyles['opacity'].current = 1;
  }

  render() {
    this.renderedStyles.x.current = mouse.x;
    this.renderedStyles.y.current = mouse.y;

    // lerp
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt,
      );
    }
    // Setting the cursor x and y to our cursoer html element
    this.Cursor.style.transform = `translateX(${this.renderedStyles.x.previous}px) translateY(${this.renderedStyles.y.previous}px)`;
    // this.Cursor.style.opacity = this.renderedStyles['opacity'].previous;

    // RAF
    requestAnimationFrame(() => this.render());
  }
}
