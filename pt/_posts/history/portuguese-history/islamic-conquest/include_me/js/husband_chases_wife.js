/*const wife = document.getElementById("wife");
const husband = document.getElementById("husband");
const canvas = document.getElementById("canvas");

const maxLeft = window.innerWidth;
const wifeWidth = (width = { width, height } = wife.getBoundingClientRect());

let myTimer;
let wifeX = 0 - wifeWidth;
let husbandX = 0 - husband.style.width; 
*/

const delay = 10;
const maxWidth = window.screen.width;
let myTimer;
let runAnimation = true;
/*const offsets = document.getElementById("parent").getBoundingClientRect();
let ptop = offsets.top;
let pleft = offsets.left;*/

class Sprite {
  constructor(sprite, speed, stopTimer, wife = null) {
    console.log("sprite created");
    this.name = sprite;
    this.element = document.getElementById(sprite);
    if (this.name === "husband") {
      this.element.style.display = "none";
    }
    this.width = this.element.offsetWidth;
    this.left = 0 - this.width;
    this.stopTimer = stopTimer;
    this.element.style.left = this.left + "px";
    this.speed = speed;
    this.wife = wife;
    /*this.element.style.top = ptop + "px";*/
  }

  display() {
    /* stop on husband */
    if (this.name == "husband") {
      if (this.left >= maxWidth) {
        runAnimation = false;
        console.log("animation stopped");
        return;
      } else if (this.wife != null) {
        if (this.wife.left < maxWidth / 2) {
          return;
        } else {
          this.element.style.display = "inline";
        }
      }
    }
    this.left += this.speed;
    this.element.style.left = this.left + "px";
    /*console.log(this.left);*/
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

const wife = new Sprite("wife", 1, false, null);
const husband = new Sprite("husband", 2, true, wife);
/*printValues(wife);*/
setTimeout(() => {
  move();
}, 1000 * 10);
