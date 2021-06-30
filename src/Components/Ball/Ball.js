export default class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 20;
  }
  show(p5) {
    p5.ellipse(this.x, this.y, this.w, this.h);
  }
}
