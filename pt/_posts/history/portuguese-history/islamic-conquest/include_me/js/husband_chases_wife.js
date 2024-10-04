const delay = 10;
const maxWidth = window.screen.width;
let myTimer;
let runAnimation = true;

class Sprite {
  constructor(sprite, speed, stopTimer, wife = null) {
    console.log("sprite created");
    this.name = sprite;
    this.element = document.getElementById(sprite);
    this.width = this.element.offsetWidth;
    this.left = 0 - this.width;
    this.stopTimer = stopTimer;
    this.element.style.left = this.left + "px";
    this.speed = speed;
    this.wife = wife;
  }

  display() {
    /* stop on husband */
    if (this.name == "husband") {
      if (this.left >= maxWidth) {
        stopAnimation();
        console.log("animation stopped");
        return;
      } else if (this.wife != null) {
        if (this.wife.left < maxWidth / 2) {
          return;
        } else {
          this.setVisible();
        }
      }
    }
    this.left += this.speed;
    this.element.style.left = this.left + "px";
    /*console.log(this.left);*/
  }

  setVisible() {
    this.element.style.display = "inline";
  }

  setInvisible() {
    this.element.style.display = "none";
  }
}

function move() {
  if (runAnimation) {
    myTimer = setTimeout(() => {
      wife.display();
      husband.display();
      move();
    }, delay);
  }
}

function printValues(sprite) {
  console.log(sprite.stopTimer);
}

let wife;
let husband;

function startAnimation() {
  runAnimation = true;
  wife = new Sprite("wife", 1, false, null);
  husband = new Sprite("husband", 1.5, true, wife);
  wife.setVisible();
  husband.setInvisible();
  move();
}

function stopAnimation() {
  runAnimation = false;
  wife.setInvisible();
  husband.setInvisible();
  wife = null;
  husband = null;
}
/*printValues(wife);*/

/* code that detects viewport activity */
var opts = {
  root: null,
  threshold: 0.25,
};

const myObserver = new IntersectionObserver(handleIntersection, opts);
const myIds = new Array("#tease");

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      console.log("intersected");
      setTimeout(() => {
        startAnimation();
      }, 1000 * 10);
    } else {
      stopAnimation();
    }
  });
}

function addObservers(elements) {
  elements.forEach((element) => {
    myObserver.observe(document.querySelector(element));
  });
}

addObservers(myIds);
