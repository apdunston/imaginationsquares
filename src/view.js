export class View {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d"); 
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(300, 150);
    this.ctx.stroke();
  }
}