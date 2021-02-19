import { gsap } from 'gsap';
import { EventEmitter } from 'events';
import {
  lerp,
  getMousePos,
  calcWinsize,
  distance,
  getRandomFloat,
} from './mouseFunctions';

// Track the mouse position
let mousepos = { x: 0, y: 0 };

export default class MagneticHover extends EventEmitter {
  constructor(el, amt) {
    super();
    window.addEventListener('mousemove', (ev) => (mousepos = getMousePos(ev)));
    window.addEventListener('resize', () => (this.winsize = calcWinsize()));

    this.Link = el;
    this.Amount = amt;

    // Calculate the viewport size
    this.winsize = calcWinsize();

    // amounts the button will translate
    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.1 },
      ty: { previous: 0, current: 0, amt: 0.1 },
    };

    // calculate size/position
    this.calculateSizePosition();
    // init events
    this.initEvents();
    // loop fn
    requestAnimationFrame(() => this.render());
  }

  calculateSizePosition() {
    // size/position
    this.rect = this.Link.getBoundingClientRect();
    // the movement will take place when the distance from the mouse to the center of the button is lower than this value
    this.distanceToTrigger = this.rect.width * this.Amount;
  }

  initEvents() {
    this.onResize = () => this.calculateSizePosition();
    window.addEventListener('resize', this.onResize);
  }

  render() {
    // calculate the distance from the mouse to the center of the button
    const distanceMouseButton = distance(
      mousepos.x,
      mousepos.y,
      this.rect.left + this.rect.width /2 ,
      this.rect.top + this.rect.height /2,
    );

    // new values for the translations and scale
    let x = 0;
    let y = 0;

    if (distanceMouseButton < this.distanceToTrigger) {
      x = (mousepos.x - (this.rect.left + this.rect.width / 2)) * 0.1;
      y = (mousepos.y - (this.rect.top + this.rect.height / 2)) * 0.1;
    }

    this.renderedStyles['tx'].current = x;
    this.renderedStyles['ty'].current = y;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt,
      );
    }

    this.Link.style.transform = `translate3d(${this.renderedStyles['tx'].previous}px, ${this.renderedStyles['ty'].previous}px, 0)`;

    requestAnimationFrame(() => this.render());
  }
}
