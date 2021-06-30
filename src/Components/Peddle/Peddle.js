export default class Peddle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 150;
  }
  show(p5) {
    p5.rect(this.x, this.y, this.w, this.h);
  }
}
