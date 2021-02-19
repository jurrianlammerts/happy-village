// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

const calcWinsize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

// Gets the mouse position
const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.clientX || e.clientY) {
    posx = e.clientX;
    posy = e.clientY;
  }
  return { x: posx, y: posy };
};

const distance = (x1, y1, x2, y2) => {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.hypot(a, b);
};

// Generate a random float.
const getRandomFloat = (min, max) =>
  (Math.random() * (max - min) + min).toFixed(2);

// Get sibilings
const getSiblings = (e) => {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild;
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

export {
  getSiblings,
  map,
  lerp,
  calcWinsize,
  getMousePos,
  distance,
  getRandomFloat,
};
