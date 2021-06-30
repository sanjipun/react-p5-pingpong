import Ball from "../Components/Ball/Ball";
import Peddle from "../Components/Peddle/Peddle";

export const draw = (p5, yRight, vyRight, yLeft) => {
  const LeftPeddle = new Peddle(20, yLeft);
  const RightPeddle = new Peddle(window.innerWidth - 60, yRight);
  const MainBall = new Ball(100, 300);
  p5.background(0);
  LeftPeddle.show(p5);
  RightPeddle.show(p5);
  MainBall.show(p5);

  const cpuMove = () => {
    if (yRight <= 0) {
      vyRight = 1;
    } else if (yRight >= window.innerHeight - 150) {
      vyRight = -1;
    }
    yRight += vyRight * 10;
  };
  cpuMove();
};
